
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-bpspecs-off-white/90 backdrop-blur-sm border-b border-bpspecs-taupe/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-bpspecs-dark-charcoal hover:text-bpspecs-teal hover:bg-bpspecs-beige/30">
              Sign In
            </Button>
            <Button size="sm" className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white font-medium px-6 py-2 rounded-lg shadow-sm">
              Get Started
            </Button>
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
              <a 
                href="#features" 
                className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-bpspecs-dark-charcoal hover:text-bpspecs-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-bpspecs-taupe/20">
                <Button variant="ghost" size="sm" className="justify-start text-bpspecs-dark-charcoal hover:text-bpspecs-teal">
                  Sign In
                </Button>
                <Button size="sm" className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white justify-start rounded-lg">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
