
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
    <section id="pricing" className="py-24 lg:py-32 bg-bpspecs-beige/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-bpspecs-dark-charcoal leading-tight">
            Simple, Transparent<br />
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-bpspecs-taupe mb-8 font-medium leading-relaxed">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-bpspecs-off-white rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-bpspecs-teal shadow-xl scale-105' 
                  : 'border-bpspecs-taupe/30 hover:border-bpspecs-teal/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-bpspecs-teal text-bpspecs-off-white px-6 py-2 text-sm font-bold rounded-lg shadow-md">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-bpspecs-dark-charcoal">{plan.name}</h3>
                <p className="text-bpspecs-taupe mb-6 leading-relaxed">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-5xl font-bold text-bpspecs-dark-charcoal">${plan.price}</span>
                      <span className="text-bpspecs-taupe font-medium">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-bpspecs-dark-charcoal">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bpspecs-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-bpspecs-dark-charcoal font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-lg font-semibold py-3 transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white shadow-lg' 
                    : 'bg-transparent border-2 border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-bpspecs-off-white'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-bpspecs-taupe mb-8 font-medium uppercase tracking-wide">
            Trusted by entrepreneurs and business leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-lg font-bold text-bpspecs-dark-charcoal">StartupHub</div>
            <div className="text-lg font-bold text-bpspecs-dark-charcoal">VentureLab</div>
            <div className="text-lg font-bold text-bpspecs-dark-charcoal">BusinessPro</div>
            <div className="text-lg font-bold text-bpspecs-dark-charcoal">GrowthCorp</div>
            <div className="text-lg font-bold text-bpspecs-dark-charcoal">LaunchPad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
