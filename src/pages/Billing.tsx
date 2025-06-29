
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Download, Calendar, AlertCircle, Crown, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Billing = () => {
  const { user } = useAuth();
  const [currentPlan] = useState('free'); // This will be dynamic in Phase 6

  const plans = {
    free: { name: 'Free', price: '$0', color: 'bg-gray-100 text-gray-800' },
    plus: { name: 'Plus', price: '$29', color: 'bg-blue-100 text-blue-800' },
    pro: { name: 'Pro', price: '$79', color: 'bg-purple-100 text-purple-800' },
  };

  const usage = {
    plansGenerated: 2,
    plansLimit: 3,
    creditsUsed: 15,
    creditsLimit: 100,
  };

  const invoices = [
    {
      id: 'inv_001',
      date: '2024-01-15',
      amount: '$29.00',
      status: 'paid',
      plan: 'Plus',
    },
    // More invoices will be added in Phase 6
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
      <Header />
      
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-2">Billing & Subscription</h1>
          <p className="text-bpspecs-taupe">Manage your subscription, usage, and billing information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Current Plan
                  </span>
                  <Badge className={plans[currentPlan as keyof typeof plans].color}>
                    {plans[currentPlan as keyof typeof plans].name}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  You're currently on the {plans[currentPlan as keyof typeof plans].name} plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Monthly Cost</span>
                  <span className="font-semibold text-xl">
                    {plans[currentPlan as keyof typeof plans].price}/month
                  </span>
                </div>
                
                {currentPlan === 'free' ? (
                  <div className="space-y-3">
                    <div className="bg-bpspecs-beige/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-bpspecs-teal mt-0.5" />
                        <div>
                          <h4 className="font-medium text-bpspecs-dark-charcoal">Upgrade to Plus</h4>
                          <p className="text-sm text-bpspecs-taupe">
                            Unlock unlimited plans, advanced AI, and premium features for just $29/month.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive hover:from-bpspecs-teal/90 hover:to-bpspecs-olive/90">
                      Upgrade to Plus
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      Change Plan
                    </Button>
                    <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                      Cancel Subscription
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Usage Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Usage This Month
                </CardTitle>
                <CardDescription>
                  Track your usage against your plan limits
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Business Plans Generated</span>
                    <span className="text-sm text-bpspecs-taupe">
                      {usage.plansGenerated} / {usage.plansLimit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-bpspecs-teal to-bpspecs-olive h-2 rounded-full"
                      style={{ width: `${(usage.plansGenerated / usage.plansLimit) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">AI Credits Used</span>
                    <span className="text-sm text-bpspecs-taupe">
                      {usage.creditsUsed} / {usage.creditsLimit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-bpspecs-olive to-bpspecs-teal h-2 rounded-full"
                      style={{ width: `${(usage.creditsUsed / usage.creditsLimit) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Billing History
                </CardTitle>
                <CardDescription>
                  Download receipts and view past payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentPlan === 'free' ? (
                  <div className="text-center py-8 text-bpspecs-taupe">
                    <p>No billing history yet. Upgrade to a paid plan to see invoices here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {invoices.map((invoice) => (
                      <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-medium text-bpspecs-dark-charcoal">
                              {invoice.plan} Plan
                            </p>
                            <p className="text-sm text-bpspecs-taupe">
                              {new Date(invoice.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-semibold">{invoice.amount}</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {invoice.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentPlan === 'free' ? (
                  <p className="text-sm text-bpspecs-taupe">
                    No payment method required for free plan
                  </p>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CreditCard className="w-8 h-8 text-bpspecs-taupe" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-bpspecs-taupe">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Update Payment Method
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Download All Invoices
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Update Billing Info
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Billing;
