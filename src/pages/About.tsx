
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Target, Zap, Award, Globe, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former McKinsey consultant with 10+ years in business strategy and AI product development.",
      icon: Target
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      description: "Ex-Google engineer specializing in AI/ML systems and scalable business applications.",
      icon: Zap
    },
    {
      name: "Elena Kowalski",
      role: "Head of Product",
      description: "Design thinking expert who has helped 500+ startups refine their business models.",
      icon: Users
    }
  ];

  const values = [
    {
      icon: Globe,
      title: "Accessible Innovation",
      description: "Making professional business planning tools available to entrepreneurs everywhere, regardless of budget or background."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Every specification we generate meets the highest industry standards for investor presentations and technical documentation."
    },
    {
      icon: Heart,
      title: "Entrepreneur Success",
      description: "We measure our success by the success of the businesses built using our platform. Your wins are our wins."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
      <Header />
      
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-bpspecs-dark-charcoal mb-6">
            About BPSpecs
          </h1>
          <p className="text-xl text-bpspecs-taupe max-w-3xl mx-auto leading-relaxed">
            We're Recipe Group's latest innovation, combining AI technology with business expertise 
            to help entrepreneurs turn ideas into investor-ready specifications in minutes, not months.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-bpspecs-taupe leading-relaxed">
              <p>
                BPSpecs was born from a simple observation: too many great business ideas never see the light of day 
                because entrepreneurs get stuck in the planning phase. Traditional business plan creation is time-consuming, 
                expensive, and often produces documents that don't resonate with modern investors.
              </p>
              <p>
                As part of Recipe Group's portfolio of innovative solutions, we set out to solve this problem by combining 
                cutting-edge AI with deep business expertise. Our platform transforms a simple idea description into 
                comprehensive, professional specifications that impress investors and guide development teams.
              </p>
              <p>
                Since launching, we've helped over 500 entrepreneurs secure funding, validate their ideas, and build 
                successful businesses. We're not just a tool – we're a partner in your entrepreneurial journey.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-bpspecs-taupe/20">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-bpspecs-teal/10 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-bpspecs-teal" />
              </div>
              <div>
                <div className="text-3xl font-bold text-bpspecs-dark-charcoal">500+</div>
                <div className="text-bpspecs-taupe">Businesses Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bpspecs-teal">$50M+</div>
                <div className="text-bpspecs-taupe">Funding Secured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bpspecs-olive">95%</div>
                <div className="text-bpspecs-taupe">Investor Approval Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-bpspecs-dark-charcoal text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-bpspecs-taupe/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-bpspecs-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <member.icon className="w-8 h-8 text-bpspecs-teal" />
                  </div>
                  <CardTitle className="text-bpspecs-dark-charcoal">{member.name}</CardTitle>
                  <CardDescription className="text-bpspecs-teal font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-bpspecs-taupe leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-bpspecs-dark-charcoal text-center mb-12">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-bpspecs-olive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-bpspecs-olive" />
                </div>
                <h3 className="text-xl font-bold text-bpspecs-dark-charcoal mb-4">{value.title}</h3>
                <p className="text-bpspecs-taupe leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recipe Group Section */}
        <div className="bg-bpspecs-dark-charcoal rounded-3xl p-8 md:p-12 text-center mb-20">
          <h2 className="text-3xl font-bold text-bpspecs-off-white mb-6">
            Powered by Recipe Group
          </h2>
          <p className="text-xl text-bpspecs-beige mb-8 max-w-3xl mx-auto leading-relaxed">
            BPSpecs is proudly developed by Recipe Group, a leading technology company specializing in 
            AI-powered business solutions. We leverage decades of combined experience in business strategy, 
            software development, and artificial intelligence to create tools that truly make a difference.
          </p>
          <Button 
            onClick={() => window.open('https://recipegroup.com', '_blank')}
            className="bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/90 hover:to-bpspecs-olive/90 text-bpspecs-off-white"
          >
            Learn More About Recipe Group
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-6">
            Ready to Transform Your Business Idea?
          </h2>
          <p className="text-xl text-bpspecs-taupe mb-8">
            Join hundreds of entrepreneurs who have successfully launched their businesses with BPSpecs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white px-8 py-3"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => navigate('/pricing')}
              variant="outline" 
              className="border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-bpspecs-off-white px-8 py-3"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
