
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, Code } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-recipe-accent/5 via-transparent to-recipe-accent-dark/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-recipe-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-recipe-accent-dark/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-recipe-accent/10 border border-recipe-accent/20 rounded-full text-sm font-medium text-recipe-accent mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            AI-Powered Project Specifications
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 animate-fade-in">
            Turn Ideas Into
            <span className="block text-gradient">Perfect Specs</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Recipe Specs uses advanced AI to transform your project ideas into comprehensive, 
            actionable specifications. From concept to code-ready documentation in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-recipe-accent hover:bg-recipe-accent-dark text-white px-8 py-4 text-lg font-semibold brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Start Creating Specs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-accent"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-recipe-accent/50 transition-colors cinematic-glow">
              <div className="w-12 h-12 bg-recipe-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-recipe-accent" />
              </div>
              <h3 className="font-semibold mb-2">AI-Driven Analysis</h3>
              <p className="text-sm text-muted-foreground text-center">
                Advanced AI understands your requirements and generates comprehensive specs
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-recipe-accent/50 transition-colors cinematic-glow">
              <div className="w-12 h-12 bg-recipe-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-recipe-accent" />
              </div>
              <h3 className="font-semibold mb-2">Code-Ready Output</h3>
              <p className="text-sm text-muted-foreground text-center">
                Specifications formatted for immediate development handoff
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-recipe-accent/50 transition-colors cinematic-glow">
              <div className="w-12 h-12 bg-recipe-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-recipe-accent" />
              </div>
              <h3 className="font-semibold mb-2">Instant Generation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Transform ideas into detailed specs in minutes, not hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
