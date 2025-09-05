import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ChatbotDemo from './ChatbotDemo';

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
            className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif"
          >
            What Atlas Delivers (MVP)
          </motion.h2>
        </motion.div>
        
        {/* Chatbot Demo Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={cardVariants}
            className="relative"
          >
            <ChatbotDemo />
          </motion.div>
        </motion.div>

        {/* MVP Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            {
              title: 'Lead Prioritization',
              desc: 'Scores leads using FUB activity + Gmail signals; surfaces reasons and next best actions.',
            },
            {
              title: 'Contextual Co‑Pilot',
              desc: 'Agent chat with personal RAG: property data (RentCast/MLS), email history, and call notes.',
            },
            {
              title: 'Team Command Center',
              desc: 'At‑risk deal flags, agent activity metrics, and conversational BI for coaching.',
            },
            {
              title: 'Plug‑in Integrations',
              desc: 'FUB, Gmail, RentCast today. MLS, Twilio SMS, Zoom/Meet next.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white/5 border border-white/20 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;