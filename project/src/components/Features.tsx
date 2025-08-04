import * as React from 'react';
import { ArrowRight } from 'lucide-react';
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
        ease: "easeOut" as const,
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
            className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
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
            className="relative bg-white/5 border border-white/20 p-12"
          >
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
                    wrapper="span"
                    speed={60}
                    deletionSpeed={80}
                    repeat={Infinity}
                    cursor={true}
                    className="text-white text-xl lg:text-2xl font-mono leading-relaxed inline-block"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;