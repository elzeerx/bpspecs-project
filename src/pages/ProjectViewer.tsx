
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Edit, 
  Copy, 
  FileText, 
  Calendar,
  User,
  Target,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import type { Tables } from '@/integrations/supabase/types';
import { formatDistanceToNow } from 'date-fns';
import BusinessPlanViewer from '@/components/BusinessPlanViewer';

type Project = Tables<'projects'>;

const ProjectViewer = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchProject = async () => {
      if (!id || !user) return;

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
        toast.error('Failed to load project');
        navigate('/projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, user, navigate]);

  const handleShare = async () => {
    if (!project) return;

    try {
      const shareToken = crypto.randomUUID();
      const { error } = await supabase
        .from('projects')
        .update({ 
          is_shared: true, 
          share_token: shareToken,
          status: 'shared'
        })
        .eq('id', project.id);

      if (error) throw error;

      const shareUrl = `${window.location.origin}/shared/${shareToken}`;
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard');
      
      setProject({ ...project, is_shared: true, share_token: shareToken, status: 'shared' });
    } catch (error) {
      toast.error('Failed to create share link');
    }
  };

  const exportAsMarkdown = () => {
    if (!project) return;
    
    const content = JSON.stringify(project.generated_specification, null, 2);
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.title}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Project exported as Markdown');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'shared': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-bpspecs-taupe/20 rounded w-1/3"></div>
            <div className="h-96 bg-bpspecs-taupe/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 p-6">
        <div className="max-w-6xl mx-auto text-center py-12">
          <h1 className="text-2xl font-bold text-bpspecs-dark-charcoal mb-4">Project not found</h1>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const businessPlanContent = typeof project.generated_specification === 'string' 
    ? project.generated_specification 
    : JSON.stringify(project.generated_specification, null, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/projects')}
              className="border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal">{project.title}</h1>
              <p className="text-bpspecs-taupe mt-1">{project.description}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => navigate(`/projects/${project.id}/edit`)}
              className="border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button
              variant="outline"
              onClick={handleShare}
              className="border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              onClick={exportAsMarkdown}
              className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Project Info */}
        <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge className={getStatusColor(project.status || 'draft')}>
                  {project.status || 'draft'}
                </Badge>
                <div className="flex items-center text-sm text-bpspecs-taupe">
                  <Calendar className="w-4 h-4 mr-1" />
                  Updated {formatDistanceToNow(new Date(project.updated_at), { addSuffix: true })}
                </div>
              </div>
              <div className="text-sm text-bpspecs-taupe">
                Version {project.version}
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specification">Business Plan</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-bpspecs-taupe flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Business Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-bpspecs-dark-charcoal font-medium">
                    {project.business_model || 'Not specified'}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-bpspecs-taupe flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Target Market
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-bpspecs-dark-charcoal font-medium">
                    {project.target_market || 'Not specified'}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-bpspecs-taupe flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Project Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-bpspecs-dark-charcoal font-medium capitalize">
                    {project.project_type.replace('_', ' ')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
              <CardHeader>
                <CardTitle className="text-bpspecs-dark-charcoal">Original Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bpspecs-taupe leading-relaxed">
                  {project.original_prompt}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specification">
            <BusinessPlanViewer 
              businessPlan={businessPlanContent}
              projectTitle={project.title}
            />
          </TabsContent>

          <TabsContent value="analysis">
            <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
              <CardHeader>
                <CardTitle className="text-bpspecs-dark-charcoal">AI Analysis</CardTitle>
                <CardDescription>
                  Insights and recommendations generated by our AI system
                </CardDescription>
              </CardHeader>
              <CardContent>
                {project.ai_analysis && Object.keys(project.ai_analysis).length > 0 ? (
                  <pre className="whitespace-pre-wrap text-sm text-bpspecs-dark-charcoal bg-bpspecs-beige/30 p-4 rounded-lg">
                    {JSON.stringify(project.ai_analysis, null, 2)}
                  </pre>
                ) : (
                  <p className="text-bpspecs-taupe">No AI analysis available for this project.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
                <CardHeader>
                  <CardTitle className="text-bpspecs-dark-charcoal">Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-bpspecs-taupe">Created</label>
                    <p className="text-bpspecs-dark-charcoal">
                      {new Date(project.created_at).toLocaleDateString()} at {new Date(project.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-bpspecs-taupe">Last Updated</label>
                    <p className="text-bpspecs-dark-charcoal">
                      {new Date(project.updated_at).toLocaleDateString()} at {new Date(project.updated_at).toLocaleTimeString()}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-bpspecs-taupe">Project ID</label>
                    <p className="text-bpspecs-dark-charcoal font-mono text-xs">{project.id}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-bpspecs-off-white border-bpspecs-taupe/30">
                <CardHeader>
                  <CardTitle className="text-bpspecs-dark-charcoal">Sharing & Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-bpspecs-taupe">Sharing Status</label>
                    <p className="text-bpspecs-dark-charcoal">
                      {project.is_shared ? 'Public (Shared)' : 'Private'}
                    </p>
                  </div>
                  {project.share_token && (
                    <div>
                      <label className="text-sm font-medium text-bpspecs-taupe">Share Token</label>
                      <p className="text-bpspecs-dark-charcoal font-mono text-xs">{project.share_token}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectViewer;
