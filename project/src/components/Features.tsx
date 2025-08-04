import * as React from 'react';
import { FileText, Mail, Building2, Calculator, ArrowRight, CheckCircle } from 'lucide-react';
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
      description: "Finds deadlines, contingencies, and gotchas that could kill your deal.",
      step: "1. Upload",
      color: "bg-blue-600",
      iconColor: "text-blue-400"
    },
    {
      icon: Mail,
      title: "Tracks Your Leads",
      description: "Connects to your Gmail and CRM to automatically follow up with prospects.",
      step: "2. Analyze",
      color: "bg-cyan-600",
      iconColor: "text-cyan-400"
    },
    {
      icon: Building2,
      title: "Spots Red Flags",
      description: "Analyzes property reports and finds issues before they become problems.",
      step: "3. Alert",
      color: "bg-indigo-600",
      iconColor: "text-indigo-400"
    },
    {
      icon: Calculator,
      title: "Does Your Math",
      description: "Calculates mortgage payments, ROI, and cash flow automatically.",
      step: "4. Calculate",
      color: "bg-green-600",
      iconColor: "text-green-400"
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
    <section id="features" className="pt-32 pb-12 bg-black">
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
            What It Does
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Upload documents, get answers, close more deals.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-8 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 rounded-xl"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                    </motion.div>
                    <span className={`text-xs font-semibold ${feature.iconColor} bg-white/10 px-3 py-1 rounded-full border border-white/20`}>
                      {feature.step}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* Arrow to next step */}
                {index < features.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
                  >
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div 
            variants={cardVariants}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Ready to Stop Losing Deals?
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;