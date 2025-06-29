import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, FileText, Route, Zap, Settings, History, Crown, Target, Users, Lightbulb, Sparkles, ShieldCheck, Command, Send, MoreHorizontal, Plus, Calendar, TrendingUp, Eye } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
const Dashboard = () => {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const {
    recentProjects,
    stats,
    loading
  } = useProjects();
  const handleGenerateClick = () => {
    navigate('/create-project');
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'shared':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return <div className="min-h-screen flex items-stretch justify-center p-2 sm:p-4 bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
      {/* Main Card - Now responsive and stretches */}
      <div className="w-full backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-bpspecs-dark-charcoal/95 fade-in">
        {/* Side Nav */}
        <div className="absolute inset-y-0 left-0 flex flex-col gap-2 sm:gap-3 py-4 sm:py-6 px-2 sm:px-3 items-center bg-bpspecs-off-white fade-in fade-in-delay-1">
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-bpspecs-teal text-bpspecs-off-white hover:bg-bpspecs-teal/80">
            <Zap className="w-4 h-4" />
          </button>
          <Link to="/projects" className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
            <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-bpspecs-dark-charcoal" />
          </Link>
          <button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-bpspecs-dark-charcoal" />
          </button>
          <Link to="/settings" className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-bpspecs-dark-charcoal" />
          </Link>
          <button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 mt-auto bg-bpspecs-beige ring-bpspecs-taupe hover:bg-bpspecs-taupe/20 hover:ring-bpspecs-teal">
            <History className="w-3 h-3 sm:w-4 sm:h-4 text-bpspecs-dark-charcoal" />
          </button>
        </div>

        {/* Content - Now fully responsive */}
        <div className="pl-14 sm:pl-20 md:pl-24 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-10 space-y-6 sm:space-y-8 lg:space-y-10">
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
            <Button onClick={() => navigate('/create-project')} className="flex gap-1 sm:text-sm sm:py-2 sm:px-4 transition-all duration-200 hover:scale-105 text-xs font-medium rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 text-bpspecs-off-white border-0">
              <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Upgrade</span>
              <span className="sm:hidden">Pro</span>
            </Button>
          </div>

          {/* Quick Stats - Enhanced responsive grid */}
          {!loading && <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-5 fade-in fade-in-delay-2">
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-dark-charcoal">{stats.totalProjects}</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">Total Projects</div>
              </div>
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-teal">{stats.completedProjects}</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">Completed</div>
              </div>
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-olive">{stats.recentProjects}</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">This Week</div>
              </div>
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-taupe">3</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">Credits Left</div>
              </div>
              {/* Additional stats for larger screens */}
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1 hidden xl:block">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-teal">85%</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">Success Rate</div>
              </div>
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1 hidden xl:block">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-olive">12m</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">Avg Time</div>
              </div>
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1 hidden 2xl:block">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-taupe">47</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">Templates</div>
              </div>
              <div className="bg-bpspecs-off-white rounded-xl p-3 sm:p-4 border border-bpspecs-taupe/30 col-span-1 hidden 2xl:block">
                <div className="text-lg sm:text-2xl font-bold text-bpspecs-teal">98%</div>
                <div className="text-xs sm:text-sm text-bpspecs-taupe">Uptime</div>
              </div>
            </div>}

          {/* Title - Responsive typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight tracking-tight font-bold text-bpspecs-off-white fade-in fade-in-delay-3">
            Transform Your Business Ideas Into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive">
              Professional Specifications
            </span>{' '}
            in Minutes
          </h1>

          {/* Recent Projects - Enhanced responsive grid */}
          {!loading && recentProjects.length > 0 && <div className="fade-in fade-in-delay-3">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-bpspecs-off-white">Recent Projects</h2>
                <Link to="/projects" className="text-sm text-bpspecs-teal hover:text-bpspecs-teal/80 flex items-center gap-1">
                  View All <MoreHorizontal className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
                {recentProjects.slice(0, 5).map(project => <Card key={project.id} className="bg-bpspecs-off-white border-bpspecs-taupe/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-bpspecs-dark-charcoal text-base mb-1">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-bpspecs-taupe text-sm">
                            {project.description?.slice(0, 80)}...
                          </CardDescription>
                        </div>
                        <Badge className={`${getStatusColor(project.status || 'draft')} text-xs`}>
                          {project.status || 'draft'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-bpspecs-taupe">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDistanceToNow(new Date(project.updated_at), {
                      addSuffix: true
                    })}
                        </div>
                        <Button size="sm" variant="ghost" onClick={() => navigate(`/projects/${project.id}`)} className="h-7 px-2 text-bpspecs-teal hover:bg-bpspecs-teal/10">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>}

          {/* Feature Cards - Enhanced responsive layout */}
          <div className="fade-in fade-in-delay-3">
            {/* Floating Element - Repositioned for larger screens */}
            <div className="hidden 2xl:block absolute -right-8 -top-16">
              
            </div>

            {/* Feature Cards Grid - More responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              <div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-bpspecs-off-white border-bpspecs-taupe/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-bpspecs-teal to-bpspecs-olive text-bpspecs-off-white">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-base sm:text-lg leading-snug font-normal text-bpspecs-dark-charcoal">
                  AI-powered business analysis that detects your business model, target market, and key requirements automatically.
                </p>
                <span className="text-xs sm:text-sm font-medium text-bpspecs-taupe">Business Analysis</span>
              </div>

              <div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-bpspecs-dark-charcoal border-bpspecs-taupe/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br to-bpspecs-olive flex items-center justify-center from-bpspecs-teal text-bpspecs-off-white">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-base sm:text-lg leading-snug font-normal text-bpspecs-off-white">
                  Professional documentation that follows industry standards and impresses investors and stakeholders.
                </p>
                <span className="text-xs sm:text-sm text-bpspecs-beige font-medium">Investor-Ready Output</span>
              </div>

              <div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-bpspecs-dark-charcoal border-bpspecs-taupe/20 sm:col-span-2 lg:col-span-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gradient-to-bl to-bpspecs-olive text-bpspecs-off-white from-bpspecs-teal">
                  <Route className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-base sm:text-lg leading-snug font-normal text-bpspecs-off-white">
                  Prioritized phases with realistic timelines, milestones, and resource requirements for execution.
                </p>
                <span className="text-xs sm:text-sm text-bpspecs-beige font-medium">Implementation Roadmap</span>
              </div>

              {/* Additional feature card for larger screens */}
              <div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-bpspecs-off-white border-bpspecs-taupe/30 hidden 2xl:block">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-bpspecs-olive to-bpspecs-teal text-bpspecs-off-white">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-base sm:text-lg leading-snug font-normal text-bpspecs-dark-charcoal">
                  Market analysis and competitive positioning to help you understand your business landscape.
                </p>
                <span className="text-xs sm:text-sm font-medium text-bpspecs-taupe">Market Insights</span>
              </div>
            </div>
          </div>

          {/* Input Box - Responsive width */}
          <div className="fade-in fade-in-delay-3">
            <div className="rounded-xl sm:rounded-2xl flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 border shadow-lg bg-bpspecs-off-white border-bpspecs-taupe/30">
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
                <input type="text" placeholder='Describe your business idea... "I want to build a food delivery app for local restaurants"' className="flex-1 border-none outline-none placeholder-bpspecs-taupe text-sm sm:text-base bg-transparent text-bpspecs-dark-charcoal" />
                <Button onClick={handleGenerateClick} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-gradient-to-br text-bpspecs-off-white hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 from-bpspecs-teal to-bpspecs-olive border-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Actions - Enhanced responsive layout */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button onClick={handleGenerateClick} className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 hover:scale-105 bg-gradient-to-br text-bpspecs-off-white hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 from-bpspecs-teal to-bpspecs-olive border-0">
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
                  <MoreHorizontal className="w-3 h-3 text-bpspecs-dark-charcoal" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;