import React from 'react';
import { FileText, Building2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
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
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Built From Real Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            I spent six years working alongside my parents as they built their residential real estate brokerage from scratch. I saw firsthand how much time and money was lost to administrative chaos — chasing documents, following up with leads, handling compliance, and trying to keep dozens of systems in sync.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-8 bg-blue-500/10 backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">The Unofficial Assistant</h3>
              <p className="text-gray-300 leading-relaxed">
                I was the unofficial assistant doing everything from scheduling to helping review contracts and even cold calling. Over time I saw exactly what slowed the business down and what could be automated.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-8 bg-cyan-500/10 backdrop-blur-sm rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Why Existing Tools Failed</h3>
              <p className="text-gray-300 leading-relaxed">
                I saw them test several AI tools, but they all failed in real-world usage because they were built generically and didn't understand how real estate agents actually work.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-8 bg-indigo-500/10 backdrop-blur-sm rounded-3xl border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Built for Real Agents</h3>
              <p className="text-gray-300 leading-relaxed">
                So I built something that actually understands real estate workflows. No fancy buzzwords, no overpromising—just tools that help you close more deals with less stress.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;