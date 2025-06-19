import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About the Cofounders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aura was founded by AI engineers, privacy advocates, and enterprise software veterans who believe business automation should be both intelligent and private.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/15 to-blue-600/15 backdrop-blur-sm rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Who We Are</h3>
            <p className="text-gray-300">
              AI engineers, privacy advocates, and enterprise software veterans who believe business automation should be both intelligent and private.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-500/15 to-purple-600/15 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-300">
              To build AI that works for you, not the cloud. We're passionate about privacy, obsessed with performance, and dedicated to making advanced AI accessible and secure.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 backdrop-blur-sm rounded-2xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
            <Award className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
            <p className="text-gray-300">
              Privacy by design, transparency in operation, and empowerment without compromise. Every decision we make prioritizes your data sovereignty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;