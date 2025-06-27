
import { CheckCircle, FileText, Zap, Users, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Comprehensive Business Plans",
    description: "Generate complete business plan specifications including market analysis, financial projections, and operational strategies."
  },
  {
    icon: Zap,
    title: "Lightning Fast Generation",
    description: "Transform your business ideas into detailed specifications in minutes, not days or weeks."
  },
  {
    icon: Workflow,
    title: "Intelligent Structure",
    description: "AI organizes your business specs with industry-standard formats and best practices."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share and collaborate on business specifications with your entire founding team."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security ensures your business specifications remain confidential."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Built-in validation ensures your business specifications are complete and actionable."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-bpspecs-dark-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-bpspecs-off-white leading-tight">
            Everything You Need to<br />
            <span className="text-gradient">Build Business Plans</span>
          </h2>
          <p className="text-xl text-bpspecs-beige leading-relaxed font-medium">
            BPSpecs combines the power of AI with Recipe Group's expertise 
            in business strategy to create the ultimate business plan specification tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-bpspecs-off-white rounded-xl border border-bpspecs-taupe/20 hover:border-bpspecs-teal/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-bpspecs-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bpspecs-teal/20 transition-colors duration-200">
                <feature.icon className="w-7 h-7 text-bpspecs-teal" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-bpspecs-dark-charcoal">{feature.title}</h3>
              <p className="text-bpspecs-taupe leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
