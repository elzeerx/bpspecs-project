
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, Lock, User, Github, Shield, Check, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { signUp, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

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

  const { checks: passwordChecks, score: passwordScore } = validatePassword(formData.password);

  const getPasswordStrength = () => {
    if (passwordScore < 3) return { label: 'Weak', color: 'text-red-500' };
    if (passwordScore < 5) return { label: 'Good', color: 'text-yellow-500' };
    return { label: 'Strong', color: 'text-green-500' };
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (passwordScore < 3) {
      newErrors.password = 'Password is too weak';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    if (!acceptPrivacy) {
      newErrors.privacy = 'You must accept the privacy policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    const { error } = await signUp(formData.email, formData.password, formData.fullName);
    
    if (error) {
      setErrors({ general: error.message });
    }
    
    setIsLoading(false);
  };

  const handleGoogleSignUp = () => {
    // TODO: Implement Google OAuth
    console.log('Google sign up clicked');
  };

  const handleGitHubSignUp = () => {
    // TODO: Implement GitHub OAuth
    console.log('GitHub sign up clicked');
  };

  const strength = getPasswordStrength();

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
          <p className="text-bpspecs-taupe">Join thousands of entrepreneurs building better business plans</p>
        </div>

        <Card className="border-bpspecs-taupe/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-bpspecs-dark-charcoal">Sign Up</CardTitle>
            <CardDescription className="text-bpspecs-taupe">
              Create your account to get started with BPSpecs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Sign Up Buttons */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignUp}
                className="w-full h-12 border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
                disabled={isLoading}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={handleGitHubSignUp}
                className="w-full h-12 border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
                disabled={isLoading}
              >
                <Github className="w-5 h-5 mr-3" />
                Sign up with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-bpspecs-taupe">Or sign up with email</span>
              </div>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
                  {errors.general}
                </div>
              )}

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-bpspecs-dark-charcoal">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bpspecs-taupe" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`h-12 pl-12 ${errors.fullName ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-bpspecs-dark-charcoal">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bpspecs-taupe" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`h-12 pl-12 ${errors.email ? 'border-red-500' : 'border-bpspecs-taupe/30'}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-bpspecs-dark-charcoal">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bpspecs-taupe" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
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
                {formData.password && (
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
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bpspecs-taupe" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
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

              {/* Terms and Privacy */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 text-bpspecs-teal border-bpspecs-taupe/30 rounded focus:ring-bpspecs-teal mt-0.5"
                    disabled={isLoading}
                  />
                  <Label htmlFor="terms" className="text-sm text-bpspecs-taupe leading-relaxed">
                    I agree to the{' '}
                    <Link to="/terms" className="text-bpspecs-teal hover:underline font-medium">
                      Terms and Conditions
                    </Link>
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500">{errors.terms}</p>
                )}
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="w-4 h-4 text-bpspecs-teal border-bpspecs-taupe/30 rounded focus:ring-bpspecs-teal mt-0.5"
                    disabled={isLoading}
                  />
                  <Label htmlFor="privacy" className="text-sm text-bpspecs-taupe leading-relaxed">
                    I agree to the{' '}
                    <Link to="/privacy" className="text-bpspecs-teal hover:underline font-medium">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                {errors.privacy && (
                  <p className="text-sm text-red-500">{errors.privacy}</p>
                )}
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
