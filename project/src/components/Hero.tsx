import React from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NetworkAnimation from './NetworkAnimation';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-request');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20"
        >
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Built from real estate experience
            </motion.div>
            
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                Stop{' '}
                <span className="text-blue-400">
                  Losing Deals
                </span>{' '}
                to Paperwork
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Upload documents, get answers, close more deals.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                onClick={scrollToDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="mr-2 w-5 h-5" />
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white/5 text-gray-300 px-10 py-5 rounded-xl font-semibold text-lg border border-gray-600 hover:border-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </motion.a>
            </motion.div>
            
            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">5 min</div>
                <div className="text-sm text-gray-400">Setup</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Review</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">$0</div>
                <div className="text-sm text-gray-400">Setup</div>
              </div>
            </motion.div>
          </div>
          
          {/* Network Animation */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <NetworkAnimation />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;