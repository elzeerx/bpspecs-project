
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Plus, 
  FileText, 
  Calendar, 
  MoreHorizontal,
  Download,
  Share2,
  Copy,
  Trash2,
  Eye
} from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';
import { formatDistanceToNow } from 'date-fns';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterStatus, setFilterStatus] = useState<'all' | 'draft' | 'completed' | 'shared'>('all');
  const { projects, loading, deleteProject, duplicateProject } = useProjects();
  const navigate = useNavigate();

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-bpspecs-taupe/20 rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-bpspecs-taupe/20 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal">My Projects</h1>
            <p className="text-bpspecs-taupe mt-1">Manage and organize your business plans</p>
          </div>
          <Button 
            onClick={() => navigate('/create-project')}
            className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4 items-center flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-bpspecs-taupe" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-bpspecs-taupe/30 focus:border-bpspecs-teal"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-2 border border-bpspecs-taupe/30 rounded-md bg-bpspecs-off-white text-bpspecs-dark-charcoal focus:border-bpspecs-teal outline-none"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="completed">Completed</option>
              <option value="shared">Shared</option>
            </select>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-bpspecs-teal text-bpspecs-off-white' : ''}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-bpspecs-teal text-bpspecs-off-white' : ''}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-bpspecs-taupe/50 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-bpspecs-dark-charcoal mb-2">
              {searchQuery || filterStatus !== 'all' ? 'No projects found' : 'No projects yet'}
            </h3>
            <p className="text-bpspecs-taupe mb-6">
              {searchQuery || filterStatus !== 'all' 
                ? 'Try adjusting your search or filters' 
                : 'Create your first business plan to get started'}
            </p>
            {!searchQuery && filterStatus === 'all' && (
              <Button 
                onClick={() => navigate('/create-project')}
                className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create First Project
              </Button>
            )}
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`bg-bpspecs-off-white border-bpspecs-taupe/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${
                  viewMode === 'list' ? 'flex items-center' : ''
                }`}
              >
                <CardHeader className={viewMode === 'list' ? 'flex-1' : ''}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-bpspecs-dark-charcoal text-lg mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-bpspecs-taupe">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex gap-1 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="h-8 w-8 p-0 hover:bg-bpspecs-beige/50"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => duplicateProject(project.id)}
                        className="h-8 w-8 p-0 hover:bg-bpspecs-beige/50"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                        className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <Badge className={getStatusColor(project.status || 'draft')}>
                      {project.status || 'draft'}
                    </Badge>
                    <div className="flex items-center text-xs text-bpspecs-taupe">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDistanceToNow(new Date(project.updated_at), { addSuffix: true })}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
