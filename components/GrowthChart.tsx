import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { CapturedImage } from '../types';

interface GrowthChartProps {
  images: CapturedImage[];
}

const GrowthChart: React.FC<GrowthChartProps> = ({ images }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || images.length < 2) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = svgRef.current.clientWidth - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = images
      .filter(img => img.confidence !== undefined)
      .map(img => ({
        date: new Date(img.timestamp),
        confidence: img.confidence || 0,
        health: img.healthStatus === 'HEALTHY' ? 100 : img.healthStatus === 'STRESSED' ? 50 : 20
      }));

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5).tickSize(-height).tickFormat(() => ''))
      .style('stroke-dasharray', '3,3')
      .style('stroke', 'rgba(255,255,255,0.05)');

    g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat(() => ''))
      .style('stroke-dasharray', '3,3')
      .style('stroke', 'rgba(255,255,255,0.05)');

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5))
      .style('color', 'rgba(255,255,255,0.3)')
      .style('font-size', '8px')
      .style('font-family', 'monospace');

    g.append('g')
      .call(d3.axisLeft(y).ticks(5))
      .style('color', 'rgba(255,255,255,0.3)')
      .style('font-size', '8px')
      .style('font-family', 'monospace');

    // Confidence Line
    const line = d3.line<any>()
      .x(d => x(d.date))
      .y(d => y(d.confidence))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#84cc16')
      .attr('stroke-width', 2)
      .attr('d', line)
      .style('filter', 'drop-shadow(0 0 4px rgba(132, 204, 22, 0.4))');

    // Health Area
    const area = d3.area<any>()
      .x(d => x(d.date))
      .y0(height)
      .y1(d => y(d.health))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(data)
      .attr('fill', 'rgba(132, 204, 22, 0.1)')
      .attr('d', area);

    // Dots
    g.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.confidence))
      .attr('r', 3)
      .attr('fill', '#84cc16')
      .attr('stroke', '#000')
      .attr('stroke-width', 1);

  }, [images]);

  return (
    <div className="w-full h-[200px] relative">
      <svg ref={svgRef} className="w-full h-full" />
      {images.length < 2 && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] rounded-lg">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Insufficient Data for Neural Projection</p>
        </div>
      )}
    </div>
  );
};

export default GrowthChart;
