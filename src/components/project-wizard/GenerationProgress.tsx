
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap, Brain, FileText, Rocket, CheckCircle } from 'lucide-react';
import { ProjectInput } from '@/pages/CreateProject';

interface GenerationProgressProps {
  projectData: ProjectInput;
}

const GenerationProgress = ({ projectData }: GenerationProgressProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      icon: Brain,
      title: 'Analyzing Business Model',
      description: 'Understanding your market and value proposition',
      duration: 2000
    },
    {
      icon: FileText,
      title: 'Generating Technical Requirements',
      description: 'Creating detailed specifications and architecture',
      duration: 2500
    },
    {
      icon: Rocket,
      title: 'Creating Implementation Roadmap',
      description: 'Building your development timeline and milestones',
      duration: 2000
    },
    {
      icon: CheckCircle,
      title: 'Finalizing Business Plan',
      description: 'Compiling your comprehensive business specification',
      duration: 1500
    }
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let stepInterval: NodeJS.Timeout;

    const startProgress = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      }, 80);

      // Step progression
      steps.forEach((step, index) => {
        setTimeout(() => {
          setCurrentStep(index);
        }, steps.slice(0, index).reduce((acc, s) => acc + s.duration, 0));
      });
    };

    startProgress();

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white to-bpspecs-beige/30 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-bpspecs-taupe/20 shadow-xl">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-bpspecs-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-bpspecs-teal animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-bpspecs-dark-charcoal mb-2">
              Generating Your Business Plan
            </h1>
            <p className="text-bpspecs-taupe">
              Our AI is analyzing your input and creating a comprehensive specification
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-bpspecs-dark-charcoal">
                {steps[currentStep]?.title || 'Processing...'}
              </span>
              <span className="text-sm text-bpspecs-taupe">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-3 mb-2" />
            <p className="text-sm text-bpspecs-taupe">
              {steps[currentStep]?.description || 'Please wait while we process your information...'}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-bpspecs-teal/10 border border-bpspecs-teal/30' 
                      : isCompleted 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive 
                      ? 'bg-bpspecs-teal text-white' 
                      : isCompleted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    <StepIcon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium ${
                      isActive ? 'text-bpspecs-teal' : isCompleted ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {isCompleted && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Project Summary */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h4 className="font-medium text-blue-900 mb-2">Processing Project:</h4>
              <p className="text-sm text-blue-800 line-clamp-2">
                {projectData.businessIdea}
              </p>
              <div className="flex items-center space-x-4 mt-3 text-xs text-blue-700">
                <span>Type: {projectData.projectType}</span>
                <span>•</span>
                <span>Industry: {projectData.industry}</span>
                <span>•</span>
                <span>Complexity: {projectData.complexity}</span>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerationProgress;
