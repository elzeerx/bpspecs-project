
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const BUSINESS_PLAN_SYSTEM_PROMPT = `You are an expert business plan consultant specializing in creating comprehensive, investor-ready business specifications. Your role is to guide users through a conversational process to develop a complete business plan.

Key Guidelines:
1. Ask ONE focused question at a time
2. Build on previous answers to create context
3. Be encouraging and professional
4. Provide insights and suggestions when appropriate
5. When you have enough information, offer to generate the complete business plan

Question Flow:
1. Business Problem/Solution
2. Target Market & Customer Segments
3. Revenue Model & Pricing
4. Competition Analysis
5. Marketing Strategy
6. Operations Plan
7. Financial Projections
8. Team & Management
9. Implementation Timeline
10. Funding Requirements

When generating the final business plan, structure it with:
- Executive Summary
- Problem Statement
- Solution Overview
- Market Analysis
- Business Model
- Marketing Strategy
- Operations Plan
- Financial Projections
- Team Structure
- Implementation Roadmap
- Risk Analysis
- Funding Requirements

Keep responses conversational but professional. Aim for 2-3 sentences per response unless generating the final plan.`;

async function callOpenAI(messages: any[], userId: string) {
  const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: BUSINESS_PLAN_SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Log usage for cost tracking
    await supabase.from('usage_logs').insert({
      user_id: userId,
      action: 'ai_chat',
      ai_model_used: 'gpt-4o',
      tokens_consumed: data.usage?.total_tokens || 0,
      credits_used: 1,
      metadata: { provider: 'openai' }
    });

    return {
      content: data.choices[0].message.content,
      provider: 'openai'
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
}

async function callAnthropic(messages: any[], userId: string) {
  const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
  
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${anthropicApiKey}`,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        system: BUSINESS_PLAN_SYSTEM_PROMPT,
        messages: messages.map(msg => ({
          role: msg.role === 'assistant' ? 'assistant' : 'user',
          content: msg.content
        }))
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Log usage for cost tracking
    await supabase.from('usage_logs').insert({
      user_id: userId,
      action: 'ai_chat',
      ai_model_used: 'claude-3-5-sonnet',
      tokens_consumed: data.usage?.input_tokens + data.usage?.output_tokens || 0,
      credits_used: 1,
      metadata: { provider: 'anthropic' }
    });

    return {
      content: data.content[0].text,
      provider: 'anthropic'
    };
  } catch (error) {
    console.error('Anthropic API error:', error);
    throw error;
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, userId, projectId } = await req.json();

    if (!messages || !userId) {
      return new Response(
        JSON.stringify({ error: 'Messages and userId are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Try OpenAI first, fallback to Anthropic
    let aiResponse;
    try {
      aiResponse = await callOpenAI(messages, userId);
    } catch (openAIError) {
      console.log('OpenAI failed, trying Anthropic:', openAIError);
      try {
        aiResponse = await callAnthropic(messages, userId);
      } catch (anthropicError) {
        console.error('Both AI providers failed:', { openAIError, anthropicError });
        return new Response(
          JSON.stringify({ error: 'AI service temporarily unavailable' }),
          { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Save conversation to database if projectId exists
    if (projectId) {
      const conversationData = {
        messages: [...messages, { role: 'assistant', content: aiResponse.content }],
        provider: aiResponse.provider
      };

      await supabase
        .from('projects')
        .update({ 
          ai_analysis: conversationData,
          updated_at: new Date().toISOString()
        })
        .eq('id', projectId)
        .eq('user_id', userId);
    }

    return new Response(
      JSON.stringify({ 
        content: aiResponse.content,
        provider: aiResponse.provider 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('AI Chat function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
