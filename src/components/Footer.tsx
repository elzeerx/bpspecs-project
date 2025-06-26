
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lovable-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-lg font-semibold mb-1">BPSpecs</div>
              <div className="text-sm text-lovable-gray-400">A Recipe Group Company</div>
            </div>
            <p className="text-lovable-gray-400 mb-6 leading-relaxed">
              AI-powered business plan specification generator that transforms ideas into 
              comprehensive, investor-ready documentation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">About Recipe Group</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Status Page</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">System Requirements</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lovable-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-lovable-gray-400 mb-4 md:mb-0">
              © 2024 Recipe Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-lovable-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
