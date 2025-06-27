
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Mail, Eye, EyeOff, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptPrivacy: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
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
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms of service';
    }
    
    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = 'You must accept the privacy policy';
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
      toast({
        title: "Account created successfully!",
        description: "Welcome to BPSpecs. Please check your email to verify your account.",
      });
    }, 1500);
  };

  const handleSocialSignup = (provider: 'google' | 'github') => {
    toast({
      title: `${provider === 'google' ? 'Google' : 'GitHub'} Signup`,
      description: "Social signup will be implemented with backend integration.",
    });
  };

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
          <h1 className="text-3xl font-bold text-bpspecs-dark-charcoal mb-2">Create Account</h1>
          <p className="text-bpspecs-taupe">Start building your business specifications today</p>
        </div>

        <Card className="border-bpspecs-taupe/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-bpspecs-dark-charcoal">Sign Up</CardTitle>
            <CardDescription className="text-bpspecs-taupe">
              Create your account to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Signup */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-12 border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
                onClick={() => handleSocialSignup('google')}
              >
                <Mail className="w-5 h-5 mr-3" />
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
                onClick={() => handleSocialSignup('github')}
              >
                <Github className="w-5 h-5 mr-3" />
                Sign up with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-bpspecs-taupe/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-bpspecs-taupe">Or sign up with email</span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-bpspecs-dark-charcoal">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`h-12 ${errors.fullName ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-bpspecs-dark-charcoal">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`h-12 ${errors.email ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-bpspecs-dark-charcoal">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
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
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
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

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, acceptTerms: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="terms" className="text-sm text-bpspecs-taupe leading-relaxed">
                      I agree to the{' '}
                      <Link to="/terms" className="text-bpspecs-teal hover:underline">
                        Terms of Service
                      </Link>
                    </Label>
                    {errors.acceptTerms && (
                      <p className="text-sm text-red-500 mt-1">{errors.acceptTerms}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.acceptPrivacy}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, acceptPrivacy: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="privacy" className="text-sm text-bpspecs-taupe leading-relaxed">
                      I agree to the{' '}
                      <Link to="/privacy" className="text-bpspecs-teal hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                    {errors.acceptPrivacy && (
                      <p className="text-sm text-red-500 mt-1">{errors.acceptPrivacy}</p>
                    )}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-white font-semibold"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-bpspecs-taupe">
                Already have an account?{' '}
                <Link to="/login" className="text-bpspecs-teal hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
