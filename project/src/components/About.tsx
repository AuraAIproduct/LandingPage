import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Aura right for my business?",
      answer: "If your organization handles sensitive data, operates under strict regulatory compliance requirements, or seeks to automate workflows without relying on cloud-based solutions, Aura is specifically designed to meet your needs. Our hybrid AI agent network ensures that your data remains private and under your control, making it ideal for industries with high data sensitivity and regulatory burdens."
    },
    {
      question: "How fast can we get started?",
      answer: "Most teams can be up and running with Aura within a single day. Our dedicated onboarding team provides comprehensive guidance and support every step of the way, ensuring a smooth and efficient integration into your existing IT environment. The containerized deployment model simplifies setup, allowing for rapid adoption and immediate value generation."
    },
    {
      question: "Can we request custom agents or workflows?",
      answer: "Absolutely! Aura's modular and adaptable architecture supports extensive customization. We actively prioritize roadmap features based on user feedback and specific enterprise requirements. Whether you need bespoke agents for unique tasks or tailored workflow automations, our platform is designed to evolve with your business needs, allowing for the creation and import of new workflows as required."
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
              About the Cofounders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aura was founded by AI engineers, privacy advocates, and enterprise software veterans who believe business automation should be both intelligent and private.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/15 to-blue-600/15 backdrop-blur-sm rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Who We Are</h3>
              <p className="text-gray-300">
                AI engineers, privacy advocates, and enterprise software veterans who believe business automation should be both intelligent and private.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-500/15 to-purple-600/15 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To build AI that works for you, not the cloud. We're passionate about privacy, obsessed with performance, and dedicated to making advanced AI accessible and secure.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 backdrop-blur-sm rounded-2xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
              <Award className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
              <p className="text-gray-300">
                Privacy by design, transparency in operation, and empowerment without compromise. Every decision we make prioritizes your data sovereignty.
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
              Get answers to the most common questions about Aura's enterprise AI platform.
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