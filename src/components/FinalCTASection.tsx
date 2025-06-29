
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const FinalCTASection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    if (user) {
      navigate('/create-project');
    } else {
      navigate('/signup');
    }
  };

  const handleDemoClick = () => {
    navigate('/signup');
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-bpspecs-dark-charcoal to-bpspecs-dark-charcoal/90">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bpspecs-off-white leading-tight">
            Ready to Impress Investors with<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive">Professional Specifications?</span>
          </h2>
          
          <p className="text-xl text-bpspecs-beige mb-8 leading-relaxed font-medium">
            Join thousands of entrepreneurs who've accelerated their business planning and secured funding with BPSpecs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleGenerateClick}
              size="lg" 
              className="bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 text-bpspecs-off-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg border-0 transition-all duration-200 hover:scale-105"
            >
              Generate My Business Plan Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={handleDemoClick}
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-bpspecs-taupe text-bpspecs-taupe hover:bg-bpspecs-taupe hover:text-bpspecs-dark-charcoal rounded-lg transition-all duration-200 hover:scale-105"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-bpspecs-beige">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-bpspecs-teal" />
              <span className="font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-bpspecs-teal" />
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-bpspecs-teal" />
              <span className="font-medium">Results in 5 minutes</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-bpspecs-teal/10 rounded-lg border border-bpspecs-teal/20">
            <p className="text-bpspecs-beige text-sm">
              <strong className="text-bpspecs-teal">Special Launch Offer:</strong> Get 3 months free when you upgrade to Pro within your first week. 
              Limited time only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
