import React from 'react';
import { ArrowRight, Play, Shield } from 'lucide-react';
import NetworkAnimation from './NetworkAnimation';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-request');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2306B6D4%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Glassmorphism Panel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5 rounded-3xl"></div>
            <div className="relative p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    <Shield className="w-4 h-4 mr-2" />
                    Enterprise-Grade AI Intelligence. Zero Data Compromise.
                  </div>
                  
                  <div className="space-y-8">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                      Deploy{' '}
                      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Private AI
                      </span>{' '}
                      Across Your Enterprise Infrastructure
                    </h1>
                    
                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                      Transform your organization's data into actionable intelligence while maintaining complete sovereignty. Our on-premises AI platform delivers enterprise-grade insights without compromising security or compliance.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={scrollToDemo}
                      className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                    >
                      Schedule Enterprise Demo
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <a 
                      href="https://docs.google.com/presentation/d/1oVor9xozqoCZ_bbSmVy8zMgH8CgfumEpkQanhbGOntU/edit?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-white/5 backdrop-blur-sm text-gray-300 px-10 py-5 rounded-xl font-semibold text-lg border border-gray-600 hover:border-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      <Play className="mr-2 w-5 h-5" />
                      View Pitch Deck
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-12 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-400">Data Sovereignty</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">Enterprise</div>
                      <div className="text-sm text-gray-400">Ready</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">SOC2</div>
                      <div className="text-sm text-gray-400">Certified</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <NetworkAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;