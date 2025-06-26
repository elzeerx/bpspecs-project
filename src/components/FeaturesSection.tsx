
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
    <section id="features" className="py-20 lg:py-32 bg-lovable-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-lovable-gray-900">
            Everything You Need to<br />
            <span className="text-gradient">Build Business Plans</span>
          </h2>
          <p className="text-xl text-lovable-gray-600">
            BPSpecs combines the power of AI with Recipe Group's expertise 
            in business strategy to create the ultimate business plan specification tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-xl border border-lovable-gray-200 hover:border-lovable-purple/30 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 bg-lovable-purple/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-lovable-purple" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-lovable-gray-900">{feature.title}</h3>
              <p className="text-lovable-gray-600 leading-relaxed">
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
