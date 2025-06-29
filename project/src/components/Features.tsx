import * as React from 'react';
import { Lock, Network, Database, Brain, Shield, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: "Total Privacy & Control",
      description: "Your sensitive data never leaves your secure perimeter. Aura deploys AI agents directly within your existing network, leveraging advanced privacy-preserving technologies like Federated Learning and Homomorphic Encryption.",
      highlight: "Privacy by Design",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-600"
    },
    {
      icon: Network,
      title: "Decentralized Intelligence",
      description: "Containerized agent network operates within your private infrastructure. Distributed architecture eliminates single points of failure and enables parallel processing for always-available, robust intelligence.",
      highlight: "Always Available",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "Multi-Modal Data Unification",
      description: "Ingest and process data from any enterprise source—databases, documents, emails, and audio recordings. Transform fragmented data into a unified, searchable knowledge base.",
      highlight: "Unified Data View",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      textColor: "text-purple-600"
    },
    {
      icon: Brain,
      title: "Semantic Intelligence",
      description: "Transform data into high-dimensional vector embeddings stored in your local vector database. Enable semantic search and complex analytical tasks with fine-tuned AI agents that understand context and meaning.",
      highlight: "Semantic Search",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Regulatory Ready",
      description: "Instant compliance with GDPR, HIPAA, and other stringent privacy standards. Central dashboard provides granular control over data processing, sharing, and privacy-preserving techniques applied to workflows.",
      highlight: "Compliance Ready",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
      textColor: "text-violet-600"
    },
    {
      icon: Cpu,
      title: "Zero Cloud Dependency",
      description: "Complete independence from external cloud services for sensitive data processing. Works offline, scales with your team, and ensures absolute control over your data and AI operations.",
      highlight: "Offline Operation",
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
            Unique Value Propositions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced capabilities designed specifically for enterprises that demand both intelligence and privacy.
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