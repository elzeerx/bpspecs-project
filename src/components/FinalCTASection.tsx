
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-bpspecs-teal">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bpspecs-off-white leading-tight">
            Ready to Impress Investors with<br />
            <span className="text-bpspecs-beige">Professional Specifications?</span>
          </h2>
          
          <p className="text-xl text-bpspecs-off-white/90 mb-8 leading-relaxed font-medium">
            Join thousands of entrepreneurs who've accelerated their business planning and secured funding with BPSpecs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-bpspecs-off-white hover:bg-bpspecs-beige text-bpspecs-dark-charcoal px-8 py-4 text-lg font-semibold rounded-lg shadow-lg border-0"
            >
              Generate My Business Plan Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-bpspecs-off-white text-bpspecs-off-white hover:bg-bpspecs-off-white hover:text-bpspecs-teal rounded-lg transition-all duration-200"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-bpspecs-off-white/90">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-bpspecs-beige" />
              <span className="font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-bpspecs-beige" />
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-bpspecs-beige" />
              <span className="font-medium">Results in 5 minutes</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-bpspecs-off-white/10 rounded-lg border border-bpspecs-off-white/20">
            <p className="text-bpspecs-off-white/80 text-sm">
              <strong className="text-bpspecs-beige">Special Launch Offer:</strong> Get 3 months free when you upgrade to Pro within your first week. 
              Limited time only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
