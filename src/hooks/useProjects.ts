
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { toast } from 'sonner';

type Project = Tables<'projects'>;

interface ProjectStats {
  totalProjects: number;
  recentProjects: number;
  creditsUsed: number;
  completedProjects: number;
}

export const useProjects = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<ProjectStats>({
    totalProjects: 0,
    recentProjects: 0,
    creditsUsed: 0,
    completedProjects: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    if (!user) {
      setProjects([]);
      setRecentProjects([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;

      setProjects(data || []);
      setRecentProjects((data || []).slice(0, 6));
      
      // Calculate stats
      const totalProjects = data?.length || 0;
      const recentCount = data?.filter(p => {
        const created = new Date(p.created_at);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return created > weekAgo;
      }).length || 0;
      const completedCount = data?.filter(p => p.status === 'completed').length || 0;

      setStats({
        totalProjects,
        recentProjects: recentCount,
        creditsUsed: 0, // Will be updated from usage_logs
        completedProjects: completedCount
      });

    } catch (err: any) {
      setError(err.message);
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (projectId: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;

      await fetchProjects();
      toast.success('Project deleted successfully');
    } catch (err: any) {
      toast.error('Failed to delete project');
    }
  };

  const duplicateProject = async (projectId: string) => {
    try {
      const project = projects.find(p => p.id === projectId);
      if (!project) return;

      const { error } = await supabase
        .from('projects')
        .insert({
          user_id: user?.id,
          title: `${project.title} (Copy)`,
          description: project.description,
          original_prompt: project.original_prompt,
          project_type: project.project_type,
          business_model: project.business_model,
          target_market: project.target_market,
          generated_specification: project.generated_specification,
          ai_analysis: project.ai_analysis,
          status: 'draft'
        });

      if (error) throw error;

      await fetchProjects();
      toast.success('Project duplicated successfully');
    } catch (err: any) {
      toast.error('Failed to duplicate project');
    }
  };

  const updateProjectStatus = async (projectId: string, status: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ status })
        .eq('id', projectId);

      if (error) throw error;

      await fetchProjects();
      toast.success('Project status updated');
    } catch (err: any) {
      toast.error('Failed to update project status');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [user]);

  return {
    projects,
    recentProjects,
    stats,
    loading,
    error,
    fetchProjects,
    deleteProject,
    duplicateProject,
    updateProjectStatus
  };
};
