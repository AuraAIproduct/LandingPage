import React from 'react';
<<<<<<< HEAD
import { Laptop, Monitor, Lock, Server, Cpu, Database, User, FileText, Mail, Mic, Building2, Calculator, Users } from 'lucide-react';
=======
import { Laptop, Monitor, Lock, Server, Cpu, Database, User, FileText, Mail, Mic } from 'lucide-react';
>>>>>>> 0e7cecf723347f29465f8af606b3d42f5b531529

const NetworkAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50">
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {/* User to Agent connections */}
        <line x1="10%" y1="20%" x2="40%" y2="35%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '0.8s' }} />
        <line x1="10%" y1="20%" x2="70%" y2="50%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '1.2s' }} />
        
<<<<<<< HEAD
        {/* Document to Agent connections */}
=======
        {/* Device to Agent connections */}
>>>>>>> 0e7cecf723347f29465f8af606b3d42f5b531529
        <line x1="25%" y1="15%" x2="40%" y2="35%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '2.4s' }} />
        <line x1="75%" y1="15%" x2="70%" y2="50%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '3.2s' }} />
        <line x1="20%" y1="80%" x2="50%" y2="85%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '4.0s' }} />
        <line x1="80%" y1="80%" x2="30%" y2="60%" stroke="#6366f1" strokeWidth="1.5" className="connection-line" style={{ animationDelay: '4.8s' }} />
        
        {/* Agent to Database connections */}
        <line x1="40%" y1="35%" x2="55%" y2="55%" stroke="#10b981" strokeWidth="1.5" className="data-flow-line" style={{ animationDelay: '5.6s' }} />
        <line x1="70%" y1="50%" x2="55%" y2="55%" stroke="#10b981" strokeWidth="1.5" className="data-flow-line" style={{ animationDelay: '6.4s' }} />
        <line x1="50%" y1="85%" x2="55%" y2="55%" stroke="#10b981" strokeWidth="1.5" className="data-flow-line" style={{ animationDelay: '7.2s' }} />
        <line x1="30%" y1="60%" x2="55%" y2="55%" stroke="#10b981" strokeWidth="1.5" className="data-flow-line" style={{ animationDelay: '8.0s' }} />
        
        {/* Agent to Agent communication */}
        <line x1="40%" y1="35%" x2="70%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" className="agent-comm-line" style={{ animationDelay: '8.8s' }} />
        <line x1="70%" y1="50%" x2="50%" y2="85%" stroke="#3b82f6" strokeWidth="1.5" className="agent-comm-line" style={{ animationDelay: '9.6s' }} />
        <line x1="50%" y1="85%" x2="30%" y2="60%" stroke="#3b82f6" strokeWidth="1.5" className="agent-comm-line" style={{ animationDelay: '10.4s' }} />
        <line x1="30%" y1="60%" x2="40%" y2="35%" stroke="#3b82f6" strokeWidth="1.5" className="agent-comm-line" style={{ animationDelay: '11.2s' }} />
        
        {/* Data ingestion flows */}
        <line x1="15%" y1="40%" x2="40%" y2="35%" stroke="#10b981" strokeWidth="1.5" className="data-flow-line" style={{ animationDelay: '12.0s' }} />
        <line x1="85%" y1="30%" x2="70%" y2="50%" stroke="#10b981" strokeWidth="1.5" className="data-flow-line" style={{ animationDelay: '12.8s' }} />
        <line x1="90%" y1="70%" x2="50%" y2="85%" stroke="#10b981" strokeWidth="1.5" className="data-flow-line" style={{ animationDelay: '13.6s' }} />
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0">
        {/* User Node - Bigger */}
        <div className="absolute left-[10%] top-[20%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm user-node">
          <User className="w-8 h-8 text-slate-300" />
        </div>

<<<<<<< HEAD
        {/* Document/Data Source Nodes */}
        <div className="absolute left-[25%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <FileText className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[75%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <Mail className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[20%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <Building2 className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[80%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <Calculator className="w-6 h-6 text-slate-400" />
=======
        {/* Device Nodes */}
        <div className="absolute left-[25%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <Server className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[75%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <Laptop className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[20%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <Monitor className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[80%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm device-node">
          <Server className="w-6 h-6 text-slate-400" />
>>>>>>> 0e7cecf723347f29465f8af606b3d42f5b531529
        </div>

        {/* Agent Nodes */}
        <div className="absolute left-[40%] top-[35%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-500/50 bg-slate-800/40 backdrop-blur-sm agent-node">
          <Cpu className="w-6 h-6 text-slate-300" />
          <Lock className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 bg-slate-800 rounded-full p-0.5 border border-emerald-500/50 lock-pulse" />
        </div>
        <div className="absolute left-[70%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-500/50 bg-slate-800/40 backdrop-blur-sm agent-node">
          <Cpu className="w-6 h-6 text-slate-300" />
          <Lock className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 bg-slate-800 rounded-full p-0.5 border border-emerald-500/50 lock-pulse" />
        </div>
        <div className="absolute left-[50%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-500/50 bg-slate-800/40 backdrop-blur-sm agent-node">
          <Cpu className="w-6 h-6 text-slate-300" />
          <Lock className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 bg-slate-800 rounded-full p-0.5 border border-emerald-500/50 lock-pulse" />
        </div>
        <div className="absolute left-[30%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-500/50 bg-slate-800/40 backdrop-blur-sm agent-node">
          <Cpu className="w-6 h-6 text-slate-300" />
          <Lock className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 bg-slate-800 rounded-full p-0.5 border border-emerald-500/50 lock-pulse" />
        </div>

        {/* Database Node */}
        <div className="absolute left-[55%] top-[55%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-500/50 bg-slate-800/40 backdrop-blur-sm database-node">
          <Database className="w-6 h-6 text-slate-300" />
          <Lock className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 bg-slate-800 rounded-full p-0.5 border border-emerald-500/50 lock-pulse" />
        </div>

        {/* Data Source Nodes */}
        <div className="absolute left-[15%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm data-source-node">
          <FileText className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[85%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm data-source-node">
          <Mail className="w-6 h-6 text-slate-400" />
        </div>
        <div className="absolute left-[90%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm data-source-node">
<<<<<<< HEAD
          <Users className="w-6 h-6 text-slate-400" />
=======
          <Mic className="w-6 h-6 text-slate-400" />
>>>>>>> 0e7cecf723347f29465f8af606b3d42f5b531529
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
          
          .agent-node {
            animation: agentActivate 1.2s ease-out forwards;
          }
          
          .database-node {
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
          
          .data-flow-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawDataFlow 1.2s ease-out forwards;
            opacity: 0.5;
          }
          
          .agent-comm-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawAgentComm 1.2s ease-out forwards;
            opacity: 0.5;
          }
          
          .lock-pulse {
            animation: lockPulse 3s ease-in-out infinite;
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
          
          @keyframes agentActivate {
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
          
          @keyframes drawDataFlow {
            0% {
              stroke-dashoffset: 1000;
              opacity: 0;
            }
            50% {
              opacity: 0.25;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.5;
            }
          }
          
          @keyframes drawAgentComm {
            0% {
              stroke-dashoffset: 1000;
              opacity: 0;
            }
            50% {
              opacity: 0.25;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.5;
            }
          }
          
          @keyframes lockPulse {
            0%, 100% {
              box-shadow: 0 0 4px rgba(16, 185, 129, 0.3);
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
              transform: scale(1.05);
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
          
          .agent-node::after {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: 50%;
            background: linear-gradient(45deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.08));
            animation: agentGlow 5s ease-in-out infinite;
            z-index: -1;
          }
          
          .database-node::after {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: 50%;
            background: linear-gradient(45deg, rgba(16, 185, 129, 0.08), rgba(34, 197, 94, 0.08));
            animation: databaseGlow 4.5s ease-in-out infinite;
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
          
          @keyframes agentGlow {
            0%, 100% {
              opacity: 0.08;
              transform: scale(1);
            }
            50% {
              opacity: 0.15;
              transform: scale(1.03);
            }
          }
          
          @keyframes databaseGlow {
            0%, 100% {
              opacity: 0.08;
              transform: scale(1);
            }
            50% {
              opacity: 0.12;
              transform: scale(1.02);
            }
          }
          
          /* Connection hit animations - nodes bob when connections reach them */
          .user-node {
            animation: userActivate 1.2s ease-out forwards, userBob 0.4s ease-out 0.8s;
          }
          
          .device-node:nth-child(1) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 2.4s;
          }
          
          .device-node:nth-child(2) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 3.2s;
          }
          
          .device-node:nth-child(3) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 4.0s;
          }
          
          .device-node:nth-child(4) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 4.8s;
          }
          
          .agent-node:nth-child(1) {
            animation: agentActivate 1.2s ease-out forwards, agentBob 0.4s ease-out 0.8s, agentBob 0.4s ease-out 5.6s, agentBob 0.4s ease-out 8.8s, agentBob 0.4s ease-out 12.0s;
          }
          
          .agent-node:nth-child(2) {
            animation: agentActivate 1.2s ease-out forwards, agentBob 0.4s ease-out 1.2s, agentBob 0.4s ease-out 6.4s, agentBob 0.4s ease-out 8.8s, agentBob 0.4s ease-out 12.8s;
          }
          
          .agent-node:nth-child(3) {
            animation: agentActivate 1.2s ease-out forwards, agentBob 0.4s ease-out 4.0s, agentBob 0.4s ease-out 7.2s, agentBob 0.4s ease-out 9.6s, agentBob 0.4s ease-out 13.6s;
          }
          
          .agent-node:nth-child(4) {
            animation: agentActivate 1.2s ease-out forwards, agentBob 0.4s ease-out 4.8s, agentBob 0.4s ease-out 8.0s, agentBob 0.4s ease-out 10.4s, agentBob 0.4s ease-out 11.2s;
          }
          
          .database-node {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 5.6s, nodeBob 0.4s ease-out 6.4s, nodeBob 0.4s ease-out 7.2s, nodeBob 0.4s ease-out 8.0s;
          }
          
          .data-source-node:nth-child(1) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 12.0s;
          }
          
          .data-source-node:nth-child(2) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 12.8s;
          }
          
          .data-source-node:nth-child(3) {
            animation: nodeActivate 1.2s ease-out forwards, nodeBob 0.4s ease-out 13.6s;
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
          
          @keyframes agentBob {
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