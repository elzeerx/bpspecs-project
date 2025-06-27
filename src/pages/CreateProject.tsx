
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import BusinessIdeaStep from '@/components/project-wizard/BusinessIdeaStep';
import BusinessDetailsStep from '@/components/project-wizard/BusinessDetailsStep';
import RequirementsStep from '@/components/project-wizard/RequirementsStep';
import ReviewStep from '@/components/project-wizard/ReviewStep';
import GenerationProgress from '@/components/project-wizard/GenerationProgress';

export interface ProjectInput {
  businessIdea: string;
  projectType: string;
  targetAudience: string;
  industry: string;
  keyFeatures: string[];
  timeline: string;
  budget: string;
  complexity: string;
  requirements: string;
}

const initialProjectData: ProjectInput = {
  businessIdea: '',
  projectType: '',
  targetAudience: '',
  industry: '',
  keyFeatures: [],
  timeline: '',
  budget: '',
  complexity: '',
  requirements: ''
};

const CreateProject = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState<ProjectInput>(initialProjectData);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { user } = useAuth();
  const navigate = useNavigate();

  // Auto-save functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (projectData.businessIdea || projectData.projectType) {
        localStorage.setItem('project-draft', JSON.stringify(projectData));
      }
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(interval);
  }, [projectData]);

  // Load draft on mount
  useEffect(() => {
    const draft = localStorage.getItem('project-draft');
    if (draft) {
      try {
        setProjectData(JSON.parse(draft));
      } catch (error) {
        console.log('Could not load draft');
      }
    }
  }, []);

  const updateProjectData = (field: keyof ProjectInput, value: any) => {
    setProjectData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!projectData.businessIdea.trim()) {
          newErrors.businessIdea = 'Business idea description is required';
        } else if (projectData.businessIdea.length < 50) {
          newErrors.businessIdea = 'Please provide more detail (at least 50 characters)';
        }
        break;
      case 2:
        if (!projectData.projectType) {
          newErrors.projectType = 'Please select a project type';
        }
        if (!projectData.targetAudience.trim()) {
          newErrors.targetAudience = 'Target audience description is required';
        }
        if (!projectData.industry) {
          newErrors.industry = 'Please select an industry';
        }
        break;
      case 3:
        if (!projectData.timeline) {
          newErrors.timeline = 'Please select a timeline';
        }
        if (!projectData.complexity) {
          newErrors.complexity = 'Please select technical complexity';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleGenerate = async () => {
    if (!validateStep(4)) return;
    
    setIsGenerating(true);
    
    // Mock AI generation process
    setTimeout(() => {
      localStorage.removeItem('project-draft');
      navigate('/dashboard', { 
        state: { 
          newProject: {
            ...projectData,
            id: Date.now().toString(),
            createdAt: new Date(),
            status: 'completed'
          }
        }
      });
    }, 8000); // 8 second mock generation
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'Describe Your Business Idea';
      case 2: return 'Business Details';
      case 3: return 'Requirements & Goals';
      case 4: return 'Review & Generate';
      default: return 'Project Creation';
    }
  };

  if (isGenerating) {
    return <GenerationProgress projectData={projectData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white to-bpspecs-beige/30 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-2">
            Create Your Business Plan
          </h1>
          <p className="text-bpspecs-taupe">
            Follow our guided process to generate a comprehensive business specification
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-bpspecs-taupe">Step {currentStep} of 4</span>
            <span className="text-sm text-bpspecs-taupe">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <Progress value={(currentStep / 4) * 100} className="h-2" />
        </div>

        {/* Main Content */}
        <Card className="border-bpspecs-taupe/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-bpspecs-dark-charcoal">
              {getStepTitle(currentStep)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <BusinessIdeaStep
                data={projectData}
                errors={errors}
                updateData={updateProjectData}
                onNext={nextStep}
              />
            )}
            {currentStep === 2 && (
              <BusinessDetailsStep
                data={projectData}
                errors={errors}
                updateData={updateProjectData}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}
            {currentStep === 3 && (
              <RequirementsStep
                data={projectData}
                errors={errors}
                updateData={updateProjectData}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}
            {currentStep === 4 && (
              <ReviewStep
                data={projectData}
                errors={errors}
                onGenerate={handleGenerate}
                onPrev={prevStep}
                onEdit={(step) => setCurrentStep(step)}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateProject;
