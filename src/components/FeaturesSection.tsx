
import { CheckCircle, FileText, Zap, Users, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Comprehensive Documentation",
    description: "Generate complete project specifications including requirements, architecture, and implementation details.",
    benefits: ["Technical specifications", "User stories", "API documentation", "Database schemas"]
  },
  {
    icon: Zap,
    title: "Lightning Fast Generation",
    description: "Transform your ideas into detailed specifications in minutes, not days or weeks.",
    benefits: ["Sub-minute generation", "Real-time updates", "Instant previews", "Quick iterations"]
  },
  {
    icon: Workflow,
    title: "Intelligent Structure",
    description: "AI organizes your specs with industry-standard formats and best practices.",
    benefits: ["Industry standards", "Consistent formatting", "Logical flow", "Version control ready"]
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share and collaborate on specifications with your entire development team.",
    benefits: ["Real-time collaboration", "Comment system", "Role-based access", "Team workspaces"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security ensures your project specifications remain confidential.",
    benefits: ["End-to-end encryption", "SOC 2 compliance", "Private deployments", "Audit logs"]
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Built-in validation ensures your specifications are complete and actionable.",
    benefits: ["Completeness checks", "Best practice validation", "Quality scoring", "Improvement suggestions"]
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Everything You Need to
            <span className="block text-gradient">Spec Like a Pro</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Recipe Specs combines the power of AI with Recipe Group's expertise 
            in project delivery to create the ultimate specification tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card border border-border rounded-2xl hover:border-recipe-accent/50 transition-all duration-300 hover:-translate-y-1 cinematic-glow"
            >
              <div className="w-14 h-14 bg-recipe-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-recipe-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-recipe-accent" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-recipe-success mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-recipe-accent mb-2">10x</div>
            <div className="text-sm text-muted-foreground">Faster Spec Creation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-recipe-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-recipe-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-recipe-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
