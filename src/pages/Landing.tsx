
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle, Zap, Brain, FileText, Route, Download, Users, Star, Quote } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Landing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate('/');
    } else {
      navigate('/signup');
    }
  };

  const handleDemo = () => {
    navigate('/signup');
  };

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
      icon: Route,
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
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate comprehensive business plans in minutes, not weeks of manual work.",
      benefit: "From idea to plan in 5 minutes"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      content: "BPSpecs helped us secure $2M in seed funding. The technical specifications were exactly what our investors needed.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "CEO, DataVault",
      content: "Cut our business planning time from weeks to hours. The AI analysis caught market opportunities we hadn't considered.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager, InnovateLab",
      content: "The implementation roadmap was spot-on. Our dev team could start building immediately from the specifications.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for exploring your first business idea",
      features: [
        "3 business plans per month",
        "Basic AI analysis",
        "PDF export",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Plus",
      price: "$29",
      period: "month",
      description: "For entrepreneurs ready to scale",
      features: [
        "Unlimited business plans",
        "Advanced AI analysis",
        "All export formats",
        "Team collaboration",
        "Priority support",
        "Version history"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "$79",
      period: "month",
      description: "For agencies and consultants",
      features: [
        "Everything in Plus",
        "White-label reports",
        "API access",
        "Custom templates",
        "Advanced analytics",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-left space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bpspecs-dark-charcoal leading-[1.1]">
                    Turn Your Business Idea Into
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive">
                      Investor-Ready Specifications
                    </span>
                  </h1>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-bpspecs-taupe leading-relaxed">
                    in Minutes
                  </p>
                </div>

                <p className="text-lg md:text-xl lg:text-2xl text-bpspecs-taupe leading-relaxed font-medium max-w-2xl">
                  AI-powered business plan generator that creates comprehensive specifications, 
                  technical requirements, and implementation roadmaps that impress investors and guide developers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <Button 
                    onClick={handleGetStarted}
                    size="lg" 
                    className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white px-8 md:px-10 py-5 md:py-6 text-lg md:text-xl rounded-xl shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    Generate My Business Plan
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-3" />
                  </Button>
                  <Button 
                    onClick={handleDemo}
                    variant="outline" 
                    size="lg" 
                    className="px-8 md:px-10 py-5 md:py-6 text-lg md:text-xl font-semibold border-2 border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-bpspecs-off-white rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                    See Example Output
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-bpspecs-taupe/20">
                  <div className="flex items-center gap-3 text-bpspecs-taupe">
                    <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                    <span className="font-medium text-base lg:text-lg">Free 14-day trial</span>
                  </div>
                  <div className="flex items-center gap-3 text-bpspecs-taupe">
                    <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                    <span className="font-medium text-base lg:text-lg">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-3 text-bpspecs-taupe">
                    <div className="w-3 h-3 bg-bpspecs-teal rounded-full"></div>
                    <span className="font-medium text-base lg:text-lg">Used by 500+ startups</span>
                  </div>
                </div>
              </div>

              {/* Right Visual - Demo Preview */}
              <div className="relative lg:pl-4 xl:pl-8">
                <div className="bg-white p-6 md:p-8 shadow-2xl border border-bpspecs-taupe/10 hover:shadow-3xl transition-all duration-500 max-w-lg lg:max-w-xl rounded-2xl">
                  {/* Input Section */}
                  <div className="bg-gradient-to-r from-bpspecs-off-white to-bpspecs-beige/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-bpspecs-taupe/20">
                    <div className="text-sm font-semibold text-bpspecs-teal mb-3 md:mb-4 uppercase tracking-wide">
                      INPUT
                    </div>
                    <div className="text-bpspecs-dark-charcoal font-medium text-base md:text-lg lg:text-xl leading-relaxed">
                      "I want to build a food delivery app for local restaurants"
                    </div>
                  </div>
                  
                  {/* Arrow Transition */}
                  <div className="flex items-center justify-center py-4 md:py-6">
                    <div className="bg-bpspecs-teal/10 rounded-full p-3 md:p-4">
                      <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-bpspecs-teal" />
                    </div>
                  </div>
                  
                  {/* Output Section */}
                  <div className="bg-gradient-to-r from-bpspecs-teal/5 to-bpspecs-olive/5 rounded-xl p-6 md:p-8 border border-bpspecs-teal/20">
                    <div className="text-sm font-semibold text-bpspecs-teal mb-4 md:mb-6 uppercase tracking-wide">
                      GENERATED OUTPUT
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      {["Business Overview & Model", "Technical Requirements", "Market Analysis & Strategy", "Implementation Roadmap", "Financial Projections", "Risk Assessment"].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 md:gap-4">
                          <div className="w-3 h-3 bg-bpspecs-teal rounded-full flex-shrink-0"></div>
                          <span className="text-bpspecs-dark-charcoal font-medium text-sm md:text-base lg:text-lg">{item}</span>
                        </div>
                      ))}
                      <div className="text-sm md:text-base text-bpspecs-taupe mt-4 md:mt-6 font-medium border-t border-bpspecs-taupe/20 pt-4 md:pt-6">
                        + 12 additional comprehensive sections
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-bpspecs-teal/10 rounded-full blur-xl -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-bpspecs-olive/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-bpspecs-off-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bpspecs-dark-charcoal leading-tight">
              Everything You Need to<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive">
                Impress Investors & Guide Developers
              </span>
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-bpspecs-beige/30 to-bpspecs-taupe/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bpspecs-dark-charcoal">
              Trusted by <span className="text-gradient">500+ Entrepreneurs</span>
            </h2>
            <p className="text-xl text-bpspecs-taupe">
              See how BPSpecs is helping startups secure funding and build better products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-bpspecs-taupe/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-bpspecs-teal/20 mb-4" />
                <p className="text-bpspecs-dark-charcoal mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-bpspecs-dark-charcoal">{testimonial.name}</div>
                  <div className="text-bpspecs-taupe text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-bpspecs-off-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bpspecs-dark-charcoal">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-bpspecs-taupe">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-xl border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-bpspecs-teal bg-white shadow-xl scale-105' 
                    : 'border-bpspecs-taupe/20 bg-white hover:border-bpspecs-teal/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-bpspecs-teal text-bpspecs-off-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-bpspecs-dark-charcoal mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-bpspecs-dark-charcoal">{plan.price}</span>
                    <span className="text-bpspecs-taupe">/{plan.period}</span>
                  </div>
                  <p className="text-bpspecs-taupe">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-bpspecs-teal flex-shrink-0" />
                      <span className="text-bpspecs-dark-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleGetStarted}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white shadow-lg hover:shadow-xl'
                      : 'bg-bpspecs-beige hover:bg-bpspecs-taupe/20 text-bpspecs-dark-charcoal border border-bpspecs-taupe/20'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-bpspecs-dark-charcoal to-bpspecs-dark-charcoal/90">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bpspecs-off-white leading-tight">
              Ready to Impress Investors with<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive">Professional Specifications?</span>
            </h2>
            
            <p className="text-xl text-bpspecs-beige mb-8 leading-relaxed font-medium">
              Join thousands of entrepreneurs who've accelerated their business planning and secured funding with BPSpecs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-gradient-to-br from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/80 hover:to-bpspecs-olive/80 text-bpspecs-off-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg border-0 transition-all duration-200 hover:scale-105"
              >
                Generate My Business Plan Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleDemo}
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 border-bpspecs-taupe text-bpspecs-taupe hover:bg-bpspecs-taupe hover:text-bpspecs-dark-charcoal rounded-lg transition-all duration-200 hover:scale-105"
              >
                Schedule a Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-bpspecs-beige">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-bpspecs-teal" />
                <span className="font-medium">14-day free trial</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-bpspecs-teal" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-bpspecs-teal" />
                <span className="font-medium">Results in 5 minutes</span>
              </div>
            </div>

            <div className="mt-12 p-6 bg-bpspecs-teal/10 rounded-lg border border-bpspecs-teal/20">
              <p className="text-bpspecs-beige text-sm">
                <strong className="text-bpspecs-teal">Special Launch Offer:</strong> Get 3 months free when you upgrade to Pro within your first week. 
                Limited time only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
