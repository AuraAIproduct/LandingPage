import React from 'react';
import { Shield, Linkedin, Twitter, Github, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Shield className="w-8 h-8 text-purple-400" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold">Aura</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Intelligence Uncompromised. Privacy Unmatched. The hybrid AI agent network designed for enterprises that demand both advanced capabilities and complete data sovereignty.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/arnav-arora-12a280189/" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/AuraAIproduct" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                hello@aura.ai
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                +1 (470) 747-9488
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-900/50 text-white px-3 py-2 rounded-l-lg flex-1 text-sm border border-gray-700 focus:border-purple-400 focus:outline-none placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
            <span>© 2024 Aura. All rights reserved.</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">SOC 2 Certified</span>
            <div className="w-px h-4 bg-gray-700"></div>
            <span className="text-sm text-gray-400">ISO 27001</span>
            <div className="w-px h-4 bg-gray-700"></div>
            <span className="text-sm text-gray-400">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;