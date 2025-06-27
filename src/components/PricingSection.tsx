
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for trying out BPSpecs with your first business idea",
    features: [
      "3 business plans per month",
      "Basic AI templates",
      "PDF export",
      "Email support",
      "Community access"
    ],
    cta: "Start Free",
    popular: false,
    highlight: "No credit card required"
  },
  {
    name: "Pro",
    price: "29",
    period: "per month",
    description: "Ideal for entrepreneurs and small business owners",
    features: [
      "Unlimited business plans",
      "Advanced AI models",
      "All export formats",
      "Priority support",
      "Custom templates",
      "Version control",
      "Team sharing (up to 3 members)"
    ],
    cta: "Start Free Trial",
    popular: true,
    highlight: "Most popular choice"
  },
  {
    name: "Team",
    price: "79",
    period: "per month",
    description: "For consultants, accelerators, and growing teams",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced collaboration",
      "White-label reports",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    cta: "Start Free Trial",
    popular: false,
    highlight: "Best for teams"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-bpspecs-off-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bpspecs-dark-charcoal leading-tight">
            Simple Pricing,<br />
            <span className="text-gradient">Powerful Results</span>
          </h2>
          <p className="text-xl text-bpspecs-taupe mb-8 font-medium leading-relaxed">
            Start free and upgrade when you're ready. All paid plans include a 14-day free trial.
          </p>
          <div className="inline-flex items-center gap-2 bg-bpspecs-teal/10 text-bpspecs-teal px-4 py-2 rounded-full text-sm font-semibold">
            <Star className="w-4 h-4" />
            <span>Save 20% with annual billing</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-white rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-2 ${
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
                <h3 className="text-2xl font-bold mb-2 text-bpspecs-dark-charcoal">{plan.name}</h3>
                <p className="text-bpspecs-taupe mb-6 leading-relaxed text-sm">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-bpspecs-dark-charcoal">${plan.price}</span>
                  <span className="text-bpspecs-taupe font-medium">/{plan.period}</span>
                </div>
                <div className="text-sm text-bpspecs-teal font-semibold">{plan.highlight}</div>
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

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <p className="text-bpspecs-taupe mb-6">
            All plans include bank-level security, 99.9% uptime guarantee, and access to our business planning experts.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-bpspecs-taupe">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-bpspecs-teal" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-bpspecs-teal" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-bpspecs-teal" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
