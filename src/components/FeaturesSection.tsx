
import { Brain, FileText, Code, Roadmap, Download, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Business Analysis",
    description: "Automatically identifies your business model, target market, and key requirements using advanced AI analysis.",
    benefit: "Save 40+ hours of market research"
  },
  {
    icon: FileText,
    title: "Investor-Ready Output",
    description: "Professional documentation that follows industry standards and impresses investors and stakeholders.",
    benefit: "3x higher investor approval rates"
  },
  {
    icon: Code,
    title: "Technical Specifications",
    description: "Detailed requirements, API specifications, and system architecture that developers can immediately use.",
    benefit: "Reduce development time by 60%"
  },
  {
    icon: Roadmap,
    title: "Implementation Roadmap",
    description: "Prioritized phases with realistic timelines, milestones, and resource requirements for execution.",
    benefit: "Clear path from idea to launch"
  },
  {
    icon: Download,
    title: "Multiple Export Formats",
    description: "Export as PDF for investors, Markdown for developers, or structured business plan format.",
    benefit: "One document, multiple audiences"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share specifications with your team, advisors, and stakeholders with built-in collaboration tools.",
    benefit: "Keep everyone aligned and informed"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-bpspecs-off-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bpspecs-dark-charcoal leading-tight">
            Everything You Need to<br />
            <span className="text-gradient">Impress Investors & Guide Developers</span>
          </h2>
          <p className="text-xl text-bpspecs-taupe leading-relaxed font-medium">
            BPSpecs combines the power of AI with Recipe Group's expertise 
            in business strategy to create comprehensive specifications that get results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-xl border border-bpspecs-taupe/20 hover:border-bpspecs-teal/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-bpspecs-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bpspecs-teal/20 transition-colors duration-200">
                <feature.icon className="w-7 h-7 text-bpspecs-teal" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-bpspecs-dark-charcoal">{feature.title}</h3>
              <p className="text-bpspecs-taupe leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-bpspecs-teal/10 text-bpspecs-teal px-3 py-1 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-bpspecs-teal rounded-full"></div>
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-bpspecs-taupe mb-6">
            Ready to see how BPSpecs can transform your business idea?
          </p>
          <button className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200">
            Try BPSpecs Free for 14 Days
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
