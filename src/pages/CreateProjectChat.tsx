
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, FileText, Route, Zap, Settings, History, Send, User, Bot, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useAIChat } from '@/hooks/useAIChat';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import BusinessPlanViewer from '@/components/BusinessPlanViewer';

const CreateProjectChat = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const [showPlanViewer, setShowPlanViewer] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { messages, isTyping, sendMessage, generateBusinessPlan, clearMessages } = useAIChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Create a new project when the chat starts
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

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !currentProject) return;

    await sendMessage(inputValue, currentProject.id);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
        {/* Side Nav */}
        <div className="absolute inset-y-0 left-0 flex flex-col gap-2 sm:gap-3 sm:py-6 sm:px-3 pt-4 pr-2 pb-4 pl-2 items-center bg-bpspecs-off-white fade-in fade-in-delay-1">
          <button 
            onClick={() => navigate('/')}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-bpspecs-teal text-bpspecs-off-white hover:bg-bpspecs-teal/80"
          >
            <Zap className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-bpspecs-teal/20 ring-bpspecs-teal text-bpspecs-teal">
            <FileText className="sm:w-4 sm:h-4 w-[12px] h-[12px]" />
          </button>
          <button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
            <Brain className="sm:w-4 sm:h-4 w-[12px] h-[12px] text-bpspecs-dark-charcoal" />
          </button>
          <button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
            <Settings className="sm:w-4 sm:h-4 w-[12px] h-[12px] text-bpspecs-dark-charcoal" />
          </button>
          <button 
            onClick={handleStartOver}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 mt-auto bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal"
          >
            <History className="sm:w-4 sm:h-4 w-[12px] h-[12px] text-bpspecs-dark-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="sm:pl-20 md:pl-24 lg:pl-28 sm:pr-6 md:pr-10 lg:pr-14 sm:pt-6 md:pt-8 sm:pb-6 pt-4 pr-4 pb-4 pl-14 h-screen flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 fade-in fade-in-delay-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-bpspecs-beige">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">BPSpecs</span>
              <span className="sm:hidden">BP</span>
              <span className="text-bpspecs-teal">Business Plan Generator</span>
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 3 && (
                <Button
                  onClick={handleGenerateBusinessPlan}
                  size="sm"
                  className="bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 text-bpspecs-off-white font-medium"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Plan
                </Button>
              )}
              <h2 className="hidden md:block text-sm font-medium text-bpspecs-taupe">
                AI Assistant
              </h2>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto mb-6 space-y-4 pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-bpspecs-teal flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-bpspecs-off-white" />
                  </div>
                )}
                <div
                  className={`max-w-2xl p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive text-bpspecs-off-white'
                      : 'bg-bpspecs-off-white text-bpspecs-dark-charcoal border border-bpspecs-taupe/20'
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed">{message.content}</p>
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-bpspecs-off-white/70' : 'text-bpspecs-taupe'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-bpspecs-beige flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-bpspecs-dark-charcoal" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-bpspecs-teal flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-bpspecs-off-white" />
                </div>
                <div className="bg-bpspecs-off-white p-4 rounded-2xl border border-bpspecs-taupe/20">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-bpspecs-taupe rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-bpspecs-taupe rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-bpspecs-taupe rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-bpspecs-off-white rounded-2xl border border-bpspecs-taupe/30 p-4">
            <div className="flex items-center gap-3">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your response here..."
                className="flex-1 border-none outline-none placeholder-bpspecs-taupe text-sm sm:text-base bg-transparent text-bpspecs-dark-charcoal resize-none"
                rows={1}
                style={{ minHeight: '24px', maxHeight: '120px' }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-gradient-to-br text-bpspecs-off-white hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 from-bpspecs-teal to-bpspecs-olive border-0 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectChat;
