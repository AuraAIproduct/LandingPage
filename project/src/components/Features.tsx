import * as React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            What Atlas Does
          </motion.h2>
        </motion.div>
        
        {/* Typing Animation Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={cardVariants}
            className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-xl shadow-2xl"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">atlas.ai</span>
              </div>
              
              <div className="min-h-[120px] flex items-start">
                <span className="text-green-400 mr-3 font-mono">$</span>
                <div className="flex-1">
                  <TypeAnimation
                    sequence={[
                      'Atlas is an AI copilot for real estate teams.',
                      800,
                      'Replaces fragmented tools with one intelligent app.',
                      800,
                      'Handles contracts, compliance, and client follow-ups.',
                      800,
                      'No more missed deadlines or compliance landmines.',
                      800,
                    ]}
                    wrapper="div"
                    speed={60}
                    deletionSpeed={80}
                    repeat={Infinity}
                    cursor={true}
                    cursorStyle="█"
                    className="text-white text-xl lg:text-2xl font-mono leading-relaxed"
                    style={{
                      minHeight: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start'
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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