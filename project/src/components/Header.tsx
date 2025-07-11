import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-2">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="w-8 h-8 text-purple-400" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold text-white">Aura</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('demo-request')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Request Demo
            </button>
          </nav>

          <button 
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('demo-request')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg mt-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;