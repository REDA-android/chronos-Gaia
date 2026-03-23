import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { CapturedImage } from '../types';

interface TelemetryChartProps {
  images: CapturedImage[];
}

const TelemetryChart: React.FC<TelemetryChartProps> = ({ images }) => {
  const chartData = images.slice(-10).map((img, idx) => ({
    name: idx,
    confidence: img.confidence || 0,
    health: img.healthStatus === 'HEALTHY' ? 100 : img.healthStatus === 'STRESSED' ? 50 : 20,
  }));

  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorConf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#84cc16" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
          <XAxis dataKey="name" hide />
          <YAxis hide domain={[0, 100]} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff10', borderRadius: '8px', fontSize: '10px' }}
            itemStyle={{ color: '#84cc16' }}
            labelStyle={{ display: 'none' }}
          />
          <Area type="monotone" dataKey="confidence" stroke="#84cc16" fillOpacity={1} fill="url(#colorConf)" strokeWidth={2} />
          <Area type="monotone" dataKey="health" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHealth)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TelemetryChart;
