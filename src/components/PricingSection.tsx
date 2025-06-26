
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "Startup",
    price: "29",
    period: "per month",
    description: "Perfect for individual entrepreneurs and small startups",
    features: [
      "Up to 10 business plans per month",
      "Basic AI templates",
      "PDF export",
      "Email support",
      "Community access"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "99",
    period: "per month",
    description: "Ideal for growing businesses and multiple ventures",
    features: [
      "Unlimited business plans",
      "Advanced AI models",
      "Team collaboration",
      "Custom templates",
      "Priority support",
      "Version control",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For accelerators and large organizations",
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
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-6 text-black">
            Simple, Transparent<br />
            <span className="text-recipe-accent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-white border-2 ${plan.popular ? 'border-recipe-accent' : 'border-gray-200'} transition-all duration-200 ${plan.popular ? '' : 'hover:border-gray-300'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-recipe-accent text-white px-4 py-2 text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-4xl font-medium text-black">${plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-medium text-black">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-recipe-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular 
                  ? 'bg-recipe-accent hover:bg-recipe-accent-dark text-white' 
                  : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 mb-8">
            Trusted by entrepreneurs and business leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-medium text-gray-900">StartupHub</div>
            <div className="text-lg font-medium text-gray-900">VentureLab</div>
            <div className="text-lg font-medium text-gray-900">BusinessPro</div>
            <div className="text-lg font-medium text-gray-900">GrowthCorp</div>
            <div className="text-lg font-medium text-gray-900">LaunchPad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
