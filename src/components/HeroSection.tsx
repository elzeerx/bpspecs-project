import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
const HeroSection = () => {
  return <section className="py-16 md:py-20 lg:py-0 bg-gradient-to-br from-bpspecs-off-white to-bpspecs-beige/30 lg:min-h-[70vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6 md:space-y-8 lg:space-y-8 lg:flex lg:flex-col lg:justify-center">
              {/* Main Headline */}
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bpspecs-dark-charcoal leading-[1.1] lg:leading-[1.05] px-0 xl:text-6xl">
                  Turn Your Business Idea Into
                  <br />
                  <span className="text-gradient">Investor-Ready Specifications</span>
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-bpspecs-taupe leading-relaxed lg:leading-[1.2]">
                  in Minutes
                </p>
              </div>

              {/* Subheadline */}
              <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-bpspecs-taupe leading-relaxed font-medium max-w-2xl lg:leading-[1.4]">
                AI-powered business plan generator that creates comprehensive specifications, 
                technical requirements, and implementation roadmaps that impress investors and guide developers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-6 lg:pt-4">
                <Button size="lg" className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white px-8 md:px-10 lg:px-12 py-5 md:py-6 lg:py-7 text-lg md:text-xl lg:text-xl font-semibold rounded-xl shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Generate My Business Plan
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-3" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 md:px-10 lg:px-12 py-5 md:py-6 lg:py-7 text-lg md:text-xl lg:text-xl font-semibold border-2 border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-bpspecs-off-white rounded-xl transition-all duration-300 hover:scale-105">
                  <Play className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                  See Example Output
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-bpspecs-taupe/20">
                <div className="flex items-center gap-3 text-bpspecs-taupe">
                  <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                  <span className="font-medium text-base lg:text-lg">Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-3 text-bpspecs-taupe">
                  <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                  <span className="font-medium text-base lg:text-lg">No credit card required</span>
                </div>
                <div className="flex items-center gap-3 text-bpspecs-taupe">
                  <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                  <span className="font-medium text-base lg:text-lg">Used by 500+ startups</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Demo Preview */}
            <div className="relative lg:pl-4 xl:pl-8 lg:flex lg:items-center lg:justify-center">
              <div className="bg-white p-6 md:p-8 lg:p-8 xl:p-10 shadow-2xl border border-bpspecs-taupe/10 hover:shadow-3xl transition-all duration-500 max-w-lg lg:max-w-xl xl:max-w-xl lg:mx-0 px-[20px] py-[20px] my-0 mx-[70px] rounded-2xl">
                {/* Input Section */}
                <div className="bg-gradient-to-r from-bpspecs-off-white to-bpspecs-beige/50 rounded-xl p-6 md:p-8 lg:p-8 mb-6 md:mb-8 lg:mb-8 border border-bpspecs-taupe/20">
                  <div className="text-sm font-semibold text-bpspecs-teal mb-3 md:mb-4 lg:mb-4 uppercase tracking-wide">
                    INPUT
                  </div>
                  <div className="text-bpspecs-dark-charcoal font-medium text-base md:text-lg lg:text-xl leading-relaxed">
                    "I want to build a food delivery app for local restaurants"
                  </div>
                </div>
                
                {/* Arrow Transition */}
                <div className="flex items-center justify-center py-4 md:py-6 lg:py-6">
                  <div className="bg-bpspecs-teal/10 rounded-full p-3 md:p-4 lg:p-4">
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 text-bpspecs-teal" />
                  </div>
                </div>
                
                {/* Output Section */}
                <div className="bg-gradient-to-r from-bpspecs-teal/5 to-bpspecs-olive/5 rounded-xl p-6 md:p-8 lg:p-8 border border-bpspecs-teal/20">
                  <div className="text-sm font-semibold text-bpspecs-teal mb-4 md:mb-6 lg:mb-6 uppercase tracking-wide">
                    GENERATED OUTPUT
                  </div>
                  <div className="space-y-3 md:space-y-4 lg:space-y-4">
                    {["Business Overview & Model", "Technical Requirements", "Market Analysis & Strategy", "Implementation Roadmap", "Financial Projections", "Risk Assessment"].map((item, index) => <div key={index} className="flex items-center gap-3 md:gap-4">
                        <div className="w-3 h-3 bg-bpspecs-teal rounded-full flex-shrink-0"></div>
                        <span className="text-bpspecs-dark-charcoal font-medium text-sm md:text-base lg:text-lg">{item}</span>
                      </div>)}
                    <div className="text-sm md:text-base text-bpspecs-taupe mt-4 md:mt-6 lg:mt-6 font-medium border-t border-bpspecs-taupe/20 pt-4 md:pt-6 lg:pt-6">
                      + 12 additional comprehensive sections
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-bpspecs-teal/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-bpspecs-olive/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;