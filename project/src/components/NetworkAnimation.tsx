import React from 'react';
import { Laptop, Monitor, Lock, Server, Cpu, Database, User, FileText, Mail, Mic, Building2, Calculator, Users, Bot, MessageCircle, Brain } from 'lucide-react';
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
  FaServer,
  FaCog,
  FaRobot,
  FaBrain,
  FaComments
} from 'react-icons/fa';

const NetworkAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 via-orange-900/20 to-teal-900/30 rounded-2xl overflow-hidden border border-orange-500/20">
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {/* User to Atlas connection */}
        <line x1="25%" y1="50%" x2="45%" y2="50%" stroke="#6366f1" strokeWidth="2" className="connection-line" style={{ animationDelay: '0.5s' }} />
        
        {/* Atlas to Backend connections */}
        <line x1="45%" y1="50%" x2="65%" y2="30%" stroke="#8b5cf6" strokeWidth="1.5" className="backend-line" style={{ animationDelay: '1.0s' }} />
        <line x1="45%" y1="50%" x2="65%" y2="50%" stroke="#8b5cf6" strokeWidth="1.5" className="backend-line" style={{ animationDelay: '1.2s' }} />
        <line x1="45%" y1="50%" x2="65%" y2="70%" stroke="#8b5cf6" strokeWidth="1.5" className="backend-line" style={{ animationDelay: '1.4s' }} />
        
        {/* Backend to Tools connections */}
        <line x1="65%" y1="30%" x2="85%" y2="15%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '2.0s' }} />
        <line x1="65%" y1="30%" x2="85%" y2="30%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '2.2s' }} />
        <line x1="65%" y1="30%" x2="85%" y2="45%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '2.4s' }} />
        <line x1="65%" y1="50%" x2="85%" y2="30%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '2.6s' }} />
        <line x1="65%" y1="50%" x2="85%" y2="45%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '2.8s' }} />
        <line x1="65%" y1="50%" x2="85%" y2="60%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.0s' }} />
        <line x1="65%" y1="50%" x2="85%" y2="75%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.2s' }} />
        <line x1="65%" y1="70%" x2="85%" y2="60%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.4s' }} />
        <line x1="65%" y1="70%" x2="85%" y2="75%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.6s' }} />
        <line x1="65%" y1="70%" x2="85%" y2="90%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '3.8s' }} />
        <line x1="65%" y1="30%" x2="85%" y2="90%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '4.0s' }} />
        <line x1="65%" y1="70%" x2="85%" y2="15%" stroke="#10b981" strokeWidth="1" className="tool-line" style={{ animationDelay: '4.2s' }} />
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0">
        {/* User Node - Simple Interface */}
        <div className="absolute left-[25%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm user-node">
          <FaUserTie className="w-8 h-8 text-white" />
        </div>

        {/* Atlas Hub - User Interface */}
        <div className="absolute left-[45%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hub-node">
          <FaRobot className="w-10 h-10 text-white" />
        </div>

        {/* Backend Orchestration Nodes */}
        <div className="absolute left-[65%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm backend-node">
          <FaCog className="w-6 h-6 text-white" />
        </div>
        
        <div className="absolute left-[65%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm backend-node">
          <FaDatabase className="w-6 h-6 text-white" />
        </div>
        
        <div className="absolute left-[65%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm backend-node">
          <FaServer className="w-6 h-6 text-white" />
        </div>

        {/* Tool Nodes - Clean and Simple */}
        <div className="absolute left-[85%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiGoogledrive className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[85%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiGmail className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[85%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiSalesforce className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[85%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <SiZillow className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[85%] top-[75%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <FaFileContract className="w-5 h-5 text-white" />
        </div>
        
        <div className="absolute left-[85%] top-[90%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm tool-node">
          <FaCalendarAlt className="w-5 h-5 text-white" />
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
          
          .backend-node {
            animation: backendActivate 1.2s ease-out forwards;
          }
          
          .tool-node {
            animation: toolActivate 1.2s ease-out forwards;
          }
          
          .connection-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 1.5s ease-out forwards;
            opacity: 0.8;
          }
          
          .backend-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawBackendLine 1.5s ease-out forwards;
            opacity: 0.6;
          }
          
          .tool-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawToolLine 1.5s ease-out forwards;
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
          
          @keyframes backendActivate {
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
          
          @keyframes drawBackendLine {
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
            animation: hubActivate 1.2s ease-out forwards, hubBob 0.4s ease-out 0.5s, hubBob 0.4s ease-out 1.0s, hubBob 0.4s ease-out 1.2s, hubBob 0.4s ease-out 1.4s;
          }
          
          .backend-node:nth-child(1) {
            animation: backendActivate 1.2s ease-out forwards, backendBob 0.4s ease-out 1.0s, backendBob 0.4s ease-out 2.0s, backendBob 0.4s ease-out 2.2s, backendBob 0.4s ease-out 2.4s, backendBob 0.4s ease-out 4.0s;
          }
          
          .backend-node:nth-child(2) {
            animation: backendActivate 1.2s ease-out forwards, backendBob 0.4s ease-out 1.2s, backendBob 0.4s ease-out 2.6s, backendBob 0.4s ease-out 2.8s, backendBob 0.4s ease-out 3.0s, backendBob 0.4s ease-out 3.2s;
          }
          
          .backend-node:nth-child(3) {
            animation: backendActivate 1.2s ease-out forwards, backendBob 0.4s ease-out 1.4s, backendBob 0.4s ease-out 3.4s, backendBob 0.4s ease-out 3.6s, backendBob 0.4s ease-out 3.8s, backendBob 0.4s ease-out 4.2s;
          }
          
          .tool-node:nth-child(1) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 2.0s, toolBob 0.4s ease-out 4.2s;
          }
          
          .tool-node:nth-child(2) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 2.2s, toolBob 0.4s ease-out 2.6s;
          }
          
          .tool-node:nth-child(3) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 2.4s, toolBob 0.4s ease-out 2.8s;
          }
          
          .tool-node:nth-child(4) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 3.0s, toolBob 0.4s ease-out 3.4s;
          }
          
          .tool-node:nth-child(5) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 3.2s, toolBob 0.4s ease-out 3.6s;
          }
          
          .tool-node:nth-child(6) {
            animation: toolActivate 1.2s ease-out forwards, toolBob 0.4s ease-out 3.8s, toolBob 0.4s ease-out 4.0s;
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
          
          @keyframes backendBob {
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