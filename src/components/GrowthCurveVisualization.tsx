"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface TimelineEvent {
  year: number;
  aiEvent: string;
  societyEvent: string;
  aiY: number;
  societyY: number;
}

const GrowthCurveVisualization = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Clear previous content
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    
    const width = svgRef.current.clientWidth;
    const height = 300;
    
    // Set SVG dimensions
    svg.attr('width', width).attr('height', height);
    
    // Define margins and chart dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Create the main chart group
    const chartGroup = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    
    // Timeline data
    const timelineData: TimelineEvent[] = [
      { year: 2020, aiEvent: "GPT-3 launches", societyEvent: "EU proposes AI Act", aiY: 30, societyY: 25 },
      { year: 2021, aiEvent: "AlphaFold 2 released", societyEvent: "First AI ethics frameworks", aiY: 40, societyY: 30 },
      { year: 2022, aiEvent: "Stable Diffusion & DALL-E 2", societyEvent: "U.S. CHIPS Act", aiY: 55, societyY: 35 },
      { year: 2023, aiEvent: "GPT-4 released", societyEvent: "Global AI safety summit", aiY: 75, societyY: 40 },
      { year: 2024, aiEvent: "Multimodal AI systems", societyEvent: "International AI treaties", aiY: 100, societyY: 45 },
      { year: 2025, aiEvent: "AI co-scientist systems", societyEvent: "AI literacy programs", aiY: 130, societyY: 50 },
    ];
    
    // Create scales
    const xScale = d3.scaleLinear()
      .domain([2020, 2025])
      .range([0, chartWidth]);
    
    const yScale = d3.scaleLinear()
      .domain([0, 150])
      .range([chartHeight, 0]);
    
    // Create axes
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d => d.toString())
      .ticks(6);
    
    const yAxis = d3.axisLeft(yScale)
      .tickFormat(() => "")
      .ticks(5);
    
    // Append a dedicated x-axis group
    const xAxisGroup = chartGroup.append('g')
      .attr('transform', `translate(0, ${chartHeight})`);
    
    // Use type casting to satisfy TypeScript:
    xAxisGroup
      .call(xAxis as unknown as (selection: d3.Selection<SVGGElement, unknown, null, undefined>) => void)
      .selectAll('text')
      .style('font-size', '10px');
    
    // Append a dedicated y-axis group
    chartGroup.append('g')
      .call(yAxis as unknown as (selection: d3.Selection<SVGGElement, unknown, null, undefined>) => void);
    
    // Add axis labels, curves, markers, etc.
    // (Your remaining code goes here)
    
  }, []);
  
  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full"></svg>
      <div className="mt-4 text-xs text-gray-600 text-center">
        <p>The widening gap between AI capabilities and societal readiness creates unprecedented risks and missed opportunities.</p>
      </div>
    </div>
  );
};

export default GrowthCurveVisualization;
