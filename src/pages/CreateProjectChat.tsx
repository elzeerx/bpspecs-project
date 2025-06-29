
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useAIChat } from '@/hooks/useAIChat';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import BusinessPlanViewer from '@/components/BusinessPlanViewer';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatMessages from '@/components/chat/ChatMessages';
import ChatInput from '@/components/chat/ChatInput';
import ChatSidebar from '@/components/chat/ChatSidebar';

const CreateProjectChat = () => {
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const [showPlanViewer, setShowPlanViewer] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { messages, isTyping, sendMessage, generateBusinessPlan, clearMessages } = useAIChat();

  useEffect(() => {
    const createProject = async () => {
      if (!user || currentProject) return;

      try {
        const { data, error } = await supabase
          .from('projects')
          .insert({
            user_id: user.id,
            title: 'New Business Plan',
            description: 'AI-generated business plan in progress',
            original_prompt: 'AI chat conversation',
            project_type: 'ai_chat',
            status: 'draft'
          })
          .select()
          .single();

        if (error) throw error;
        setCurrentProject(data);
      } catch (error) {
        console.error('Error creating project:', error);
        toast.error('Failed to create project');
      }
    };

    createProject();
  }, [user, currentProject]);

  const handleSendMessage = async (content: string) => {
    if (!currentProject) return;
    await sendMessage(content, currentProject.id);
  };

  const handleGenerateBusinessPlan = async () => {
    if (!currentProject) return;

    const plan = await generateBusinessPlan(currentProject.id);
    if (plan) {
      setGeneratedPlan(plan);
      setShowPlanViewer(true);
    }
  };

  const handleStartOver = () => {
    clearMessages();
    setCurrentProject(null);
    setGeneratedPlan(null);
    setShowPlanViewer(false);
    toast.info('Starting a new conversation...');
  };

  if (showPlanViewer && generatedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <Button
              onClick={() => setShowPlanViewer(false)}
              variant="outline"
              className="border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
            >
              ← Back to Chat
            </Button>
            <Button
              onClick={() => navigate('/')}
              className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white"
            >
              Save & Go to Dashboard
            </Button>
          </div>
          <BusinessPlanViewer 
            businessPlan={generatedPlan} 
            projectTitle={currentProject?.title}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4 bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 pt-2 pr-2 pb-2 pl-2">
      <div className="relative w-full max-w-6xl backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-bpspecs-dark-charcoal/95 fade-in">
        <ChatSidebar onStartOver={handleStartOver} />

        <div className="sm:pl-20 md:pl-24 lg:pl-28 sm:pr-6 md:pr-10 lg:pr-14 sm:pt-6 md:pt-8 sm:pb-6 pt-4 pr-4 pb-4 pl-14 h-screen flex flex-col">
          <ChatHeader 
            messagesLength={messages.length}
            onGenerateBusinessPlan={handleGenerateBusinessPlan}
          />
          
          <ChatMessages 
            messages={messages}
            isTyping={isTyping}
          />
          
          <ChatInput 
            onSendMessage={handleSendMessage}
            isDisabled={isTyping}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProjectChat;
