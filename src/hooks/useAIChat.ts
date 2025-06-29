
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface UseAIChatReturn {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (content: string, projectId?: string) => Promise<void>;
  generateBusinessPlan: (projectId: string) => Promise<string | null>;
  clearMessages: () => void;
}

export const useAIChat = (): UseAIChatReturn => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your AI business plan assistant. I'll help you create a comprehensive business specification by asking you some questions. Let's start with your business idea - what problem are you trying to solve?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const { user } = useAuth();

  const sendMessage = useCallback(async (content: string, projectId?: string) => {
    if (!content.trim() || !user) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          messages: [...messages, userMessage].map(msg => ({
            role: msg.type === 'assistant' ? 'assistant' : 'user',
            content: msg.content
          })),
          userId: user.id,
          projectId
        }
      });

      if (error) throw error;

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: data.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
      
      // Add fallback message
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Could you please try again in a moment?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [messages, user]);

  const generateBusinessPlan = useCallback(async (projectId: string): Promise<string | null> => {
    if (!user) return null;

    try {
      toast.info('Generating your comprehensive business plan...');
      
      const { data, error } = await supabase.functions.invoke('generate-business-plan', {
        body: {
          conversationHistory: messages,
          userId: user.id,
          projectId
        }
      });

      if (error) throw error;

      toast.success('Business plan generated successfully!');
      return data.businessPlan;
    } catch (error) {
      console.error('Error generating business plan:', error);
      toast.error('Failed to generate business plan. Please try again.');
      return null;
    }
  }, [messages, user]);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        type: 'assistant',
        content: "Hi! I'm your AI business plan assistant. I'll help you create a comprehensive business specification by asking you some questions. Let's start with your business idea - what problem are you trying to solve?",
        timestamp: new Date()
      }
    ]);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    generateBusinessPlan,
    clearMessages
  };
};
