import * as React from 'react';
import { Lock, Network, Database, Brain, Shield, Cpu, FileText, Mail, Building2, Calculator, Users, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Reads Your Contracts",
      description: "Upload any contract and it finds the deadlines, contingencies, and gotchas that could kill your deal. No more missing important dates buried in page 47.",
      highlight: "Saves Deals",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Tracks Your Leads",
      description: "Connects to your Gmail and CRM to automatically follow up with prospects. Knows when someone's serious vs just window shopping.",
      highlight: "Never Miss a Lead",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "Checks Your Comps",
      description: "Pulls MLS data to verify your pricing is competitive. Shows you exactly why a property is worth what you're asking.",
      highlight: "Price Right",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      textColor: "text-purple-600"
    },
    {
      icon: Building2,
      title: "Spots Red Flags",
      description: "Analyzes property reports and finds issues before they become problems. Foundation cracks, title issues, zoning problems—it catches what you might miss.",
      highlight: "Avoid Disasters",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Calculator,
      title: "Does Your Math",
      description: "Calculates mortgage payments, ROI, and cash flow automatically. No more spreadsheet errors that could cost you thousands.",
      highlight: "No Math Mistakes",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
      textColor: "text-violet-600"
    },
    {
      icon: Users,
      title: "Remembers Everything",
      description: "Keeps track of client preferences, past conversations, and deal history. Never ask a client the same question twice.",
      highlight: "Personal Touch",
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
            What It Actually Does
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No marketing fluff—here's what it actually does to help you close more deals.
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