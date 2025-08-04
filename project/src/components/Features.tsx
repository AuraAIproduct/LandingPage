import * as React from 'react';
import { Lock, Network, Database, Brain, Shield, Cpu, FileText, Mail, Building2, Calculator, Users, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Analysis & Compliance",
      description: "Automatically analyze real estate contracts, purchase agreements, and legal documents. Check TRID, RESPA, and state-specific compliance requirements with AI-powered accuracy.",
      highlight: "Smart Compliance",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Lead Management & Communication",
      description: "Integrate with Gmail and CRM systems to automatically track leads, schedule follow-ups, and manage client communications. AI analyzes email content for intent and urgency.",
      highlight: "Smart Communication",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "Market Data Integration",
      description: "Connect to MLS databases, property listings, and market analytics. Atlas AI processes and analyzes market trends, comparable sales, and property valuations in real-time.",
      highlight: "Real-time Data",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      textColor: "text-purple-600"
    },
    {
      icon: Building2,
      title: "Property Intelligence",
      description: "Generate detailed property reports, neighborhood analysis, and investment insights. Atlas AI combines multiple data sources to provide comprehensive property intelligence.",
      highlight: "Property Insights",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Calculator,
      title: "Financial Analysis & Calculations",
      description: "Automate mortgage calculations, ROI analysis, and investment modeling. Atlas AI handles complex financial scenarios and provides detailed breakdowns for clients.",
      highlight: "Smart Calculations",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
      textColor: "text-violet-600"
    },
    {
      icon: Users,
      title: "Client Relationship Management",
      description: "Track client interactions, preferences, and transaction history. Atlas AI provides personalized recommendations and automates follow-up sequences based on client behavior.",
      highlight: "Client Focused",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      textColor: "text-emerald-600"
    }
  ];

  return (
    <section id="features" className="pt-32 pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real Estate AI Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI features designed specifically for real estate professionals who demand both intelligence and privacy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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