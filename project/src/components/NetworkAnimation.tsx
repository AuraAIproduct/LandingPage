import React, { useEffect, useRef } from 'react';
import { Laptop, Monitor, Lock, Cloud, Cpu, Database, User } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  type: 'device' | 'local-agent' | 'cloud-agent' | 'database' | 'user';
  icon: React.ComponentType<any>;
  delay: number;
  hasLock?: boolean;
}

interface Connection {
  from: string;
  to: string;
  delay: number;
}

const NetworkAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const nodes: Node[] = [
    // User (initiator)
    { id: 'user1', x: 10, y: 20, type: 'user', icon: User, delay: 0 },
    
    // Devices
    { id: 'device1', x: 25, y: 15, type: 'device', icon: Laptop, delay: 800 },
    { id: 'device2', x: 75, y: 15, type: 'device', icon: Monitor, delay: 8000 },
    { id: 'device3', x: 20, y: 80, type: 'device', icon: Laptop, delay: 8000 },
    
    // Local Agents (CPUs)
    { id: 'cpu1', x: 40, y: 35, type: 'local-agent', icon: Cpu, delay: 1600, hasLock: true },
    { id: 'cpu2', x: 70, y: 50, type: 'local-agent', icon: Cpu, delay: 4000, hasLock: true },
    { id: 'cpu3', x: 50, y: 85, type: 'local-agent', icon: Cpu, delay: 6400, hasLock: true },
    
    // Databases
    { id: 'db1', x: 30, y: 55, type: 'database', icon: Database, delay: 2400, hasLock: true },
    { id: 'db2', x: 70, y: 80, type: 'database', icon: Database, delay: 4800, hasLock: true },
    
    // Cloud Agents
    { id: 'cloud1', x: 90, y: 35, type: 'cloud-agent', icon: Cloud, delay: 8800 },
    { id: 'cloud2', x: 85, y: 75, type: 'cloud-agent', icon: Cloud, delay: 10400 },
  ];

  const connections: Connection[] = [
    // User initiates network
    { from: 'user1', to: 'device1', delay: 800 },
    
    // Device to CPU connections
    { from: 'device1', to: 'cpu1', delay: 1600 },
    { from: 'device2', to: 'cpu2', delay: 8000 },
    { from: 'device3', to: 'cpu3', delay: 8000 },
    
    // CPU to Database connections (data requests)
    { from: 'cpu1', to: 'db1', delay: 2400 },
    { from: 'cpu2', to: 'db2', delay: 4800 },
    { from: 'cpu3', to: 'db1', delay: 6400 },
    
    // CPU to CPU connections (local network)
    { from: 'cpu1', to: 'cpu2', delay: 4000 },
    { from: 'cpu2', to: 'cpu3', delay: 6400 },
    
    // CPU to Cloud connections (external processing)
    { from: 'cpu1', to: 'cloud1', delay: 8800 },
    { from: 'cpu2', to: 'cloud2', delay: 10400 },
    
    // Cloud to Cloud connections
    { from: 'cloud1', to: 'cloud2', delay: 10400 },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add CSS keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes nodeActivate {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.7;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.15);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 1;
        }
      }
      
      @keyframes connectionActivate {
        0% {
          stroke-dasharray: 5,5;
          opacity: 0.3;
          stroke: #374151;
        }
        100% {
          stroke-dasharray: 0;
          opacity: 1;
          stroke: #8B5CF6;
        }
      }
      
      @keyframes glowPulse {
        0%, 100% {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        50% {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }
      }
      
      .node-active {
        animation: nodeActivate 1.2s ease-out forwards;
      }
      
      .connection-active {
        animation: connectionActivate 1.2s ease-out forwards;
      }
      
      .glow-pulse {
        animation: glowPulse 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const getNodeStyles = (node: Node) => {
    const baseStyles = {
      left: `${node.x}%`,
      top: `${node.y}%`,
      animationDelay: `${node.delay}ms`,
    };

    const typeStyles = {
      user: 'bg-indigo-800/50 backdrop-blur-sm border-indigo-600',
      device: 'bg-gray-800/50 backdrop-blur-sm border-gray-600',
      'local-agent': 'bg-purple-900/50 backdrop-blur-sm border-purple-700',
      'cloud-agent': 'bg-blue-900/50 backdrop-blur-sm border-blue-700',
      database: 'bg-emerald-900/50 backdrop-blur-sm border-emerald-700',
    };

    const iconStyles = {
      user: 'text-indigo-400',
      device: 'text-gray-400',
      'local-agent': 'text-purple-500',
      'cloud-agent': 'text-blue-500',
      database: 'text-emerald-500',
    };

    return { baseStyles, typeStyles: typeStyles[node.type], iconStyles: iconStyles[node.type] };
  };

  return (
    <div ref={containerRef} className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;
          
          return (
            <line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="#374151"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.3"
              className="connection-active"
              style={{ animationDelay: `${conn.delay}ms` }}
            />
          );
        })}
      </svg>
      
      {nodes.map((node) => {
        const IconComponent = node.icon;
        const { baseStyles, typeStyles, iconStyles } = getNodeStyles(node);
        
        return (
          <div
            key={node.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border-2 ${typeStyles} node-active`}
            style={baseStyles}
          >
            <IconComponent className={`w-6 h-6 ${iconStyles}`} />
            
            <div className="absolute inset-0 rounded-full glow-pulse opacity-0" 
                 style={{ animationDelay: `${node.delay + 600}ms` }}></div>
            
            {node.hasLock && (
              <Lock className="absolute -top-1 -right-1 w-4 h-4 text-purple-400 bg-gray-800 rounded-full p-0.5 border border-purple-500" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NetworkAnimation;