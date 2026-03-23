import React, { useMemo } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  Node,
  Edge,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Sprout, Droplet, Sun, Flower, CheckCircle, Activity } from 'lucide-react';

const AppFlow: React.FC = () => {
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'input',
      data: { label: <div className="flex items-center gap-2"><Sprout size={16} className="text-green-400" /> Germination</div> },
      position: { x: 250, y: 0 },
      style: { background: '#1a2333', color: '#fff', border: '1px solid #22d3ee', borderRadius: '8px', padding: '10px' },
    },
    {
      id: '2',
      data: { label: <div className="flex items-center gap-2"><Droplet size={16} className="text-blue-400" /> Seedling</div> },
      position: { x: 250, y: 100 },
      style: { background: '#1a2333', color: '#fff', border: '1px solid #22d3ee', borderRadius: '8px', padding: '10px' },
    },
    {
      id: '3',
      data: { label: <div className="flex items-center gap-2"><Sun size={16} className="text-yellow-400" /> Vegetative</div> },
      position: { x: 250, y: 200 },
      style: { background: '#1a2333', color: '#fff', border: '1px solid #22d3ee', borderRadius: '8px', padding: '10px' },
    },
    {
      id: '4',
      data: { label: <div className="flex items-center gap-2"><Flower size={16} className="text-pink-400" /> Flowering</div> },
      position: { x: 250, y: 300 },
      style: { background: '#1a2333', color: '#fff', border: '1px solid #22d3ee', borderRadius: '8px', padding: '10px' },
    },
    {
      id: '5',
      type: 'output',
      data: { label: <div className="flex items-center gap-2"><CheckCircle size={16} className="text-cyber-success" /> Harvest</div> },
      position: { x: 250, y: 400 },
      style: { background: '#1a2333', color: '#fff', border: '1px solid #22d3ee', borderRadius: '8px', padding: '10px' },
    },
  ];

  const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#22d3ee' }, style: { stroke: '#22d3ee' } },
    { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#22d3ee' }, style: { stroke: '#22d3ee' } },
    { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#22d3ee' }, style: { stroke: '#22d3ee' } },
    { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#22d3ee' }, style: { stroke: '#22d3ee' } },
  ];

  return (
    <div className="h-full w-full bg-[#0a0f1a] rounded-xl border border-white/10 overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-[12px] font-mono font-bold text-cyber-accent uppercase tracking-[0.2em] flex items-center gap-2">
          <Activity size={14} /> Growth Flow Architecture
        </h3>
      </div>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        style={{ background: '#0a0f1a' }}
      >
        <Background color="#1e293b" gap={20} />
        <Controls />
        <MiniMap nodeColor="#22d3ee" maskColor="rgba(0, 0, 0, 0.5)" />
      </ReactFlow>
    </div>
  );
};

export default AppFlow;
