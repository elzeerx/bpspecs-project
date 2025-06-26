
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-lovable-gray-900">
            Simple, Transparent<br />
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-lovable-gray-600 mb-8">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-white rounded-xl border-2 ${plan.popular ? 'border-lovable-purple shadow-lg' : 'border-lovable-gray-200'} transition-all duration-200 ${plan.popular ? '' : 'hover:border-lovable-gray-300'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-lovable-purple text-white px-4 py-2 text-sm font-semibold rounded-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-lovable-gray-900">{plan.name}</h3>
                <p className="text-lovable-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-4xl font-bold text-lovable-gray-900">${plan.price}</span>
                      <span className="text-lovable-gray-600">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-lovable-gray-900">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-lovable-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-lg ${plan.popular 
                  ? 'bg-lovable-purple hover:bg-lovable-purple-dark text-white' 
                  : 'bg-white border border-lovable-gray-300 text-lovable-gray-700 hover:bg-lovable-gray-50'
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
          <p className="text-sm text-lovable-gray-600 mb-8">
            Trusted by entrepreneurs and business leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-lovable-gray-700">StartupHub</div>
            <div className="text-lg font-semibold text-lovable-gray-700">VentureLab</div>
            <div className="text-lg font-semibold text-lovable-gray-700">BusinessPro</div>
            <div className="text-lg font-semibold text-lovable-gray-700">GrowthCorp</div>
            <div className="text-lg font-semibold text-lovable-gray-700">LaunchPad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
