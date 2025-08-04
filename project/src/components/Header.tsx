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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white tracking-tight">Atlas AI</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('demo-request')}
              className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors tracking-wide"
            >
              See Atlas in Action
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-3 text-sm text-gray-300 hover:text-white transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 text-sm text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('demo-request')}
              className="w-full bg-white text-black px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors mt-4"
            >
              See Atlas in Action
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;