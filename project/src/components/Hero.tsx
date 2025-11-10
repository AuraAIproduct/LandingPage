import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NetworkAnimation from './NetworkAnimation';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentPainPoint, setCurrentPainPoint] = React.useState(0);

  const painPoints = [
    'no contact in 7 days.',
    'unseen emails.',
    'stalled escrow.',
    'cold comp set.',
    'lost opportunities.',
    'missed deadlines.',
    'missed follow-ups.',
  ];

  React.useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setCurrentPainPoint((prev) => (prev + 1) % painPoints.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [inView]);

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
        ease: "easeOut" as const,
      },
    },
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-8"
        >
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wide hover-lift"
            >
              Built with real estate teams
            </motion.div>
            
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                <span className="font-serif">Stop</span>{' '}
                <span className="text-orange-400 font-serif">
                  Losing Deals
                </span>{' '}
                to{' '}
                <span className="text-orange-300 relative inline-block min-w-[600px] h-[80px] text-4xl lg:text-5xl">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentPainPoint}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full whitespace-nowrap"
                    >
                      {painPoints[currentPainPoint]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mt-12 font-light">
                Atlas is the AI co‑pilot for real estate. Agents get prioritized leads, rich context, and one‑click drafts. Team leads get at‑risk deal alerts, clear performance insights, and a conversational command center.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                onClick={scrollToDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-orange-500 text-white px-10 py-5 font-semibold text-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center tracking-wide hover-lift glow-on-hover"
              >
                <Zap className="mr-2 w-5 h-5" />
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white tracking-tight">20+</div>
                <div className="text-sm text-gray-400 font-light">Tools Unified</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white tracking-tight">60%</div>
                <div className="text-sm text-gray-400 font-light">Deal Acceleration</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white tracking-tight">24/7</div>
                <div className="text-sm text-gray-400 font-light">AI Assistance</div>
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