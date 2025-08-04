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
            Piloted with real estate teams who know the inner workings of the entire process.
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
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative p-8 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 rounded-xl"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Deep Process Knowledge</h3>
              <p className="text-gray-300 leading-relaxed">
                Worked through every aspect of real estate operations, from scheduling to contract review.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative p-8 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 rounded-xl"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Why Existing Tools Failed</h3>
              <p className="text-gray-300 leading-relaxed">
                Tested multiple AI tools that failed in real-world usage due to generic approaches.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative p-8 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 rounded-xl"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Built for Real Agents</h3>
              <p className="text-gray-300 leading-relaxed">
                Created tools that actually understand real estate workflows and agent needs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;