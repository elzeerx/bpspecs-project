
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, FileText, Route, Zap, Settings, History, Send, User, Bot } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const CreateProjectChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your AI business plan assistant. I'll help you create a comprehensive business specification by asking you some questions. Let's start with your business idea - what problem are you trying to solve?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responses = [
        "Great! Can you tell me more about your target audience? Who specifically would use your solution?",
        "That sounds interesting! What type of platform are you envisioning - web app, mobile app, or both?",
        "Excellent! What's your expected timeline for launching this business?",
        "Perfect! What's your estimated budget range for development and initial operations?",
        "Thank you for all that information! I'm now generating your comprehensive business plan specification. This will include market analysis, technical requirements, implementation roadmap, and financial projections."
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);

      // If it's the final response, redirect after some time
      if (randomResponse.includes("generating your comprehensive")) {
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4 bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 pt-2 pr-2 pb-2 pl-2">
      {/* Main Card */}
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
          <button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 mt-auto bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
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
            <h2 className="hidden md:block text-sm font-medium text-bpspecs-taupe">
              AI Assistant
            </h2>
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
