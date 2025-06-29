
import { Button } from '@/components/ui/button';
import { Brain, FileText, Route, Zap, Settings, History, Crown, Target, Users, Lightbulb, Sparkles, ShieldCheck, Command, Send, Search, Image, Code, MoreHorizontal } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    if (user) {
      navigate('/create-project');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4 bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 pt-2 pr-2 pb-2 pl-2">
      {/* Main Card */}
      <div className="relative w-full max-w-6xl backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-bpspecs-dark-charcoal/95 fade-in">
        {/* Side Nav */}
        <div className="absolute inset-y-0 left-0 flex flex-col gap-2 sm:gap-3 sm:py-6 sm:px-3 pt-4 pr-2 pb-4 pl-2 items-center bg-bpspecs-off-white fade-in fade-in-delay-1">
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-bpspecs-teal text-bpspecs-off-white hover:bg-bpspecs-teal/80">
            <Zap className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
            <FileText className="sm:w-4 sm:h-4 w-[12px] h-[12px] text-bpspecs-dark-charcoal" />
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
        <div className="sm:pl-20 md:pl-24 lg:pl-28 sm:pr-6 md:pr-10 lg:pr-14 sm:pt-6 md:pt-8 sm:pb-10 sm:space-y-8 lg:space-y-10 pt-4 pr-4 pb-6 pl-14 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between fade-in fade-in-delay-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-bpspecs-beige">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">BPSpecs</span>
              <span className="sm:hidden">BP</span>
              <span className="text-bpspecs-teal">Pro</span>
              <div className="w-3 h-3 sm:w-4 sm:h-4 text-bpspecs-taupe/60">▼</div>
            </div>
            <h2 className="hidden md:block text-sm font-medium text-bpspecs-taupe">
              {user ? `Welcome Back, ${user.user_metadata?.full_name?.split(' ')[0] || 'User'}` : 'Welcome'}
            </h2>
            <Button 
              onClick={() => user ? navigate('/create-project') : navigate('/signup')}
              className="flex gap-1 sm:text-sm sm:py-2 sm:px-4 transition-all duration-200 hover:scale-105 text-xs font-medium rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 text-bpspecs-off-white border-0"
            >
              <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Upgrade</span>
              <span className="sm:hidden">Pro</span>
            </Button>
          </div>

          {/* Title */}
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight max-w-lg text-2xl tracking-tight font-bold text-bpspecs-off-white fade-in fade-in-delay-3">
            Transform Your Business Ideas Into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive">
              Professional Specifications
            </span>{' '}
            in Minutes
          </h1>

          {/* Cards + Illustration */}
          <div className="relative fade-in fade-in-delay-3">
            {/* Floating Element */}
            <div className="hidden xl:block absolute -right-20 -top-16">
              <div className="relative">
                <div className="w-32 h-32 opacity-20 animate-pulse bg-gradient-to-r rounded-full from-bpspecs-teal to-bpspecs-olive"></div>
                <div className="absolute top-6 right-6 text-sm font-medium rounded-xl pt-2 pr-4 pb-2 pl-4 shadow-lg text-bpspecs-off-white bg-bpspecs-dark-charcoal border border-bpspecs-taupe/20">
                  Ready to create? ✨
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              <div className="sm:rounded-2xl sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-md bg-bpspecs-off-white border-bpspecs-taupe/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-bpspecs-teal to-bpspecs-olive text-bpspecs-off-white">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="sm:text-lg leading-snug text-base font-normal text-bpspecs-dark-charcoal">
                  AI-powered business analysis that detects your business model, target market, and key requirements automatically.
                </p>
                <span className="text-xs sm:text-sm font-medium text-bpspecs-taupe">Business Analysis</span>
              </div>

              <div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-bpspecs-dark-charcoal border-bpspecs-taupe/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br to-bpspecs-olive flex items-center justify-center from-bpspecs-teal text-bpspecs-off-white">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="sm:text-lg leading-snug text-base font-normal text-bpspecs-off-white">
                  Professional documentation that follows industry standards and impresses investors and stakeholders.
                </p>
                <span className="text-xs sm:text-sm text-bpspecs-beige font-medium">Investor-Ready Output</span>
              </div>

              <div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 bg-bpspecs-dark-charcoal border-bpspecs-taupe/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gradient-to-bl to-bpspecs-olive text-bpspecs-off-white from-bpspecs-teal">
                  <Route className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="sm:text-lg leading-snug text-base font-normal text-bpspecs-off-white">
                  Prioritized phases with realistic timelines, milestones, and resource requirements for execution.
                </p>
                <span className="text-xs sm:text-sm text-bpspecs-beige font-medium">Implementation Roadmap</span>
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="max-w-4xl mx-auto fade-in fade-in-delay-3">
            <div className="sm:rounded-2xl flex flex-col gap-3 sm:gap-4 sm:p-4 md:p-6 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-lg bg-bpspecs-off-white border-bpspecs-taupe/30">
              <div className="flex items-center justify-between text-xs font-medium text-bpspecs-taupe">
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span className="hidden sm:inline">Enhanced capabilities with Pro</span>
                  <span className="sm:hidden">Pro features</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span className="hidden sm:inline">Secured by Recipe Group</span>
                  <span className="sm:hidden">Secure</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <Command className="w-4 h-4 sm:w-5 sm:h-5 text-bpspecs-taupe shrink-0" />
                <input 
                  type="text" 
                  placeholder='Describe your business idea... "I want to build a food delivery app for local restaurants"'
                  className="flex-1 border-none outline-none placeholder-bpspecs-taupe text-sm sm:text-base bg-transparent text-bpspecs-dark-charcoal"
                />
                <Button 
                  onClick={handleGenerateClick}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-gradient-to-br text-bpspecs-off-white hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 from-bpspecs-teal to-bpspecs-olive border-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={handleGenerateClick}
                  className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 hover:scale-105 bg-gradient-to-br text-bpspecs-off-white hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 from-bpspecs-teal to-bpspecs-olive border-0"
                >
                  <Brain className="w-3 h-3" />
                  <span className="hidden sm:inline">Analyze Business</span>
                  <span className="sm:hidden">Analyze</span>
                </Button>
                <button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
                  <FileText className="w-3 h-3 text-bpspecs-dark-charcoal" />
                  <span className="hidden sm:inline text-bpspecs-dark-charcoal">Generate Plan</span>
                  <span className="sm:hidden text-bpspecs-dark-charcoal">Plan</span>
                </button>
                <button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
                  <Route className="w-3 h-3 text-bpspecs-dark-charcoal" />
                  <span className="hidden sm:inline text-bpspecs-dark-charcoal">Create Roadmap</span>
                  <span className="sm:hidden text-bpspecs-dark-charcoal">Roadmap</span>
                </button>
                <button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
                  <Code className="w-3 h-3 text-bpspecs-dark-charcoal" />
                  <span className="hidden sm:inline text-bpspecs-dark-charcoal">Export PDF</span>
                  <span className="sm:hidden text-bpspecs-dark-charcoal">Export</span>
                </button>
                <button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
                  <MoreHorizontal className="w-3 h-3 text-bpspecs-dark-charcoal" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
