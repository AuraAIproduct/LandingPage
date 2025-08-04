import React from 'react';
import { Laptop, Monitor, Lock, Server, Cpu, Database, User, FileText, Mail, Mic, Building2, Calculator, Users } from 'lucide-react';
import { 
  SiGmail, 
  SiGoogledrive, 
  SiSalesforce,
  SiZillow,
  SiDropbox,
  SiBox
} from 'react-icons/si';
import { 
  FaHome,
  FaBuilding,
  FaFileAlt,
  FaEnvelope
} from 'react-icons/fa';

const NetworkAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50">
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Customer to Tools connections */}
        <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '0.8s' }} />
        <line x1="50%" y1="50%" x2="75%" y2="15%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '1.2s' }} />
        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '1.6s' }} />
        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '2.0s' }} />
        <line x1="50%" y1="50%" x2="15%" y2="40%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '2.4s' }} />
        <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '2.8s' }} />
        <line x1="50%" y1="50%" x2="90%" y2="70%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '3.2s' }} />
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0">
        {/* Customer Node - Bigger and Centered */}
        <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm user-node">
          <User className="w-12 h-12 text-slate-300" />
        </div>

        {/* Real Estate Tool Nodes */}
        <div className="absolute left-[25%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <SiGoogledrive className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[75%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <SiGmail className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[20%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <SiSalesforce className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[80%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <SiZillow className="w-6 h-6 text-slate-400" />
        </div>

        {/* Additional Real Estate Tools */}
        <div className="absolute left-[15%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm data-source-node">
          <FaFileAlt className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[85%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm data-source-node">
          <SiDropbox className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[90%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm data-source-node">
          <SiBox className="w-6 h-6 text-slate-400" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .user-node {
            animation: userActivate 1.2s ease-out forwards;
          }
          
          .device-node {
            animation: nodeActivate 1.2s ease-out forwards;
          }
          
          .data-source-node {
            animation: nodeActivate 1.2s ease-out forwards;
          }
          
          .connection-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 1.2s ease-out forwards;
            opacity: 0.6;
          }
          
          @keyframes userActivate {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.3);
            }
            50% {
              opacity: 0.8;
              transform: translate(-50%, -50%) scale(1.1);
            }
            70% {
              transform: translate(-50%, -50%) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          @keyframes nodeActivate {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.3);
            }
            50% {
              opacity: 0.8;
              transform: translate(-50%, -50%) scale(1.05);
            }
            70% {
              transform: translate(-50%, -50%) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          @keyframes drawLine {
            0% {
              stroke-dashoffset: 1000;
              opacity: 0;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.6;
            }
          }
          
          /* Subtle glow effects */
          .user-node::after {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 50%;
            background: linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
            animation: userGlow 4s ease-in-out infinite;
            z-index: -1;
          }
          
          @keyframes userGlow {
            0%, 100% {
              opacity: 0.1;
              transform: scale(1);
            }
            50% {
              opacity: 0.2;
              transform: scale(1.05);
            }
          }
          
          /* Connection hit animations - nodes bob when connections reach them */
          .user-node {
            animation: userActivate 1.2s ease-out forwards, userBob 0.4s ease-out 0.8s, userBob 0.4s ease-out 1.2s, userBob 0.4s ease-out 1.6s, userBob 0.4s ease-out 2.0s, userBob 0.4s ease-out 2.4s, userBob 0.4s ease-out 2.8s, userBob 0.4s ease-out 3.2s;
          }
          
          .device-node:nth-child(1) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 0.8s;
          }
          
          .device-node:nth-child(2) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 1.2s;
          }
          
          .device-node:nth-child(3) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 1.6s;
          }
          
          .device-node:nth-child(4) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 2.0s;
          }
          
          .data-source-node:nth-child(1) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 2.4s;
          }
          
          .data-source-node:nth-child(2) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 2.8s;
          }
          
          .data-source-node:nth-child(3) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 3.2s;
          }
          
          @keyframes userBob {
            0% {
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.08);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          @keyframes nodeBob {
            0% {
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.05);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `
      }} />
    </div>
  );
};

export default NetworkAnimation;