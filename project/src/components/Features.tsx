import * as React from 'react';
import { Lock, Network, Database, Brain, Shield, Cpu, FileText, Mail, Building2, Calculator, Users, CheckCircle, Sparkles, Zap, Target, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FileText,
      title: "Reads Your Contracts",
      description: "Upload any contract and it finds the deadlines, contingencies, and gotchas that could kill your deal. I watched my parents miss important dates buried in page 47 of contracts.",
      highlight: "Saves Deals",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400"
    },
    {
      icon: Mail,
      title: "Tracks Your Leads",
      description: "Connects to your Gmail and CRM to automatically follow up with prospects. Knows when someone's serious vs just window shopping based on real patterns I observed.",
      highlight: "Never Miss a Lead",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Database,
      title: "Checks Your Comps",
      description: "Pulls MLS data to verify your pricing is competitive. Shows you exactly why a property is worth what you're asking, based on real market data.",
      highlight: "Price Right",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-500/10 to-indigo-500/10",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: Building2,
      title: "Spots Red Flags",
      description: "Analyzes property reports and finds issues before they become problems. Foundation cracks, title issues, zoning problems—it catches what I saw agents miss all the time.",
      highlight: "Avoid Disasters",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: Calculator,
      title: "Does Your Math",
      description: "Calculates mortgage payments, ROI, and cash flow automatically. No more spreadsheet errors that could cost you thousands—I saw this happen too many times.",
      highlight: "No Math Mistakes",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-500/10 to-purple-500/10",
      borderColor: "border-violet-500/20",
      iconColor: "text-violet-400"
    },
    {
      icon: Users,
      title: "Remembers Everything",
      description: "Keeps track of client preferences, past conversations, and deal history. Never ask a client the same question twice—builds trust and saves time.",
      highlight: "Personal Touch",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20",
      iconColor: "text-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="pt-32 pb-12 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            What It Actually Does
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            No marketing fluff—here's what it actually does to help you close more deals, based on real problems I saw agents face every day.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgColor} border ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 backdrop-blur-sm overflow-hidden`}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Particles */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"
                />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                    </motion.div>
                    <span className={`text-xs font-semibold ${feature.iconColor} bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20`}>
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;