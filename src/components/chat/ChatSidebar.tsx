
import { useNavigate } from 'react-router-dom';
import { Brain, FileText, Route, Zap, Settings, History } from 'lucide-react';

interface ChatSidebarProps {
  onStartOver: () => void;
}

const ChatSidebar = ({ onStartOver }: ChatSidebarProps) => {
  const navigate = useNavigate();

  return (
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
        onClick={onStartOver}
        className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 mt-auto bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal"
      >
        <History className="sm:w-4 sm:h-4 w-[12px] h-[12px] text-bpspecs-dark-charcoal" />
      </button>
    </div>
  );
};

export default ChatSidebar;
