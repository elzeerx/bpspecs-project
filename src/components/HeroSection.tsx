
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-bpspecs-off-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bpspecs-dark-charcoal mb-8 leading-tight">
            Transform Business Ideas Into
            <br />
            <span className="text-gradient">Professional Specs</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-bpspecs-taupe mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            BPSpecs transforms your business ideas into comprehensive, investor-ready specifications using advanced AI. 
            Get detailed business plans, technical requirements, and implementation roadmaps in minutes, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg border-0"
            >
              Start Creating Business Specs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-bpspecs-off-white rounded-lg transition-all duration-200"
            >
              Watch Demo
            </Button>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-bpspecs-dark-charcoal mb-3">10x</div>
              <div className="text-sm font-medium text-bpspecs-taupe uppercase tracking-wide">Faster Planning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bpspecs-dark-charcoal mb-3">500+</div>
              <div className="text-sm font-medium text-bpspecs-taupe uppercase tracking-wide">Startups Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bpspecs-dark-charcoal mb-3">24/7</div>
              <div className="text-sm font-medium text-bpspecs-taupe uppercase tracking-wide">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
