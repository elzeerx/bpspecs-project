
import { Button } from '@/components/ui/button';
import { Sparkles, Zap } from 'lucide-react';

interface ChatHeaderProps {
  messagesLength: number;
  onGenerateBusinessPlan: () => void;
}

const ChatHeader = ({ messagesLength, onGenerateBusinessPlan }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6 fade-in fade-in-delay-2">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-bpspecs-beige">
        <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">BPSpecs</span>
        <span className="sm:hidden">BP</span>
        <span className="text-bpspecs-teal">Business Plan Generator</span>
      </div>
      <div className="flex items-center gap-2">
        {messagesLength > 3 && (
          <Button
            onClick={onGenerateBusinessPlan}
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
  );
};

export default ChatHeader;
