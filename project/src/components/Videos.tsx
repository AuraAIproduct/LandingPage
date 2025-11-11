import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Presentation } from 'lucide-react';

const Videos: React.FC = () => {
  const navigate = useNavigate();
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

  const goBack = () => {
    navigate('/');
  };

  return (
    <section className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <button
              onClick={goBack}
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif">
              Pitch Deck
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">
              Our vision for transforming real estate with AI-powered intelligence.
            </p>
          </motion.div>

          {/* Pitch Deck Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://docs.google.com/presentation/d/1RGo4z5598lB47h_TEhzJYcv_ZYEON915gTEOyXI_ph0/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-white/20"
                title="AtlasAI Pitch Deck"
              />
            </div>
            
            {/* External link */}
            <div className="mt-4 text-center">
              <a
                href="https://docs.google.com/presentation/d/1RGo4z5598lB47h_TEhzJYcv_ZYEON915gTEOyXI_ph0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Presentation className="w-4 h-4 mr-2" />
                Open in Google Slides
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="bg-white/5 border border-white/20 p-12 rounded-lg">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight font-serif">
                Ready to Transform Your Real Estate?
              </h3>
              <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
                Join the future of real estate with AI-powered lead prioritization, contextual insights, and team collaboration.
              </p>
              <button
                onClick={() => navigate('/#demo-request')}
                className="bg-orange-500 text-white px-10 py-5 font-semibold text-lg hover:bg-orange-600 transition-all duration-300 tracking-wide hover-lift"
              >
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;
