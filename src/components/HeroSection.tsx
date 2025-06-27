
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-bpspecs-off-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bpspecs-dark-charcoal mb-6 leading-tight">
                Turn Your Business Idea Into
                <br />
                <span className="text-gradient">Investor-Ready Specifications</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-bpspecs-taupe">in Minutes</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-bpspecs-taupe mb-8 leading-relaxed font-medium">
                AI-powered business plan generator that creates comprehensive specifications, 
                technical requirements, and implementation roadmaps that impress investors and guide developers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button 
                  size="lg" 
                  className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg border-0"
                >
                  Generate My Business Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-bpspecs-off-white rounded-lg transition-all duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  See Example Output
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-bpspecs-taupe">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                  <span>Used by 500+ startups</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Demo Preview */}
            <div className="relative">
              <div className="bg-bpspecs-dark-charcoal rounded-xl p-8 shadow-2xl">
                <div className="bg-bpspecs-off-white rounded-lg p-6 mb-6">
                  <div className="text-sm text-bpspecs-taupe mb-2">INPUT</div>
                  <div className="text-bpspecs-dark-charcoal font-medium">
                    "I want to build a food delivery app for local restaurants"
                  </div>
                </div>
                
                <div className="flex items-center justify-center py-4">
                  <ArrowRight className="w-8 h-8 text-bpspecs-teal" />
                </div>
                
                <div className="bg-bpspecs-off-white rounded-lg p-6">
                  <div className="text-sm text-bpspecs-taupe mb-3">GENERATED OUTPUT</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                      <span className="text-bpspecs-dark-charcoal">Business Overview & Model</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                      <span className="text-bpspecs-dark-charcoal">Technical Requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                      <span className="text-bpspecs-dark-charcoal">Market Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                      <span className="text-bpspecs-dark-charcoal">Implementation Roadmap</span>
                    </div>
                    <div className="text-xs text-bpspecs-taupe mt-3">+ 15 more sections...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
