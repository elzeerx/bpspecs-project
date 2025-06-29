
import { useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import ChatMessage from './ChatMessage';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatMessages = ({ messages, isTyping }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto mb-6 space-y-4 pr-2">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
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
  );
};

export default ChatMessages;
