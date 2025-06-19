import React, { useState } from 'react';
import { Download, Users, GitBranch, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: Download,
      title: "Install & Connect",
      description: "Every device becomes a node in your secure agent network, ready to automate and collaborate.",
      details: "Deploy Aura agents across your organization's devices in minutes. Each installation creates a secure node that can process data locally while maintaining connection to your private network.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Choose Your Agents",
      description: "Start with essential finance workflows—expand or import new ones as needed.",
      details: "Begin with pre-built agents for accounting, compliance, reporting, and risk management. Customize workflows or import specialized agents as your needs evolve.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: GitBranch,
      title: "Hybrid Orchestration",
      description: "Local agents handle sensitive data; cloud-based agents assist where needed, with no direct access to confidential information.",
      details: "Smart routing ensures sensitive financial data never leaves your premises while leveraging cloud capabilities for non-sensitive computational tasks.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Privacy Dashboard",
      description: "Visual interface to manage agent permissions, workflow routing, and data sharing in real time.",
      details: "Monitor all agent activity, set data sensitivity levels, and control which workflows can access external resources—all from a unified dashboard.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How Aura Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple deployment, powerful automation, complete control—get your hybrid AI network running in hours, not months.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-white/10 backdrop-blur-sm shadow-lg shadow-blue-500/20 border border-blue-500/30' 
                      : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-gray-800'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {step.description}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeStep === index ? 'rotate-90 text-blue-400' : ''
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${steps[activeStep].color} rounded-lg flex items-center justify-center`}>
                    {React.createElement(steps[activeStep].icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {steps[activeStep].details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;