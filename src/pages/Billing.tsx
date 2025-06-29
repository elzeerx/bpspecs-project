
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Download, Calendar, AlertCircle, CheckCircle, Crown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Billing = () => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Mock subscription data - will be replaced with real data in Phase 6
  const currentPlan = {
    name: 'Free',
    price: '$0',
    period: 'month',
    status: 'active',
    renewsOn: '2024-07-29',
    creditsUsed: profile?.credits_used_this_month || 0,
    creditsTotal: 3
  };

  const handleUpgrade = async (planName: string) => {
    setIsLoading(true);
    // TODO: Implement PayPal integration in Phase 6
    console.log(`Upgrading to ${planName}`);
    setIsLoading(false);
  };

  const handleDownloadInvoice = () => {
    // TODO: Implement invoice download
    console.log('Download invoice');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
      <Header />
      
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-2">Billing & Subscription</h1>
          <p className="text-bpspecs-taupe">Manage your subscription and billing information</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Current Plan */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Current Plan
                  </span>
                  <Badge className={`${
                    currentPlan.status === 'active' 
                      ? 'bg-green-100 text-green-800 border-green-200' 
                      : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                  }`}>
                    {currentPlan.status}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  You are currently on the {currentPlan.name} plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-bpspecs-dark-charcoal">
                      {currentPlan.name} Plan
                    </div>
                    <div className="text-bpspecs-taupe">
                      {currentPlan.price}/{currentPlan.period}
                    </div>
                  </div>
                  {currentPlan.name !== 'Free' && (
                    <div className="text-right">
                      <div className="text-sm text-bpspecs-taupe">Renews on</div>
                      <div className="font-medium text-bpspecs-dark-charcoal">
                        {new Date(currentPlan.renewsOn).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </div>

                {/* Usage */}
                <div className="bg-bpspecs-beige/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-bpspecs-dark-charcoal">
                      Credits Used This Month
                    </span>
                    <span className="text-sm text-bpspecs-taupe">
                      {currentPlan.creditsUsed} of {currentPlan.creditsTotal}
                    </span>
                  </div>
                  <div className="w-full bg-bpspecs-taupe/20 rounded-full h-2">
                    <div 
                      className="bg-bpspecs-teal h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentPlan.creditsUsed / currentPlan.creditsTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {currentPlan.name === 'Free' && (
                  <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-yellow-800">
                      Upgrade to Pro for unlimited business plans and advanced features
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Available Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Available Plans</CardTitle>
                <CardDescription>
                  Choose the plan that best fits your needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold text-bpspecs-dark-charcoal">Pro Plan</div>
                        <div className="text-2xl font-bold text-bpspecs-teal">$29<span className="text-sm text-bpspecs-taupe">/month</span></div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-bpspecs-teal" />
                    </div>
                    <ul className="space-y-1 text-sm text-bpspecs-taupe mb-4">
                      <li>• Unlimited business plans</li>
                      <li>• Advanced AI analysis</li>
                      <li>• All export formats</li>
                      <li>• Priority support</li>
                    </ul>
                    <Button 
                      onClick={() => handleUpgrade('Pro')}
                      disabled={isLoading}
                      className="w-full bg-bpspecs-teal hover:bg-bpspecs-teal/90"
                    >
                      {currentPlan.name === 'Pro' ? 'Current Plan' : 'Upgrade to Pro'}
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold text-bpspecs-dark-charcoal">Team Plan</div>
                        <div className="text-2xl font-bold text-bpspecs-olive">$79<span className="text-sm text-bpspecs-taupe">/month</span></div>
                      </div>
                      <Crown className="w-5 h-5 text-bpspecs-olive" />
                    </div>
                    <ul className="space-y-1 text-sm text-bpspecs-taupe mb-4">
                      <li>• Everything in Pro</li>
                      <li>• Team collaboration</li>
                      <li>• White-label export</li>
                      <li>• API access</li>
                    </ul>
                    <Button 
                      onClick={() => handleUpgrade('Team')}
                      disabled={isLoading}
                      variant="outline"
                      className="w-full border-bpspecs-olive text-bpspecs-olive hover:bg-bpspecs-olive hover:text-white"
                    >
                      {currentPlan.name === 'Team' ? 'Current Plan' : 'Upgrade to Team'}
                    </Button>
                  </div>
                </div>
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
                {currentPlan.name === 'Free' ? (
                  <p className="text-bpspecs-taupe text-sm">
                    No payment method required for the Free plan.
                  </p>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CreditCard className="w-4 h-4 text-bpspecs-taupe" />
                      <div className="flex-1">
                        <div className="font-medium text-bpspecs-dark-charcoal">•••• 4242</div>
                        <div className="text-sm text-bpspecs-taupe">Expires 12/25</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Update Payment Method
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Billing History
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentPlan.name === 'Free' ? (
                  <p className="text-bpspecs-taupe text-sm">
                    No billing history for Free plans.
                  </p>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-bpspecs-dark-charcoal">June 2024</div>
                        <div className="text-sm text-bpspecs-taupe">Pro Plan</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-bpspecs-dark-charcoal">$29.00</div>
                        <Button 
                          onClick={handleDownloadInvoice}
                          variant="ghost" 
                          size="sm"
                          className="h-auto p-0 text-bpspecs-teal hover:text-bpspecs-teal/80"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Invoice
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-bpspecs-taupe mb-4">
                  Have questions about billing or need to make changes to your subscription?
                </p>
                <Button 
                  onClick={() => navigate('/about')}
                  variant="outline" 
                  className="w-full"
                >
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
