
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isDisabled: boolean;
}

const ChatInput = ({ onSendMessage, isDisabled }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const minHeight = 40;
      const maxHeight = 120;
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
      textarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-bpspecs-off-white rounded-2xl border border-bpspecs-taupe/30 p-4">
      <div className="flex items-end gap-3">
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your response here..."
          className="flex-1 border-none outline-none placeholder-bpspecs-taupe text-sm sm:text-base bg-transparent text-bpspecs-dark-charcoal resize-none overflow-y-auto transition-all duration-200"
          style={{ minHeight: '40px', maxHeight: '120px' }}
        />
        <Button
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isDisabled}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-gradient-to-br text-bpspecs-off-white hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 from-bpspecs-teal to-bpspecs-olive border-0 disabled:opacity-50 flex-shrink-0"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
