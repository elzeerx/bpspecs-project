
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Check, X, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validatePassword = (password: string) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    return requirements;
  };

  const passwordRequirements = validatePassword(formData.password);
  const isPasswordStrong = Object.values(passwordRequirements).every(Boolean);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isPasswordStrong) {
      newErrors.password = 'Password does not meet all requirements';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsCompleted(true);
      toast({
        title: "Password reset successful!",
        description: "Your password has been updated successfully.",
      });
    }, 1500);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bpspecs-off-white to-bpspecs-beige/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/ef90fafa-e4b6-4c2f-b1b1-eb84d638b33f.png" 
                alt="BPSpecs Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="text-2xl font-bold text-bpspecs-dark-charcoal">BPSpecs</div>
            </Link>
          </div>

          <Card className="border-bpspecs-taupe/20 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-bpspecs-dark-charcoal mb-4">
                Password Reset Complete
              </h1>
              
              <p className="text-bpspecs-taupe mb-6 leading-relaxed">
                Your password has been successfully updated. You can now sign in with your new password.
              </p>
              
              <Link to="/login">
                <Button className="w-full h-12 bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-white font-semibold">
                  Sign In to Your Account
                </Button>
              </Link>
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
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <img 
              src="/lovable-uploads/ef90fafa-e4b6-4c2f-b1b1-eb84d638b33f.png" 
              alt="BPSpecs Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="text-2xl font-bold text-bpspecs-dark-charcoal">BPSpecs</div>
          </Link>
          <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-2">Reset Password</h1>
          <p className="text-bpspecs-taupe">Create a new password for your account</p>
        </div>

        <Card className="border-bpspecs-taupe/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-bpspecs-dark-charcoal">New Password</CardTitle>
            <CardDescription className="text-bpspecs-taupe">
              Choose a strong password to secure your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-bpspecs-dark-charcoal">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a new password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`h-12 pr-12 ${errors.password ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-bpspecs-taupe hover:text-bpspecs-dark-charcoal"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="space-y-2 p-3 bg-bpspecs-beige/30 rounded-lg">
                    <p className="text-xs font-medium text-bpspecs-dark-charcoal">Password Requirements:</p>
                    <div className="grid grid-cols-1 gap-1 text-xs">
                      <div className={`flex items-center gap-2 ${passwordRequirements.length ? 'text-green-600' : 'text-bpspecs-taupe'}`}>
                        {passwordRequirements.length ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        At least 8 characters
                      </div>
                      <div className={`flex items-center gap-2 ${passwordRequirements.uppercase ? 'text-green-600' : 'text-bpspecs-taupe'}`}>
                        {passwordRequirements.uppercase ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        One uppercase letter
                      </div>
                      <div className={`flex items-center gap-2 ${passwordRequirements.lowercase ? 'text-green-600' : 'text-bpspecs-taupe'}`}>
                        {passwordRequirements.lowercase ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        One lowercase letter
                      </div>
                      <div className={`flex items-center gap-2 ${passwordRequirements.number ? 'text-green-600' : 'text-bpspecs-taupe'}`}>
                        {passwordRequirements.number ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        One number
                      </div>
                      <div className={`flex items-center gap-2 ${passwordRequirements.special ? 'text-green-600' : 'text-bpspecs-taupe'}`}>
                        {passwordRequirements.special ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        One special character
                      </div>
                    </div>
                  </div>
                )}
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-bpspecs-dark-charcoal">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your new password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className={`h-12 pr-12 ${errors.confirmPassword ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-bpspecs-taupe hover:text-bpspecs-dark-charcoal"
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

            <div className="text-center">
              <Link
                to="/login"
                className="text-bpspecs-teal hover:underline font-medium"
              >
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
