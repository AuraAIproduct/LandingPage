import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, ExternalLink } from 'lucide-react';

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

  const videos = [
    {
      id: 'founder-intro',
      title: 'Founder Introduction',
      description: 'Meet the team behind AtlasAI and learn about our mission to revolutionize real estate with AI-powered intelligence.',
      youtubeId: 'pItNH80HGqw',
      url: 'https://youtu.be/pItNH80HGqw',
      thumbnail: 'https://img.youtube.com/vi/pItNH80HGqw/maxresdefault.jpg'
    },
    {
      id: 'demo',
      title: 'Product Demo',
      description: 'See AtlasAI in action with our comprehensive product demonstration showcasing lead prioritization, contextual co-pilot, and team insights.',
      youtubeId: '-h-cMQ1PZMY',
      url: 'https://youtu.be/-h-cMQ1PZMY',
      thumbnail: 'https://img.youtube.com/vi/-h-cMQ1PZMY/maxresdefault.jpg'
    }
  ];

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
              AtlasAI Videos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">
              Learn about our vision, meet the founders, and see AtlasAI in action.
            </p>
          </motion.div>

          {/* Videos Grid */}
          <motion.div variants={containerVariants} className="space-y-16">
            {videos.map((video, index) => (
              <motion.div key={video.id} variants={itemVariants}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Video Embed */}
                  <div className="relative">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg border border-white/20"
                        title={video.title}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight font-serif">
                        {video.title}
                      </h2>
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        {video.description}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 font-semibold hover:bg-orange-600 transition-all duration-300 tracking-wide hover-lift"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Watch on YouTube
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
