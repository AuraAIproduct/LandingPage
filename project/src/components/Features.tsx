import * as React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentText, setCurrentText] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  const texts = [
    "Atlas is an AI copilot for real estate teams.",
    "Replaces fragmented tools with one intelligent app.",
    "Handles contracts, compliance, and client follow-ups.",
    "No more missed deadlines or compliance landmines."
  ];

  React.useEffect(() => {
    if (!inView) return;

    const typeText = async () => {
      const currentFullText = texts[currentText];
      setIsTyping(true);
      setDisplayText('');

      for (let i = 0; i < currentFullText.length; i++) {
        setDisplayText(currentFullText.slice(0, i + 1));
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      setIsTyping(false);
      await new Promise(resolve => setTimeout(resolve, 2000));

      setCurrentText((prev) => (prev + 1) % texts.length);
    };

    const interval = setInterval(typeText, 4000);
    return () => clearInterval(interval);
  }, [currentText, inView]);

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
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={cardVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-sm"
          >
            <div className="h-32 flex items-center justify-center">
              <motion.p 
                className="text-3xl lg:text-4xl text-white font-mono leading-relaxed"
                key={currentText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </motion.p>
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