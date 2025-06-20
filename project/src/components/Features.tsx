import * as React from 'react';
import { Network, GitMerge, Layers, Eye, Shield, Zap, Database, Lock, Settings, BarChart3, Cpu, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: "Hybrid Agent Network",
      description: "Combine local device agents with access to advanced, privacy-compliant cloud models—your team gets the best of both worlds without sacrificing control.",
      highlight: "Best of Both Worlds",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      textColor: "text-purple-600"
    },
    {
      icon: Settings,
      title: "Dynamic Privacy Control",
      description: "Instantly manage which agents and workflows use local resources or secure external processing, based on your data sensitivity and compliance needs.",
      highlight: "Real-time Control",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "Data Sovereignty",
      description: "Sensitive company data stays local by default; only non-sensitive tasks interact with external models.",
      highlight: "Local by Default",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Multi-level access controls, encryption standards, and a privacy dashboard for real-time oversight.",
      highlight: "Bank-Level Security",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
      textColor: "text-violet-600"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Built with financial regulations in mind, ensuring your AI workflows meet the strictest compliance requirements.",
      highlight: "Regulation Compliant",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      textColor: "text-blue-600"
    },
    {
      icon: GitMerge,
      title: "Dynamic Workflow Routing",
      description: "Seamlessly switch between local and external processing, always under your control with smart data routing decisions.",
      highlight: "Smart Routing",
      color: "from-purple-600 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      textColor: "text-purple-600"
    },
    {
      icon: Eye,
      title: "Real-Time Oversight",
      description: "Monitor agent activity and manage permissions with a unified dashboard providing complete visibility and granular controls.",
      highlight: "Complete Visibility",
      color: "from-indigo-600 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Cpu,
      title: "Local Processing Power",
      description: "Leverage your existing hardware for AI processing, reducing cloud dependency while maintaining high performance.",
      highlight: "Hardware Optimized",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-50 to-purple-50",
      textColor: "text-violet-600"
    }
  ];

  return (
    <section id="features" className="pt-20 pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Enterprise AI Without Compromise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced capabilities designed specifically for financial institutions that demand both intelligence and privacy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`group bg-gradient-to-br ${feature.bgColor} p-6 rounded-2xl border border-gray-800 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-semibold ${feature.textColor} bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full`}>
                    {feature.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;