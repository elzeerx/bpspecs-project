
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { profile } = useProfile();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    setIsMenuOpen(false);
  };

  // Don't show header on authenticated dashboard pages
  if (user && (location.pathname === '/' || location.pathname.startsWith('/create-project'))) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-bpspecs-off-white/90 backdrop-blur-sm border-b border-bpspecs-taupe/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to={user ? "/" : "/landing"} className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ef90fafa-e4b6-4c2f-b1b1-eb84d638b33f.png" 
                alt="BPSpecs Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold text-bpspecs-dark-charcoal tracking-tight">
                BPSpecs
              </div>
              <div className="text-xs text-bpspecs-taupe font-medium">
                by Recipe Group
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!user ? (
              <>
                <a href="#features" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
                  Features
                </a>
                <Link to="/pricing" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
                  Pricing
                </Link>
                <Link to="/about" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
                  About
                </Link>
                <a href="#contact" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/projects" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
                  Projects
                </Link>
                <Link to="/billing" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
                  Billing
                </Link>
              </>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-bpspecs-dark-charcoal">
                  <User className="w-4 h-4" />
                  <span>{profile?.full_name || user.email}</span>
                </div>
                <Link to="/settings">
                  <Button variant="ghost" size="sm" className="text-bpspecs-dark-charcoal hover:text-bpspecs-teal hover:bg-bpspecs-beige/30">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </Link>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  size="sm"
                  className="text-bpspecs-dark-charcoal hover:text-bpspecs-teal hover:bg-bpspecs-beige/30"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-bpspecs-dark-charcoal hover:text-bpspecs-teal hover:bg-bpspecs-beige/30">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={handleGetStarted}>
                  <Button size="sm" className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white font-medium px-6 py-2 rounded-lg shadow-sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-bpspecs-taupe/20 py-6 bg-bpspecs-off-white">
            <nav className="flex flex-col space-y-4">
              {!user ? (
                <>
                  <a 
                    href="#features" 
                    className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <Link 
                    to="/pricing" 
                    className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <a 
                    href="#contact" 
                    className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link 
                    to="/projects" 
                    className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link 
                    to="/billing" 
                    className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Billing
                  </Link>
                </>
              )}
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-bpspecs-taupe/20">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 text-sm text-bpspecs-dark-charcoal py-2">
                      <User className="w-4 h-4" />
                      <span>{profile?.full_name || user.email}</span>
                    </div>
                    <Link to="/settings" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-bpspecs-dark-charcoal hover:text-bpspecs-teal"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                    </Link>
                    <Button
                      onClick={handleSignOut}
                      variant="ghost"
                      size="sm"
                      className="justify-start text-bpspecs-dark-charcoal hover:text-bpspecs-teal"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="justify-start text-bpspecs-dark-charcoal hover:text-bpspecs-teal">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={handleGetStarted}>
                      <Button size="sm" className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white justify-start rounded-lg">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
