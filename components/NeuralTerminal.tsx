import React from 'react';

interface NeuralTerminalProps {
  messages: string[];
}

const NeuralTerminal: React.FC<NeuralTerminalProps> = ({ messages }) => {
  return (
    <div className="bg-black/60 border border-white/5 rounded-xl p-4 font-mono text-[10px] h-[150px] overflow-y-auto custom-scrollbar space-y-1">
      <div className="text-cyber-accent/40 mb-2 border-b border-white/5 pb-1 flex justify-between">
        <span>SYSTEM_LOG_STREAM</span>
        <span className="animate-pulse">● LIVE</span>
      </div>
      {messages.map((msg, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
          <span className={msg.includes('ERROR') ? 'text-red-400' : 'text-gray-400'}>{msg}</span>
        </div>
      ))}
      <div className="flex gap-2">
        <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
        <span className="text-cyber-accent animate-pulse">_</span>
      </div>
    </div>
  );
};

export default NeuralTerminal;
