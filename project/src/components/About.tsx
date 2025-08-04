import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will this actually save me time or just create more work?",
      answer: "We built this because we were drowning in paperwork ourselves. It takes 5 minutes to set up, then it just works. No training, no complex workflows—just upload your docs and get answers. We're not trying to replace you, just make the boring stuff less painful."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "Neither were we when we started. If you can use Gmail, you can use this. We made it dead simple because we know you're busy closing deals, not learning new software. Upload a document, get an email with the important stuff highlighted."
    },
    {
      question: "How much does it cost?",
      answer: "Free to start, $49/month when you're ready to scale. No contracts, no setup fees, no BS. We only make money when you're making money. If it doesn't help you close more deals, we don't deserve your business."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* About the Cofounders Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              We Built This Because We Had To
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              After losing a $2.4M deal because we missed a deadline buried in page 47 of a contract, we decided enough was enough. We're real estate agents who learned to code, not the other way around.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/15 to-blue-600/15 backdrop-blur-sm rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Who We Are</h3>
              <p className="text-gray-300">
                Former agents who got tired of losing deals to paperwork. We know the pain of missing deadlines, the stress of compliance, and the frustration of watching deals die in escrow.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-500/15 to-purple-600/15 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                Stop agents from losing deals to stupid paperwork mistakes. We're building tools that actually work in the real world, not some Silicon Valley fantasy of what real estate should be.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 backdrop-blur-sm rounded-2xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
              <Award className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
              <p className="text-gray-300">
                Keep it simple, keep it working, keep your data yours. No fancy buzzwords, no overpromising—just tools that help you close more deals with less stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about Atlas AI's real estate intelligence platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;