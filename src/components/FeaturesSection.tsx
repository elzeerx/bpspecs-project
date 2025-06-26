
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
    <section id="features" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-6 text-black">
            Everything You Need to<br />
            <span className="text-recipe-accent">Build Business Plans</span>
          </h2>
          <p className="text-xl text-gray-600">
            BPSpecs combines the power of AI with Recipe Group's expertise 
            in business strategy to create the ultimate business plan specification tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white border border-gray-200 hover:border-recipe-accent/30 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-recipe-accent" />
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
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
