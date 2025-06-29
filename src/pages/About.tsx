
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Users, Zap, ArrowRight, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const team = [
    {
      name: 'Recipe Group',
      role: 'Development Team',
      description: 'AI-focused development company specializing in business automation and intelligent document generation.',
    },
  ];

  const values = [
    {
      icon: Brain,
      title: 'AI-Powered Innovation',
      description: 'We leverage cutting-edge artificial intelligence to transform how business plans are created and analyzed.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every feature is designed to help entrepreneurs and businesses achieve their goals faster and more effectively.',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'We build tools that are intuitive, accessible, and designed around real user needs and workflows.',
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Transform weeks of planning work into minutes with our intelligent automation and expert templates.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
      <Header />
      
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/ef90fafa-e4b6-4c2f-b1b1-eb84d638b33f.png" 
              alt="BPSpecs Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-bpspecs-dark-charcoal mb-6">
            About BPSpecs
          </h1>
          <p className="text-xl text-bpspecs-taupe max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing business planning with AI-powered tools that transform ideas 
            into comprehensive, investor-ready specifications in minutes, not weeks.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <Card className="border-bpspecs-taupe/30">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-bpspecs-dark-charcoal mb-4">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <p className="text-lg text-bpspecs-dark-charcoal leading-relaxed text-center mb-8">
                To democratize business planning by making professional-grade business specifications 
                accessible to entrepreneurs, startups, and established businesses worldwide. We believe 
                every great idea deserves a professional foundation to succeed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bpspecs-teal mb-2">10,000+</div>
                  <div className="text-bpspecs-taupe">Business Plans Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bpspecs-olive mb-2">95%</div>
                  <div className="text-bpspecs-taupe">User Satisfaction Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-bpspecs-taupe max-w-2xl mx-auto">
              The principles that guide everything we build and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-bpspecs-taupe/30 hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-bpspecs-dark-charcoal">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-bpspecs-taupe leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-4">
              Built by Recipe Group
            </h2>
            <p className="text-bpspecs-taupe max-w-2xl mx-auto">
              A dedicated team of AI engineers, business analysts, and designers passionate about entrepreneurship.
            </p>
          </div>
          
          <Card className="border-bpspecs-taupe/30 max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-bpspecs-dark-charcoal">
                Recipe Group
              </CardTitle>
              <CardDescription className="text-bpspecs-olive font-medium">
                Development Team
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-bpspecs-taupe leading-relaxed mb-6">
                AI-focused development company specializing in business automation and 
                intelligent document generation. We combine deep technical expertise with 
                real-world business experience to create tools that actually work.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Team
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-bpspecs-teal/30 bg-gradient-to-br from-bpspecs-teal/5 to-bpspecs-olive/5">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-4">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-bpspecs-taupe mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who are already using BPSpecs to turn their 
                business ideas into professional specifications.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/90 hover:to-bpspecs-olive/90">
                  <Link to="/signup">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
