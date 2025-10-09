import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, Menu, X, Play, Presentation } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }
    
    // If we're on the home page, scroll to the section
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
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-teal-600 flex items-center justify-center rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
            <span className="text-lg font-semibold text-white tracking-tight">Atlas AI</span>
          </Link>
          
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
            <Link 
              to="/videos"
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide flex items-center"
            >
              <Play className="w-4 h-4 mr-1" />
              Videos
            </Link>
            <Link 
              to="/pitch-deck"
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide flex items-center"
            >
              <Presentation className="w-4 h-4 mr-1" />
              Pitch Deck
            </Link>
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
            <Link 
              to="/videos"
              className="block w-full text-left py-3 text-sm text-gray-300 hover:text-white transition-colors font-medium flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Play className="w-4 h-4 mr-2" />
              Videos
            </Link>
            <Link 
              to="/pitch-deck"
              className="block w-full text-left py-3 text-sm text-gray-300 hover:text-white transition-colors font-medium flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Presentation className="w-4 h-4 mr-2" />
              Pitch Deck
            </Link>
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