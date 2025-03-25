"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ReadinessDataItem {
  category: string;
  score: number;
}

const ReadinessChart = () => {
  // Sample readiness data
  const readinessData: ReadinessDataItem[] = [
    { category: 'Governance Readiness', score: 45 },
    { category: 'Technical Literacy', score: 60 },
    { category: 'Ethical Frameworks', score: 35 },
    { category: 'Infrastructure', score: 70 },
    { category: 'Social Adaptation', score: 30 },
  ];

  const chartRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    // Clear any previous chart
    d3.select(chartRef.current).selectAll('*').remove();
    
    const margin = { top: 20, right: 30, bottom: 40, left: 150 };
    const width = chartRef.current.clientWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    // Create SVG
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Create scales
    const x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);
    
    const y = d3.scaleBand()
      .domain(readinessData.map(d => d.category))
      .range([0, height])
      .padding(0.3);
    
    // Add X axis
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5).tickFormat(d => `${d}%`) as any)
      .selectAll('text')
      .style('font-size', '12px');
    
    // Add Y axis
    svg.append('g')
      .call(d3.axisLeft(y) as any)
      .selectAll('text')
      .style('font-size', '12px')
      .style('font-weight', '500');
    
    // Color function
    const getColor = (score: number) => {
      if (score >= 70) return '#10B981'; // green
      if (score >= 50) return '#F59E0B'; // yellow
      if (score >= 30) return '#F97316'; // orange
      return '#EF4444'; // red
    };
    
    // Add bars
    svg.selectAll('bars')
      .data(readinessData)
      .enter()
      .append('rect')
      .attr('y', d => y(d.category) as number)
      .attr('height', y.bandwidth())
      .attr('x', 0)
      .attr('width', 0) // Start with width 0 for animation
      .attr('fill', d => getColor(d.score))
      .attr('rx', 4) // Rounded corners
      .attr('ry', 4)
      .transition() // Add transition
      .duration(1000)
      .attr('width', d => x(d.score));
    
    // Add score labels
    svg.selectAll('score')
      .data(readinessData)
      .enter()
      .append('text')
      .attr('class', 'score-label')
      .attr('y', d => (y(d.category) as number) + y.bandwidth() / 2 + 5)
      .attr('x', d => x(d.score) + 5)
      .text(d => `${d.score}%`)
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .style('fill', '#1e293b')
      .style('opacity', 0) // Start with opacity 0 for animation
      .transition() // Add transition
      .duration(1000)
      .delay(500)
      .style('opacity', 1);
    
    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', -margin.top / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Global Readiness Assessment');
    
    // Add responsive resize handler
    const resizeChart = () => {
      if (!chartRef.current) return;
      
      const newWidth = chartRef.current.clientWidth - margin.left - margin.right;
      
      // Update scales
      x.range([0, newWidth]);
      
      // Update SVG
      d3.select(chartRef.current).select('svg')
        .attr('width', newWidth + margin.left + margin.right);
      
      // Update X axis
      svg.select<SVGGElement>('.x-axis')
        .call(d3.axisBottom(x).ticks(5).tickFormat(d => `${d}%`) as any);
      
      // Update bars
      svg.selectAll<SVGRectElement, ReadinessDataItem>('rect')
        .attr('width', d => x(d.score));
      
      // Update labels
      svg.selectAll<SVGTextElement, ReadinessDataItem>('text.score-label')
        .attr('x', d => x(d.score) + 5);
    };
    
    window.addEventListener('resize', resizeChart);
    
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);
  
  // Calculate average
  const calculateAverage = (data: ReadinessDataItem[]) => {
    const sum = data.reduce((acc, item) => acc + item.score, 0);
    return Math.round(sum / data.length);
  };
  
  // Get message based on score
  const getReadinessMessage = (score: number) => {
    if (score >= 70) return 'Strong readiness';
    if (score >= 50) return 'Moderate readiness';
    if (score >= 30) return 'Limited readiness';
    return 'Critical improvement needed';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div ref={chartRef} className="w-full h-[400px]"></div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Global Average</span>
          <span className="font-bold text-lg">{calculateAverage(readinessData)}%</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          The Societal Readiness Index indicates significant room for improvement across all dimensions, 
          particularly in Social Adaptation and Ethical Frameworks.
        </p>
      </div>
    </div>
  );
};

export default ReadinessChart;
