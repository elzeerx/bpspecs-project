
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    period: "per month",
    description: "Perfect for individual developers and small projects",
    features: [
      "Up to 10 specifications per month",
      "Basic AI templates",
      "PDF export",
      "Email support",
      "Community access"
    ],
    cta: "Start Free Trial",
    popular: false,
    color: "border-border"
  },
  {
    name: "Professional",
    price: "99",
    period: "per month",
    description: "Ideal for growing teams and multiple projects",
    features: [
      "Unlimited specifications",
      "Advanced AI models",
      "Team collaboration",
      "Custom templates",
      "Priority support",
      "Version control",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "border-recipe-accent"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Professional",
      "Custom AI training",
      "Private deployment",
      "SSO integration",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false,
    color: "border-border"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Simple, Transparent
            <span className="block text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-muted rounded-full">
            <span className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm">
              Monthly
            </span>
            <span className="px-4 py-2 text-sm font-medium text-muted-foreground">
              Annual
            </span>
            <div className="bg-recipe-accent text-white px-2 py-1 rounded-full text-xs font-bold">
              Save 20%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-card border-2 ${plan.color} rounded-2xl hover:border-recipe-accent/50 transition-all duration-300 ${plan.popular ? 'scale-105 brutalist-shadow' : 'hover:-translate-y-1'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-recipe-accent text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-4xl font-black">${plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-black">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-recipe-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular 
                  ? 'bg-recipe-accent hover:bg-recipe-accent-dark text-white' 
                  : 'bg-background border border-border hover:bg-accent'
                }`}
                size="lg"
              >
                {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by developers at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-bold">TechCorp</div>
            <div className="text-lg font-bold">InnovateLabs</div>
            <div className="text-lg font-bold">DevStudio</div>
            <div className="text-lg font-bold">CodeForge</div>
            <div className="text-lg font-bold">BuildTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
