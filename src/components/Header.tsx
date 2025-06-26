
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-lovable-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-semibold text-lovable-gray-900">
              BPSpecs
            </div>
            <div className="ml-2 text-sm text-lovable-gray-500">
              by Recipe Group
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-lovable-gray-700 hover:text-lovable-purple">
              Sign In
            </Button>
            <Button size="sm" className="bg-lovable-purple hover:bg-lovable-purple-dark text-white rounded-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-lovable-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-lovable-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-lovable-gray-700 hover:text-lovable-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-lovable-gray-200">
                <Button variant="ghost" size="sm" className="justify-start text-lovable-gray-700">
                  Sign In
                </Button>
                <Button size="sm" className="bg-lovable-purple hover:bg-lovable-purple-dark text-white justify-start rounded-lg">
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
