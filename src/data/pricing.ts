
export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
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
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
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
    buttonText: 'Get Started',
    popular: true,
  },
  {
    name: 'Team',
    price: '$79',
    period: '/month',
    description: 'Complete solution for teams and agencies',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'White-label export',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'Phone support',
      'Advanced analytics',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
];
