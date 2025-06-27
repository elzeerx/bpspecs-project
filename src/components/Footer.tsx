
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bpspecs-dark-charcoal text-bpspecs-off-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fdffd92a-2efd-4e1f-8630-45984f00cbef.png" 
                  alt="BPSpecs Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-bold">BPSpecs</div>
                <div className="text-sm text-bpspecs-beige">A Recipe Group Company</div>
              </div>
            </div>
            <p className="text-bpspecs-beige mb-6 leading-relaxed">
              AI-powered business plan specification generator that transforms ideas into 
              comprehensive, investor-ready documentation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-6 text-bpspecs-off-white">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">API Documentation</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-6 text-bpspecs-off-white">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">About Recipe Group</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-6 text-bpspecs-off-white">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Contact Support</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Status Page</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">System Requirements</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bpspecs-taupe/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-bpspecs-beige mb-4 md:mb-0">
              © 2024 Recipe Group. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-bpspecs-beige hover:text-bpspecs-teal transition-colors duration-200">
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
