
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { X, Plus } from 'lucide-react';
import { useState } from 'react';
import { ProjectInput } from '@/pages/CreateProject';

interface BusinessDetailsStepProps {
  data: ProjectInput;
  errors: Record<string, string>;
  updateData: (field: keyof ProjectInput, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const projectTypes = [
  'E-commerce Platform',
  'SaaS Application',
  'Mobile App',
  'Web Application',
  'API/Backend Service',
  'Marketplace',
  'Content Management System',
  'Social Platform',
  'Educational Platform',
  'Healthcare Solution',
  'Financial Technology',
  'Other'
];

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'E-commerce',
  'Education',
  'Real Estate',
  'Food & Beverage',
  'Travel & Tourism',
  'Entertainment',
  'Automotive',
  'Fashion',
  'Sports & Fitness',
  'Professional Services',
  'Manufacturing',
  'Other'
];

const BusinessDetailsStep = ({ data, errors, updateData, onNext, onPrev }: BusinessDetailsStepProps) => {
  const [newFeature, setNewFeature] = useState('');

  const addFeature = () => {
    if (newFeature.trim() && !data.keyFeatures.includes(newFeature.trim())) {
      updateData('keyFeatures', [...data.keyFeatures, newFeature.trim()]);
      setNewFeature('');
    }
  };

  const removeFeature = (feature: string) => {
    updateData('keyFeatures', data.keyFeatures.filter(f => f !== feature));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addFeature();
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Type */}
      <div className="space-y-3">
        <Label className="text-bpspecs-dark-charcoal font-medium">
          Project Type *
        </Label>
        <Select value={data.projectType} onValueChange={(value) => updateData('projectType', value)}>
          <SelectTrigger className={`${errors.projectType ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}>
            <SelectValue placeholder="Select your project type" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.projectType && (
          <p className="text-sm text-red-500">{errors.projectType}</p>
        )}
      </div>

      {/* Target Audience */}
      <div className="space-y-3">
        <Label htmlFor="targetAudience" className="text-bpspecs-dark-charcoal font-medium">
          Target Audience *
        </Label>
        <Textarea
          id="targetAudience"
          placeholder="Describe your ideal customers (age, profession, interests, pain points)..."
          value={data.targetAudience}
          onChange={(e) => updateData('targetAudience', e.target.value)}
          className={`min-h-[80px] ${errors.targetAudience ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
        />
        {errors.targetAudience && (
          <p className="text-sm text-red-500">{errors.targetAudience}</p>
        )}
      </div>

      {/* Industry */}
      <div className="space-y-3">
        <Label className="text-bpspecs-dark-charcoal font-medium">
          Industry *
        </Label>
        <Select value={data.industry} onValueChange={(value) => updateData('industry', value)}>
          <SelectTrigger className={`${errors.industry ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}>
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.industry && (
          <p className="text-sm text-red-500">{errors.industry}</p>
        )}
      </div>

      {/* Key Features */}
      <div className="space-y-3">
        <Label className="text-bpspecs-dark-charcoal font-medium">
          Key Features or Services
        </Label>
        <div className="flex space-x-2">
          <Input
            placeholder="Add a key feature..."
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border-bpspecs-taupe/30"
          />
          <Button
            type="button"
            onClick={addFeature}
            variant="outline"
            className="border-bpspecs-taupe/30"
            disabled={!newFeature.trim()}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        
        {data.keyFeatures.length > 0 && (
          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {data.keyFeatures.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                    <span>{feature}</span>
                    <button
                      onClick={() => removeFeature(feature)}
                      className="ml-1 hover:text-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        <p className="text-sm text-bpspecs-taupe">
          Add the main features or services your business will offer (optional but recommended)
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
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default BusinessDetailsStep;
