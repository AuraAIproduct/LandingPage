import React, { useState } from 'react';
import { Download, Users, GitBranch, BarChart3, ArrowRight, Cpu, Shield, Settings, Network, FileText, Mail, Building2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: FileText,
      title: "Upload Real Estate Documents",
      details: "Upload contracts, purchase agreements, and legal documents to Atlas. The AI automatically analyzes document structure and extracts key information for compliance checking and processing.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "AI Analysis & Compliance Check",
      details: "Atlas runs comprehensive TRID, RESPA, and state-specific compliance checks. The AI identifies potential issues, calculates transfer taxes, and validates document integrity automatically.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Mail,
      title: "Lead Management & Communication",
      details: "Integrate with Gmail and CRM systems to track leads, schedule follow-ups, and manage client communications. Atlas analyzes email content and provides intelligent recommendations.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Building2,
      title: "Property Intelligence & Reports",
      details: "Generate detailed property reports, market analysis, and investment insights. Atlas combines MLS data, market trends, and property valuations to provide comprehensive intelligence.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How Atlas Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple document upload, intelligent analysis, complete automation—get your real estate AI assistant running in minutes.
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
                        {step.details}
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