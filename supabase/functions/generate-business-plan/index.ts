
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

const BUSINESS_PLAN_GENERATION_PROMPT = `Based on the conversation history provided, generate a comprehensive, professional business plan specification. Structure it exactly as follows:

# EXECUTIVE SUMMARY
[2-3 paragraphs summarizing the business opportunity, solution, market, and financial projections]

# PROBLEM STATEMENT
[Clear articulation of the problem being solved]

# SOLUTION OVERVIEW
[Detailed description of the proposed solution]

# MARKET ANALYSIS
## Target Market
[Description of target customers and market size]

## Market Opportunity
[Market size, growth potential, trends]

## Competitive Analysis
[Key competitors and competitive advantages]

# BUSINESS MODEL
## Revenue Streams
[How the business will make money]

## Pricing Strategy
[Pricing model and rationale]

# MARKETING & SALES STRATEGY
[Customer acquisition and retention strategies]

# OPERATIONS PLAN
[How the business will operate day-to-day]

# FINANCIAL PROJECTIONS
## Revenue Projections (3-year)
[Year 1, Year 2, Year 3 revenue estimates]

## Key Metrics
[Important KPIs and financial metrics]

# TEAM & MANAGEMENT
[Key team members and organizational structure]

# IMPLEMENTATION ROADMAP
## Phase 1 (Months 1-6)
[Initial development and launch activities]

## Phase 2 (Months 7-12)
[Growth and optimization activities]

## Phase 3 (Year 2+)
[Scaling and expansion activities]

# RISK ANALYSIS
[Key risks and mitigation strategies]

# FUNDING REQUIREMENTS
[Capital needs and use of funds]

Make it professional, detailed, and investor-ready. Use specific data points from the conversation where available.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { conversationHistory, userId, projectId } = await req.json();

    if (!conversationHistory || !userId || !projectId) {
      return new Response(
        JSON.stringify({ error: 'Conversation history, userId, and projectId are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create conversation context
    const conversationContext = conversationHistory
      .map((msg: any) => `${msg.type}: ${msg.content}`)
      .join('\n\n');

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { 
            role: 'system', 
            content: BUSINESS_PLAN_GENERATION_PROMPT 
          },
          { 
            role: 'user', 
            content: `Here is the conversation history with the user about their business idea:\n\n${conversationContext}\n\nPlease generate a comprehensive business plan based on this information.` 
          }
        ],
        temperature: 0.3,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const businessPlan = data.choices[0].message.content;

    // Save the generated business plan to the project
    const { error: updateError } = await supabase
      .from('projects')
      .update({
        generated_specification: { businessPlan },
        status: 'completed',
        updated_at: new Date().toISOString()
      })
      .eq('id', projectId)
      .eq('user_id', userId);

    if (updateError) {
      console.error('Error updating project:', updateError);
    }

    // Log usage
    await supabase.from('usage_logs').insert({
      user_id: userId,
      project_id: projectId,
      action: 'generate_business_plan',
      ai_model_used: 'gpt-4o',
      tokens_consumed: data.usage?.total_tokens || 0,
      credits_used: 3,
      metadata: { type: 'business_plan_generation' }
    });

    return new Response(
      JSON.stringify({ businessPlan }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Business plan generation error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate business plan' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
