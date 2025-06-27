
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Edit, Zap, Clock } from 'lucide-react';
import { ProjectInput } from '@/pages/CreateProject';

interface ReviewStepProps {
  data: ProjectInput;
  errors: Record<string, string>;
  onGenerate: () => void;
  onPrev: () => void;
  onEdit: (step: number) => void;
}

const ReviewStep = ({ data, errors, onGenerate, onPrev, onEdit }: ReviewStepProps) => {
  const getTimelineLabel = (value: string) => {
    switch (value) {
      case 'asap': return 'ASAP (Rush project)';
      case '1-3-months': return '1-3 months';
      case '3-6-months': return '3-6 months';
      case '6-plus-months': return '6+ months';
      default: return value;
    }
  };

  const getBudgetLabel = (value: string) => {
    switch (value) {
      case 'under-10k': return 'Under $10,000';
      case '10k-50k': return '$10,000 - $50,000';
      case '50k-100k': return '$50,000 - $100,000';
      case '100k-plus': return '$100,000+';
      case 'not-sure': return 'Not sure yet';
      default: return value || 'Not specified';
    }
  };

  const getComplexityLabel = (value: string) => {
    switch (value) {
      case 'simple': return 'Simple';
      case 'moderate': return 'Moderate';
      case 'complex': return 'Complex';
      case 'enterprise': return 'Enterprise';
      default: return value;
    }
  };

  return (
    <div className="space-y-6">
      {/* Business Idea */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Business Idea</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(1)}
              className="text-bpspecs-teal hover:text-bpspecs-teal/80"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-bpspecs-dark-charcoal leading-relaxed">
            {data.businessIdea}
          </p>
          <div className="mt-2 text-sm text-bpspecs-taupe">
            {data.businessIdea.length} characters
          </div>
        </CardContent>
      </Card>

      {/* Business Details */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Business Details</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(2)}
              className="text-bpspecs-teal hover:text-bpspecs-teal/80"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium text-bpspecs-taupe mb-1">Project Type</div>
            <Badge variant="secondary">{data.projectType}</Badge>
          </div>
          
          <div>
            <div className="text-sm font-medium text-bpspecs-taupe mb-1">Industry</div>
            <Badge variant="secondary">{data.industry}</Badge>
          </div>

          <div>
            <div className="text-sm font-medium text-bpspecs-taupe mb-2">Target Audience</div>
            <p className="text-bpspecs-dark-charcoal text-sm leading-relaxed">
              {data.targetAudience}
            </p>
          </div>

          {data.keyFeatures.length > 0 && (
            <div>
              <div className="text-sm font-medium text-bpspecs-taupe mb-2">Key Features</div>
              <div className="flex flex-wrap gap-2">
                {data.keyFeatures.map((feature, index) => (
                  <Badge key={index} variant="outline">{feature}</Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Requirements & Goals</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(3)}
              className="text-bpspecs-teal hover:text-bpspecs-teal/80"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-medium text-bpspecs-taupe mb-1">Timeline</div>
              <Badge variant="secondary">{getTimelineLabel(data.timeline)}</Badge>
            </div>
            
            <div>
              <div className="text-sm font-medium text-bpspecs-taupe mb-1">Budget</div>
              <Badge variant="secondary">{getBudgetLabel(data.budget)}</Badge>
            </div>
            
            <div>
              <div className="text-sm font-medium text-bpspecs-taupe mb-1">Complexity</div>
              <Badge variant="secondary">{getComplexityLabel(data.complexity)}</Badge>
            </div>
          </div>

          {data.requirements && (
            <div>
              <div className="text-sm font-medium text-bpspecs-taupe mb-2">Additional Requirements</div>
              <p className="text-bpspecs-dark-charcoal text-sm leading-relaxed">
                {data.requirements}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Separator />

      {/* Generation Info */}
      <Card className="bg-bpspecs-teal/5 border-bpspecs-teal/20">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="w-6 h-6 text-bpspecs-teal" />
            <div>
              <h3 className="font-medium text-bpspecs-dark-charcoal">Ready to Generate</h3>
              <p className="text-sm text-bpspecs-taupe">
                Your comprehensive business plan and technical specifications will be created
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-bpspecs-taupe mb-4">
            <Clock className="w-4 h-4" />
            <span>Estimated generation time: 30-60 seconds</span>
          </div>

          <div className="text-xs text-bpspecs-taupe">
            This will use 1 credit from your account. You'll receive a detailed business plan including technical requirements, implementation roadmap, and market analysis.
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button
          onClick={onPrev}
          variant="outline"
          className="border-bpspecs-taupe/30"
        >
          Previous
        </Button>
        <Button
          onClick={onGenerate}
          className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-white px-8 py-3 text-lg font-semibold"
          size="lg"
        >
          <Zap className="w-5 h-5 mr-2" />
          Generate Business Plan
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
