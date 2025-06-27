
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, CheckCircle, XCircle } from 'lucide-react';
import { ProjectInput } from '@/pages/CreateProject';

interface BusinessIdeaStepProps {
  data: ProjectInput;
  errors: Record<string, string>;
  updateData: (field: keyof ProjectInput, value: any) => void;
  onNext: () => void;
}

const BusinessIdeaStep = ({ data, errors, updateData, onNext }: BusinessIdeaStepProps) => {
  const characterCount = data.businessIdea.length;
  const isOptimal = characterCount >= 100 && characterCount <= 500;
  const isTooShort = characterCount < 100 && characterCount > 0;
  const isTooLong = characterCount > 500;

  const examples = [
    {
      good: true,
      text: "A subscription-based meal planning app that creates personalized weekly menus based on dietary restrictions, budget constraints, and local grocery store availability. Target users are busy professionals aged 25-40 who want to eat healthily but lack time for meal planning.",
      reason: "Specific target market, clear value proposition, addresses real problem"
    },
    {
      good: false,
      text: "An app for food",
      reason: "Too vague, no target market, unclear value proposition"
    }
  ];

  const tips = [
    "Be specific about your target market and their pain points",
    "Explain what makes your solution unique or better",
    "Include the core value proposition in simple terms",
    "Mention the business model if you have one in mind"
  ];

  return (
    <div className="space-y-6">
      {/* Main Input */}
      <div className="space-y-3">
        <Label htmlFor="businessIdea" className="text-bpspecs-dark-charcoal font-medium">
          Describe your business idea in detail *
        </Label>
        <Textarea
          id="businessIdea"
          placeholder="e.g., A subscription-based meal planning app that creates personalized weekly menus based on dietary restrictions, budget constraints, and local grocery store availability..."
          value={data.businessIdea}
          onChange={(e) => updateData('businessIdea', e.target.value)}
          className={`min-h-[120px] resize-none ${
            errors.businessIdea ? 'border-red-500' : 
            isOptimal ? 'border-green-500' : 
            'border-bpspecs-taupe/30'
          }`}
        />
        
        {/* Character Count and Status */}
        <div className="flex items-center justify-between text-sm">
          <span className={`${
            isOptimal ? 'text-green-600' : 
            isTooShort ? 'text-orange-600' : 
            isTooLong ? 'text-red-600' : 
            'text-bpspecs-taupe'
          }`}>
            {characterCount} characters
            {isOptimal && ' (Optimal length)'}
            {isTooShort && ' (Could use more detail)'}
            {isTooLong && ' (Consider being more concise)'}
          </span>
          
          {characterCount > 0 && (
            <div className="flex items-center space-x-1">
              {isOptimal ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <XCircle className="w-4 h-4 text-red-600" />
              )}
            </div>
          )}
        </div>

        {errors.businessIdea && (
          <p className="text-sm text-red-500">{errors.businessIdea}</p>
        )}
      </div>

      {/* Tips Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <h3 className="font-medium text-blue-900">Tips for Better Results</h3>
          </div>
          <ul className="space-y-2 text-sm text-blue-800">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="space-y-4">
        <h3 className="font-medium text-bpspecs-dark-charcoal">Examples</h3>
        {examples.map((example, index) => (
          <Card key={index} className={`${
            example.good ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-2 mb-2">
                {example.good ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className={`text-sm ${
                    example.good ? 'text-green-800' : 'text-red-800'
                  } mb-2`}>
                    "{example.text}"
                  </p>
                  <p className={`text-xs ${
                    example.good ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {example.reason}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <Button
          onClick={onNext}
          className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-white px-8"
          disabled={!data.businessIdea.trim()}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default BusinessIdeaStep;
