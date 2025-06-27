
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Lock, Check, X, Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if we have the required tokens from the URL
  useEffect(() => {
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    
    if (!accessToken || !refreshToken) {
      toast({
        title: "Invalid Reset Link",
        description: "This password reset link is invalid or has expired.",
        variant: "destructive",
      });
      navigate('/forgot-password');
    }
  }, [searchParams, navigate, toast]);

  // Password strength validation
  const validatePassword = (password: string) => {
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    const score = Object.values(checks).filter(Boolean).length;
    return { checks, score };
  };

  const { checks: passwordChecks, score: passwordScore } = validatePassword(password);

  const getPasswordStrength = () => {
    if (passwordScore < 3) return { label: 'Weak', color: 'text-red-500' };
    if (passwordScore < 5) return { label: 'Good', color: 'text-yellow-500' };
    return { label: 'Strong', color: 'text-green-500' };
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (passwordScore < 3) {
      newErrors.password = 'Password is too weak';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        toast({
          title: "Reset Failed",
          description: error.message,
          variant: "destructive",
        });
        setErrors({ general: error.message });
      } else {
        setIsCompleted(true);
        toast({
          title: "Password Updated",
          description: "Your password has been successfully updated.",
        });
        
        // Redirect to login after a short delay
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err: any) {
      toast({
        title: "Reset Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setErrors({ general: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const strength = getPasswordStrength();

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white to-bpspecs-beige/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-bpspecs-taupe/20 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-bpspecs-dark-charcoal mb-4">
                Password Updated!
              </h1>
              
              <p className="text-bpspecs-taupe mb-6">
                Your password has been successfully updated. You'll be redirected to the login page shortly.
              </p>
              
              <Button
                onClick={() => navigate('/login')}
                className="w-full bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-white"
              >
                Continue to Login
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white to-bpspecs-beige/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-6">
            <img 
              src="/lovable-uploads/ef90fafa-e4b6-4c2f-b1b1-eb84d638b33f.png" 
              alt="BPSpecs Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="text-2xl font-bold text-bpspecs-dark-charcoal">BPSpecs</div>
          </div>
          <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-2">Reset Password</h1>
          <p className="text-bpspecs-taupe">Enter your new password below</p>
        </div>

        <Card className="border-bpspecs-taupe/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-bpspecs-dark-charcoal">New Password</CardTitle>
            <CardDescription className="text-bpspecs-taupe">
              Choose a strong password for your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
                  {errors.general}
                </div>
              )}

              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-bpspecs-dark-charcoal">
                  New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bpspecs-taupe" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`h-12 pl-12 pr-12 ${errors.password ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-bpspecs-taupe hover:text-bpspecs-dark-charcoal"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {password && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            passwordScore < 3 ? 'bg-red-500' : 
                            passwordScore < 5 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${(passwordScore / 5) * 100}%` }}
                        />
                      </div>
                      <span className={`text-xs font-medium ${strength.color}`}>
                        {strength.label}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className={`flex items-center space-x-1 ${passwordChecks.length ? 'text-green-600' : 'text-gray-400'}`}>
                        {passwordChecks.length ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        <span>8+ characters</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordChecks.uppercase ? 'text-green-600' : 'text-gray-400'}`}>
                        {passwordChecks.uppercase ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        <span>Uppercase</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordChecks.lowercase ? 'text-green-600' : 'text-gray-400'}`}>
                        {passwordChecks.lowercase ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        <span>Lowercase</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordChecks.number ? 'text-green-600' : 'text-gray-400'}`}>
                        {passwordChecks.number ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        <span>Number</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-bpspecs-dark-charcoal">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bpspecs-taupe" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`h-12 pl-12 pr-12 ${errors.confirmPassword ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-bpspecs-taupe hover:text-bpspecs-dark-charcoal"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-white font-semibold"
                disabled={isLoading}
              >
                {isLoading ? 'Updating Password...' : 'Update Password'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
