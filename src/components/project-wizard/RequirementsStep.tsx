
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, DollarSign, Settings } from 'lucide-react';
import { ProjectInput } from '@/pages/CreateProject';

interface RequirementsStepProps {
  data: ProjectInput;
  errors: Record<string, string>;
  updateData: (field: keyof ProjectInput, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const timelines = [
  { value: 'asap', label: 'ASAP (Rush project)', description: 'Need to launch quickly' },
  { value: '1-3-months', label: '1-3 months', description: 'Standard timeline' },
  { value: '3-6-months', label: '3-6 months', description: 'Comprehensive development' },
  { value: '6-plus-months', label: '6+ months', description: 'Complex, enterprise-level' }
];

const budgetRanges = [
  { value: 'under-10k', label: 'Under $10,000', description: 'Bootstrap/MVP budget' },
  { value: '10k-50k', label: '$10,000 - $50,000', description: 'Small to medium project' },
  { value: '50k-100k', label: '$50,000 - $100,000', description: 'Substantial investment' },
  { value: '100k-plus', label: '$100,000+', description: 'Enterprise-level budget' },
  { value: 'not-sure', label: 'Not sure yet', description: 'Need budget guidance' }
];

const complexityLevels = [
  { value: 'simple', label: 'Simple', description: 'Basic functionality, few integrations' },
  { value: 'moderate', label: 'Moderate', description: 'Standard features, some integrations' },
  { value: 'complex', label: 'Complex', description: 'Advanced features, multiple integrations' },
  { value: 'enterprise', label: 'Enterprise', description: 'Large-scale, high-performance system' }
];

const RequirementsStep = ({ data, errors, updateData, onNext, onPrev }: RequirementsStepProps) => {
  return (
    <div className="space-y-6">
      {/* Timeline */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Clock className="w-5 h-5 text-bpspecs-teal" />
            <span>Timeline Expectations *</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={data.timeline} onValueChange={(value) => updateData('timeline', value)}>
            <SelectTrigger className={`${errors.timeline ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}>
              <SelectValue placeholder="Select your preferred timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((timeline) => (
                <SelectItem key={timeline.value} value={timeline.value}>
                  <div className="flex flex-col">
                    <span className="font-medium">{timeline.label}</span>
                    <span className="text-sm text-gray-600">{timeline.description}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p className="text-sm text-red-500 mt-2">{errors.timeline}</p>
          )}
        </CardContent>
      </Card>

      {/* Budget */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <DollarSign className="w-5 h-5 text-bpspecs-teal" />
            <span>Budget Range (Optional)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={data.budget} onValueChange={(value) => updateData('budget', value)}>
            <SelectTrigger className="border-bpspecs-taupe/30">
              <SelectValue placeholder="Select your budget range (helps with recommendations)" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((budget) => (
                <SelectItem key={budget.value} value={budget.value}>
                  <div className="flex flex-col">
                    <span className="font-medium">{budget.label}</span>
                    <span className="text-sm text-gray-600">{budget.description}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-bpspecs-taupe mt-2">
            This helps us provide more accurate recommendations and development approaches
          </p>
        </CardContent>
      </Card>

      {/* Technical Complexity */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Settings className="w-5 h-5 text-bpspecs-teal" />
            <span>Technical Complexity *</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={data.complexity} onValueChange={(value) => updateData('complexity', value)}>
            <SelectTrigger className={`${errors.complexity ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}>
              <SelectValue placeholder="How complex is your project?" />
            </SelectTrigger>
            <SelectContent>
              {complexityLevels.map((complexity) => (
                <SelectItem key={complexity.value} value={complexity.value}>
                  <div className="flex flex-col">
                    <span className="font-medium">{complexity.label}</span>
                    <span className="text-sm text-gray-600">{complexity.description}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.complexity && (
            <p className="text-sm text-red-500 mt-2">{errors.complexity}</p>
          )}
        </CardContent>
      </Card>

      {/* Additional Requirements */}
      <div className="space-y-3">
        <Label htmlFor="requirements" className="text-bpspecs-dark-charcoal font-medium">
          Specific Requirements or Constraints (Optional)
        </Label>
        <Textarea
          id="requirements"
          placeholder="Any specific technologies, compliance requirements, integrations, or constraints we should know about..."
          value={data.requirements}
          onChange={(e) => updateData('requirements', e.target.value)}
          className="min-h-[80px] border-bpspecs-taupe/30"
        />
        <p className="text-sm text-bpspecs-taupe">
          Include any technical preferences, compliance needs, or specific constraints
        </p>
      </div>

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
          onClick={onNext}
          className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-white px-8"
        >
          Review & Generate
        </Button>
      </div>
    </div>
  );
};

export default RequirementsStep;
