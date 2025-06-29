
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with business planning',
      features: [
        '3 business plans per month',
        'Basic AI analysis',
        'Standard templates',
        'PDF export',
        'Email support',
      ],
      limitations: [
        'Limited AI features',
        'No version history',
        'Basic export options',
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Plus',
      price: '$29',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited business plans',
        'Advanced AI analysis',
        'Premium templates',
        'All export formats (PDF, Word, Markdown)',
        'Version history & comparison',
        'Priority support',
        'Custom branding',
      ],
      buttonText: 'Start Plus Trial',
      buttonVariant: 'default' as const,
      popular: true,
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      description: 'Complete solution for teams and agencies',
      features: [
        'Everything in Plus',
        'Team collaboration',
        'White-label export',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Phone support',
        'Advanced analytics',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
      <Header />
      
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-bpspecs-dark-charcoal mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-bpspecs-taupe max-w-2xl mx-auto">
            Transform your business ideas into professional specifications with AI-powered analysis and expert templates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-bpspecs-teal shadow-xl scale-105' : 'border-bpspecs-taupe/30'}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  {plan.name === 'Free' && <Zap className="w-8 h-8 text-bpspecs-teal" />}
                  {plan.name === 'Plus' && <Crown className="w-8 h-8 text-bpspecs-olive" />}
                  {plan.name === 'Pro' && <Users className="w-8 h-8 text-bpspecs-taupe" />}
                </div>
                <CardTitle className="text-2xl font-bold text-bpspecs-dark-charcoal">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-bpspecs-dark-charcoal">
                    {plan.price}
                  </span>
                  <span className="text-bpspecs-taupe">{plan.period}</span>
                </div>
                <CardDescription className="text-bpspecs-taupe">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-bpspecs-teal mt-0.5 flex-shrink-0" />
                      <span className="text-bpspecs-dark-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/signup" className="block">
                  <Button 
                    variant={plan.buttonVariant}
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/90 hover:to-bpspecs-olive/90 text-white' : ''}`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-bpspecs-dark-charcoal mb-4">
            Questions about pricing?
          </h2>
          <p className="text-bpspecs-taupe mb-6">
            We're here to help you choose the right plan for your business needs.
          </p>
          <Button variant="outline" asChild>
            <Link to="/about">
              Contact Sales Team
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
