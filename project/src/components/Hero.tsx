import React from 'react';
import { ArrowRight, Play, Shield, Sparkles, Zap, Target } from 'lucide-react';
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
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2306B6D4%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

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
              className="inline-flex items-center px-6 py-3 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-300 rounded-full text-sm font-medium shadow-lg"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Built from real estate family experience
            </motion.div>
            
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                Stop{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Losing Deals
                  </span>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  />
                </span>{' '}
                to Paperwork
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                I spent six years watching my parents lose time and money to administrative chaos. Atlas AI reads your documents, spots issues before they become problems, and keeps your deals moving forward.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                onClick={scrollToDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25"
              >
                <Zap className="mr-2 w-5 h-5" />
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/5 backdrop-blur-sm text-gray-300 px-10 py-5 rounded-2xl font-semibold text-lg border border-gray-600 hover:border-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </motion.a>
            </motion.div>
            
            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl font-bold text-white"
                >
                  5 min
                </motion.div>
                <div className="text-sm text-gray-400">Setup Time</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-4xl font-bold text-white"
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-400">Document Review</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-4xl font-bold text-white"
                >
                  $0
                </motion.div>
                <div className="text-sm text-gray-400">Setup Fee</div>
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