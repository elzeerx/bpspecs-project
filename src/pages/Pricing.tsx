
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pricingTiers } from '@/data/pricing';

const Pricing = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);
    };
    
    checkAuth();
  }, []);

  const handleGetStarted = () => {
    if (isAuthenticated === null) return; // Still checking auth status
    
    if (isAuthenticated) {
      navigate('/billing');
    } else {
      navigate('/signup');
    }
  };

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
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier.name} 
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'border-bpspecs-teal shadow-xl scale-105' : 'border-bpspecs-taupe/30 hover:border-bpspecs-teal/50'
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-bpspecs-dark-charcoal">
                  {tier.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-bpspecs-dark-charcoal">
                    {tier.price}
                  </span>
                  <span className="text-bpspecs-taupe">{tier.period}</span>
                </div>
                <CardDescription className="text-bpspecs-taupe">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-bpspecs-teal mt-0.5 flex-shrink-0" />
                      <span className="text-bpspecs-dark-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleGetStarted}
                  disabled={isAuthenticated === null}
                  className={`w-full transition-all duration-200 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/90 hover:to-bpspecs-olive/90 text-white' 
                      : 'bg-transparent border-2 border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-white'
                  }`}
                >
                  {tier.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
          <Button variant="outline" onClick={() => navigate('/about')}>
            Contact Sales Team
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
