
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-black mb-8">
            Transform Business Ideas Into
            <br />
            <span className="text-recipe-accent">Professional Specs</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            BPSpecs transforms your business ideas into comprehensive, investor-ready specifications using advanced AI. 
            Get detailed business plans, technical requirements, and implementation roadmaps in minutes, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-recipe-accent hover:bg-recipe-accent-dark text-white px-8 py-4 text-lg font-medium"
            >
              Start Creating Business Specs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-medium border-gray-300 text-gray-900 hover:bg-gray-50"
            >
              Watch Demo
            </Button>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-medium text-black mb-2">10x</div>
              <div className="text-sm text-gray-600">Faster Planning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-black mb-2">500+</div>
              <div className="text-sm text-gray-600">Startups Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-black mb-2">24/7</div>
              <div className="text-sm text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
