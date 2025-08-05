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
        
        {/* Tool to Tool interactions */}
        <line x1="25%" y1="15%" x2="75%" y2="15%" stroke="#10b981" strokeWidth="1" className="tool-interaction-line" style={{ animationDelay: '4.0s' }} />
        <line x1="20%" y1="80%" x2="80%" y2="80%" stroke="#10b981" strokeWidth="1" className="tool-interaction-line" style={{ animationDelay: '4.4s' }} />
        <line x1="15%" y1="40%" x2="85%" y2="30%" stroke="#10b981" strokeWidth="1" className="tool-interaction-line" style={{ animationDelay: '4.8s' }} />
        <line x1="85%" y1="30%" x2="90%" y2="70%" stroke="#10b981" strokeWidth="1" className="tool-interaction-line" style={{ animationDelay: '5.2s' }} />
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0">
        {/* Customer Node - Bigger and Centered */}
        <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm user-node">
          <User className="w-12 h-12 text-white" />
        </div>

        {/* Real Estate Tool Nodes */}
        <div className="absolute left-[25%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm device-node">
          <SiGoogledrive className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-[75%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm device-node">
          <SiGmail className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-[20%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm device-node">
          <SiSalesforce className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-[80%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm device-node">
          <SiZillow className="w-6 h-6 text-white" />
        </div>

        {/* Additional Real Estate Tools */}
        <div className="absolute left-[15%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm data-source-node">
          <FaFileAlt className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-[85%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm data-source-node">
          <SiDropbox className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-[90%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm data-source-node">
          <SiBox className="w-6 h-6 text-white" />
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
          
          .tool-interaction-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawToolInteraction 1.2s ease-out forwards;
            opacity: 0.4;
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
          
          @keyframes drawToolInteraction {
            0% {
              stroke-dashoffset: 1000;
              opacity: 0;
            }
            50% {
              opacity: 0.2;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.4;
            }
          }
          
          /* Connection hit animations - nodes bob when connections reach them */
          .user-node {
            animation: userActivate 1.2s ease-out forwards, userBob 0.4s ease-out 0.8s, userBob 0.4s ease-out 1.2s, userBob 0.4s ease-out 1.6s, userBob 0.4s ease-out 2.0s, userBob 0.4s ease-out 2.4s, userBob 0.4s ease-out 2.8s, userBob 0.4s ease-out 3.2s;
          }
          
          .device-node:nth-child(1) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 0.8s, toolBob 0.4s ease-out 4.0s;
          }
          
          .device-node:nth-child(2) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 1.2s, toolBob 0.4s ease-out 4.0s;
          }
          
          .device-node:nth-child(3) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 1.6s, toolBob 0.4s ease-out 4.4s;
          }
          
          .device-node:nth-child(4) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 2.0s, toolBob 0.4s ease-out 4.4s;
          }
          
          .data-source-node:nth-child(1) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 2.4s, toolBob 0.4s ease-out 4.8s;
          }
          
          .data-source-node:nth-child(2) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 2.8s, toolBob 0.4s ease-out 4.8s, toolBob 0.4s ease-out 5.2s;
          }
          
          .data-source-node:nth-child(3) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 3.2s, toolBob 0.4s ease-out 5.2s;
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
          
          @keyframes toolBob {
            0% {
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.1);
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