import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, Building, User } from 'lucide-react';

const DemoRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 border border-white/20 p-12">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Thank You!
            </h2>
            <p className="text-xl text-gray-300 mb-6 font-light">
              Our team will reach out within 24 hours to schedule your personalized demo.
            </p>
            <p className="text-gray-400 font-light">
              In the meantime, feel free to explore our documentation or reach out with any questions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo-request" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight font-serif">
            Ready to see Atlas in action?
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Experience the future of real estate automation and workflow management.
          </p>
        </div>
        
        {/* Form Panel */}
        <div className="relative">
          <div className="relative bg-white/5 border border-white/20 p-12 hover-lift">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-all duration-300 placeholder-gray-400"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-all duration-300 placeholder-gray-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-3">
                    <Building className="inline w-4 h-4 mr-2" />
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-all duration-300 placeholder-gray-400"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-3">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-all duration-300"
                  >
                    <option value="">Select your role</option>
                    <option value="Real Estate Agent">Real Estate Agent</option>
                    <option value="Broker">Broker</option>
                    <option value="Operations Manager">Operations Manager</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="CEO">CEO</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Tell us about your use case (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-all duration-300 placeholder-gray-400"
                  placeholder="What workflows are you looking to automate? Any specific compliance requirements?"
                />
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit"
                  className="group bg-white text-black px-10 py-5 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center mx-auto tracking-wide hover-lift glow-on-hover"
                >
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequest;