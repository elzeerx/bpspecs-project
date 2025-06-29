
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
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
        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
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
  );
};

export default ChatMessage;
