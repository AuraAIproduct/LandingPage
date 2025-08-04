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
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={cardVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-16 backdrop-blur-sm"
          >
            <div className="h-24 flex items-center justify-start">
              <div className="text-2xl lg:text-3xl text-white font-mono leading-relaxed">
                <TypeAnimation
                  sequence={[
                    'Atlas is an AI copilot for real estate teams.',
                    1000,
                    'Replaces fragmented tools with one intelligent app.',
                    1000,
                    'Handles contracts, compliance, and client follow-ups.',
                    1000,
                    'No more missed deadlines or compliance landmines.',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  cursorStyle="|"
                  className="text-blue-400"
                />
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