
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-bpspecs-off-white to-bpspecs-beige/30 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-bpspecs-dark-charcoal leading-[1.1]">
                  Turn Your Business Idea Into
                  <br />
                  <span className="text-gradient">Investor-Ready Specifications</span>
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-bpspecs-taupe leading-relaxed">
                  in Minutes
                </p>
              </div>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-bpspecs-taupe leading-relaxed font-medium max-w-2xl">
                AI-powered business plan generator that creates comprehensive specifications, 
                technical requirements, and implementation roadmaps that impress investors and guide developers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white px-10 py-6 text-xl font-semibold rounded-xl shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Generate My Business Plan
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-10 py-6 text-xl font-semibold border-2 border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-bpspecs-off-white rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-3" />
                  See Example Output
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-4 border-t border-bpspecs-taupe/20">
                <div className="flex items-center gap-3 text-bpspecs-taupe">
                  <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                  <span className="font-medium">Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-3 text-bpspecs-taupe">
                  <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-3 text-bpspecs-taupe">
                  <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                  <span className="font-medium">Used by 500+ startups</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Demo Preview */}
            <div className="relative lg:pl-8">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-bpspecs-taupe/10 hover:shadow-3xl transition-all duration-500">
                {/* Input Section */}
                <div className="bg-gradient-to-r from-bpspecs-off-white to-bpspecs-beige/50 rounded-xl p-8 mb-8 border border-bpspecs-taupe/20">
                  <div className="text-sm font-semibold text-bpspecs-teal mb-4 uppercase tracking-wide">
                    INPUT
                  </div>
                  <div className="text-bpspecs-dark-charcoal font-medium text-lg leading-relaxed">
                    "I want to build a food delivery app for local restaurants"
                  </div>
                </div>
                
                {/* Arrow Transition */}
                <div className="flex items-center justify-center py-6">
                  <div className="bg-bpspecs-teal/10 rounded-full p-4">
                    <ArrowRight className="w-8 h-8 text-bpspecs-teal" />
                  </div>
                </div>
                
                {/* Output Section */}
                <div className="bg-gradient-to-r from-bpspecs-teal/5 to-bpspecs-olive/5 rounded-xl p-8 border border-bpspecs-teal/20">
                  <div className="text-sm font-semibold text-bpspecs-teal mb-6 uppercase tracking-wide">
                    GENERATED OUTPUT
                  </div>
                  <div className="space-y-4">
                    {[
                      "Business Overview & Model",
                      "Technical Requirements",
                      "Market Analysis & Strategy",
                      "Implementation Roadmap",
                      "Financial Projections",
                      "Risk Assessment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-bpspecs-teal rounded-full flex-shrink-0"></div>
                        <span className="text-bpspecs-dark-charcoal font-medium">{item}</span>
                      </div>
                    ))}
                    <div className="text-sm text-bpspecs-taupe mt-6 font-medium border-t border-bpspecs-taupe/20 pt-4">
                      + 12 additional comprehensive sections
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-bpspecs-teal/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-bpspecs-olive/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
