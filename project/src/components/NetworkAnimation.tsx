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
  FaEnvelope,
  FaCalendarAlt,
  FaFileContract,
  FaShieldAlt,
  FaUserTie,
  FaDatabase,
  FaServer
} from 'react-icons/fa';

const NetworkAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50">
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Customer to Hub connection */}
        <line x1="15%" y1="50%" x2="35%" y2="50%" stroke="#6366f1" strokeWidth="2" className="connection-line" style={{ animationDelay: '0.5s' }} />
        
        {/* Hub to Tools connections */}
        <line x1="35%" y1="50%" x2="55%" y2="15%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '1.0s' }} />
        <line x1="35%" y1="50%" x2="75%" y2="20%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '1.2s' }} />
        <line x1="35%" y1="50%" x2="85%" y2="35%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '1.4s' }} />
        <line x1="35%" y1="50%" x2="80%" y2="70%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '1.6s' }} />
        <line x1="35%" y1="50%" x2="60%" y2="85%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '1.8s' }} />
        <line x1="35%" y1="50%" x2="25%" y2="85%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '2.0s' }} />
        <line x1="35%" y1="50%" x2="15%" y2="70%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '2.2s' }} />
        <line x1="35%" y1="50%" x2="10%" y2="35%" stroke="#10b981" strokeWidth="1.5" className="hub-line" style={{ animationDelay: '2.4s' }} />
        
        {/* Tool to Tool interactions */}
        <line x1="55%" y1="15%" x2="75%" y2="20%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.0s' }} />
        <line x1="75%" y1="20%" x2="85%" y2="35%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.2s' }} />
        <line x1="85%" y1="35%" x2="80%" y2="70%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.4s' }} />
        <line x1="80%" y1="70%" x2="60%" y2="85%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.6s' }} />
        <line x1="60%" y1="85%" x2="25%" y2="85%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.8s' }} />
        <line x1="25%" y1="85%" x2="15%" y2="70%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '4.0s' }} />
        <line x1="15%" y1="70%" x2="10%" y2="35%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '4.2s' }} />
        <line x1="10%" y1="35%" x2="55%" y2="15%" stroke="#f59e0b" strokeWidth="1" className="tool-line" style={{ animationDelay: '4.4s' }} />
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0">
        {/* Customer Node - Left Side */}
        <div className="absolute left-[15%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm user-node">
          <FaUserTie className="w-8 h-8 text-white" />
        </div>

        {/* Atlas Hub - Center */}
        <div className="absolute left-[35%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hub-node">
          <FaShieldAlt className="w-10 h-10 text-white" />
        </div>

        {/* Tool Nodes */}
        <div className="absolute left-[55%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiGoogledrive className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[75%] top-[20%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiGmail className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[85%] top-[35%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiSalesforce className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[80%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiZillow className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[60%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <FaFileContract className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[25%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <FaCalendarAlt className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[15%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiDropbox className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[10%] top-[35%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiBox className="w-5 h-5 text-white" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .user-node {
            animation: userActivate 1.2s ease-out forwards;
          }
          
          .hub-node {
            animation: hubActivate 1.2s ease-out forwards;
          }
          
          .tool-node {
            animation: toolActivate 1.2s ease-out forwards;
          }
          
          .connection-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 1.2s ease-out forwards;
            opacity: 0.8;
          }
          
          .hub-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawHubLine 1.2s ease-out forwards;
            opacity: 0.6;
          }
          
          .tool-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawToolLine 1.2s ease-out forwards;
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
          
          @keyframes hubActivate {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.3);
            }
            50% {
              opacity: 0.8;
              transform: translate(-50%, -50%) scale(1.15);
            }
            70% {
              transform: translate(-50%, -50%) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          @keyframes toolActivate {
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
              opacity: 0.4;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.8;
            }
          }
          
          @keyframes drawHubLine {
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
          
          @keyframes drawToolLine {
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
          
          /* Connection hit animations */
          .user-node {
            animation: userActivate 1.2s ease-out forwards, userBob 0.4s ease-out 0.5s;
          }
          
          .hub-node {
            animation: hubActivate 1.2s ease-out forwards, hubBob 0.4s ease-out 0.5s, hubBob 0.4s ease-out 1.0s, hubBob 0.4s ease-out 1.2s, hubBob 0.4s ease-out 1.4s, hubBob 0.4s ease-out 1.6s, hubBob 0.4s ease-out 1.8s, hubBob 0.4s ease-out 2.0s, hubBob 0.4s ease-out 2.2s, hubBob 0.4s ease-out 2.4s;
          }
          
          .tool-node:nth-child(1) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 1.0s, toolInteractionBob 0.4s ease-out 3.0s, toolInteractionBob 0.4s ease-out 4.4s;
          }
          
          .tool-node:nth-child(2) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 1.2s, toolInteractionBob 0.4s ease-out 3.0s, toolInteractionBob 0.4s ease-out 3.2s;
          }
          
          .tool-node:nth-child(3) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 1.4s, toolInteractionBob 0.4s ease-out 3.2s, toolInteractionBob 0.4s ease-out 3.4s;
          }
          
          .tool-node:nth-child(4) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 1.6s, toolInteractionBob 0.4s ease-out 3.4s, toolInteractionBob 0.4s ease-out 3.6s;
          }
          
          .tool-node:nth-child(5) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 1.8s, toolInteractionBob 0.4s ease-out 3.6s, toolInteractionBob 0.4s ease-out 3.8s;
          }
          
          .tool-node:nth-child(6) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 2.0s, toolInteractionBob 0.4s ease-out 3.8s, toolInteractionBob 0.4s ease-out 4.0s;
          }
          
          .tool-node:nth-child(7) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 2.2s, toolInteractionBob 0.4s ease-out 4.0s, toolInteractionBob 0.4s ease-out 4.2s;
          }
          
          .tool-node:nth-child(8) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 2.4s, toolInteractionBob 0.4s ease-out 4.2s, toolInteractionBob 0.4s ease-out 4.4s;
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
          
          @keyframes hubBob {
            0% {
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.12);
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
              transform: translate(-50%, -50%) scale(1.05);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          @keyframes toolInteractionBob {
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