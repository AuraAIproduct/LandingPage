import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PropertyIcon, ContractIcon, ComplianceIcon } from './RealEstateIcons';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif"
          >
            Built From Real Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto font-light"
          >
            Piloted with real estate teams who know the inner workings of the entire process.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-12"
        >
          <motion.div 
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-8 hover-lift">
                <PropertyIcon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Real Estate Expertise</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Built from hands-on experience with every aspect of real estate operations, from lead management to closing deals.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-8 hover-lift">
                <ContractIcon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Integrates With Your Tools</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Connects to your CRM, email, calendar, MLS, and 20+ tools to automate workflows end‑to‑end.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 hover-lift">
                <ComplianceIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Purpose-Built Solution</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Atlas is designed specifically for real estate workflows, not adapted from generic business tools.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;