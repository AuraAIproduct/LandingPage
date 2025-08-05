import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const questions = [
  "What does Atlas do?",
  "How does it actually help agents?",
  "What makes Atlas different?",
  "How does it handle compliance?"
];

const responses = [
  "Atlas is an AI admin for real estate teams.",
  "Atlas automates compliance checks, lead follow-ups, and lead generation workflows.",
  "Built by real estate agents for real estate agents, not a generic AI tool.",
  "Automated compliance monitoring with real-time alerts and deadline tracking."
];

const ChatbotDemo: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isAgentThinking, setIsAgentThinking] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [agentResponse, setAgentResponse] = useState('');
  const [showAgentResponse, setShowAgentResponse] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let fadeOutTimeout: NodeJS.Timeout | null = null;

    const cycleConversation = async () => {
      if (!isMounted) return;

      // Fade out agent response before new question
      if (showAgentResponse) {
        setShowAgentResponse(false);
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Type out user question
      const question = questions[currentQuestion];
      setDisplayedText('');
      setIsTyping(true);
      for (let i = 0; i <= question.length; i++) {
        if (!isMounted) return;
        setDisplayedText(question.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      setIsTyping(false);

      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (!isMounted) return;

      // Agent thinking
      setIsAgentThinking(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsAgentThinking(false);

      // Agent responds with fade in
      const response = responses[currentQuestion];
      setAgentResponse(response);
      setShowAgentResponse(true);

      // Wait before next question
      await new Promise(resolve => setTimeout(resolve, 3000));
      if (!isMounted) return;

      // Delete user question
      for (let i = question.length; i >= 0; i--) {
        if (!isMounted) return;
        setDisplayedText(question.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      // Move to next question
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
      // Wait before next cycle
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (!isMounted) return;
      setTimeout(() => {
        if (isMounted) {
          cycleConversation();
        }
      }, 100);
    };

    cycleConversation();

    return () => {
      isMounted = false;
      if (fadeOutTimeout) clearTimeout(fadeOutTimeout);
    };
  }, [currentQuestion]);

  return (
    <div className="relative bg-white/5 border border-white/20 p-12">
      {/* Terminal Header */}
      <div className="flex items-center mb-6">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm font-mono">atlas.ai</span>
      </div>

      {/* Conversation */}
      <div className="space-y-6">
        {/* User Question */}
        <div className="flex justify-end">
          <div className="flex flex-col items-end space-y-2">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-white text-sm font-mono">
                {displayedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agent - Always Visible */}
        <div className="flex justify-start">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
            {/* Agent Thinking */}
            {isAgentThinking && (
              <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            {/* Agent Response */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showAgentResponse ? 1 : 0, y: showAgentResponse ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl min-w-[180px]"
              style={{ minHeight: '2.5rem', display: agentResponse ? 'block' : 'none' }}
            >
              <p className="text-sm text-white">
                {agentResponse}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDemo; 