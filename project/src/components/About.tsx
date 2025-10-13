import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PropertyIcon, ContractIcon, ComplianceIcon } from './RealEstateIcons';
import { Linkedin, ExternalLink } from 'lucide-react';

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
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
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
            className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif"
          >
            Built From Real Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto font-light"
          >
            Built with and for real estate teams to reduce missed follow‑ups, accelerate deals, and bring all context into one AI‑first workspace.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-12"
        >
          <motion.div 
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-8 hover-lift">
                <PropertyIcon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Lead Intelligence First</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Prioritization powered by Gemini + LangChain. Reasons are transparent: recency, sentiment, activity, and property interest.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-8 hover-lift">
                <ContractIcon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Connects to Your Stack</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                FUB + Gmail today. Property data via RentCast now; MLS, Twilio SMS, Meet/Zoom next. Serverless on Vercel.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 hover-lift">
                <ComplianceIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Team‑Safe by Design</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Agent RAGs are isolated per user; team leads see aggregated insights and activity—not private content. Pinecone namespaces per team.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-32"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight font-serif">
              Meet the Founders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Built by devlopers embedded in real estate who understand the challenges of the industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            {/* Arnav */}
            <motion.div
              variants={cardVariants}
              className="bg-white/5 border border-white/20 p-8 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6">
                <img 
                  src="/arnav-arora.jpg" 
                  alt="Arnav Arora" 
                  className="founder-image w-full h-full rounded-full object-cover border-2 border-orange-500/30 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Arnav Arora</h3>
              <p className="text-gray-400 mb-6">Co-Founder & CEO</p>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Real estate technology expert with deep experience in AI and automation solutions for the industry.
              </p>
              <a
                href="https://www.linkedin.com/in/arnav-arora-12a280189/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            {/* Julien */}
            <motion.div
              variants={cardVariants}
              className="bg-white/5 border border-white/20 p-8 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6">
                <img 
                  src="/julien-perez.jpg" 
                  alt="Julien Paul Perez" 
                  className="founder-image w-full h-full rounded-full object-cover border-2 border-teal-500/30 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Julien Paul Perez</h3>
              <p className="text-gray-400 mb-6">Co-Founder & CTO</p>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Technical architect specializing in scalable AI systems and real estate data integration.
              </p>
              <a
                href="https://www.linkedin.com/in/julien-paul-perez-549053236/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;