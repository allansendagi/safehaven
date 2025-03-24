"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Region {
  name: string;
  score: number;
  rank: number;
  color: string;
  countries: { name: string; score: number; rank: number }[];
}

const GlobalReadinessVisualization = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Clear any previous content
    d3.select(svgRef.current).selectAll('*').remove();
    
    const width = svgRef.current.clientWidth;
    const height = 400; // Increased height for better visualization
    
    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);
    
    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 30)
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('font-weight', 'bold')
      .attr('fill', '#333')
      .text('Global AI Readiness Index 2024');
    
    // Add subtitle with data source
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 55)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', '#666')
      .text('Data source: Oxford Insights Government AI Readiness Index');
    
    // Data from Oxford Insights Government AI Readiness Index 2024
    const regions: Region[] = [
      { name: 'North America', score: 82.60, rank: 1, color: '#10B981', 
        countries: [
          { name: 'United States', score: 87.03, rank: 1 },
          { name: 'Canada', score: 78.18, rank: 6 }
        ]
      },
      { name: 'Western Europe', score: 70.50, rank: 2, color: '#3B82F6',
        countries: [
          { name: 'United Kingdom', score: 81.12, rank: 2 },
          { name: 'France', score: 79.36, rank: 4 }
        ]
      },
      { name: 'East Asia', score: 65.30, rank: 3, color: '#6366F1',
        countries: [
          { name: 'Singapore', score: 80.20, rank: 3 },
          { name: 'South Korea', score: 79.80, rank: 5 }
        ]
      },
      { name: 'Oceania', score: 60.40, rank: 4, color: '#8B5CF6',
        countries: [
          { name: 'Australia', score: 75.60, rank: 8 },
          { name: 'New Zealand', score: 72.10, rank: 12 }
        ]
      },
      { name: 'Middle East', score: 55.20, rank: 5, color: '#EC4899',
        countries: [
          { name: 'UAE', score: 74.30, rank: 9 },
          { name: 'Israel', score: 73.50, rank: 10 }
        ]
      },
      { name: 'Latin America', score: 45.80, rank: 6, color: '#F59E0B',
        countries: [
          { name: 'Chile', score: 65.40, rank: 20 },
          { name: 'Brazil', score: 62.30, rank: 25 }
        ]
      },
      { name: 'Africa', score: 35.60, rank: 7, color: '#EF4444',
        countries: [
          { name: 'South Africa', score: 55.20, rank: 40 },
          { name: 'Kenya', score: 48.70, rank: 52 }
        ]
      },
    ];
    
    // Create horizontal bar chart
    const margin = { top: 80, right: 30, bottom: 50, left: 150 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, chartWidth]);
    
    const yScale = d3.scaleBand()
      .domain(regions.map(d => d.name))
      .range([0, chartHeight])
      .padding(0.3);
    
    // Create chart group
    const chartGroup = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    
    // Add x-axis
    chartGroup.append('g')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale) as any)
      .selectAll('text')
      .style('font-size', '10px');
    
    // Add x-axis label
    chartGroup.append('text')
      .attr('x', chartWidth / 2)
      .attr('y', chartHeight + 40)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .text('AI Readiness Score (0-100)');
    
    // Add y-axis
    chartGroup.append('g')
      .call(d3.axisLeft(yScale) as any)
      .selectAll('text')
      .style('font-size', '12px')
      .style('font-weight', 'bold');
    
    // Add bars
    chartGroup.selectAll('.bar')
      .data(regions)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', d => yScale(d.name) as number)
      .attr('height', yScale.bandwidth())
      .attr('x', 0)
      .attr('width', d => xScale(d.score))
      .attr('fill', d => d.color)
      .attr('rx', 4) // Rounded corners
      .attr('ry', 4);
    
    // Add score labels
    chartGroup.selectAll('.score-label')
      .data(regions)
      .enter()
      .append('text')
      .attr('class', 'score-label')
      .attr('x', d => xScale(d.score) + 5)
      .attr('y', d => (yScale(d.name) as number) + yScale.bandwidth() / 2 + 4)
      .attr('font-size', '12px')
      .attr('fill', '#333')
      .text(d => d.score.toFixed(1));
    
    // Add rank labels
    chartGroup.selectAll('.rank-label')
      .data(regions)
      .enter()
      .append('text')
      .attr('class', 'rank-label')
      .attr('x', -30)
      .attr('y', d => (yScale(d.name) as number) + yScale.bandwidth() / 2 + 4)
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'middle')
      .attr('fill', '#333')
      .text(d => `#${d.rank}`);
    
    // Add responsive resize handler
    const resizeVisualization = () => {
      if (!svgRef.current) return;
      
      const newWidth = svgRef.current.clientWidth;
      
      // Update SVG width
      svg.attr('width', newWidth);
      
      // Update chart dimensions
      const newChartWidth = newWidth - margin.left - margin.right;
      
      // Update scales
      xScale.range([0, newChartWidth]);
      
      // Update x-axis
      chartGroup.select('g')
        .call(d3.axisBottom(xScale) as any);
      
      // Update x-axis label
      chartGroup.select('text')
        .attr('x', newChartWidth / 2);
      
      // Update bars
      chartGroup.selectAll<SVGRectElement, Region>('.bar')
        .attr('width', d => xScale(d.score));
      
      // Update score labels
      chartGroup.selectAll<SVGTextElement, Region>('.score-label')
        .attr('x', d => xScale(d.score) + 5);
      
      // Update title and subtitle
      svg.select('text:nth-child(1)')
        .attr('x', newWidth / 2);
      
      svg.select('text:nth-child(2)')
        .attr('x', newWidth / 2);
    };
    
    window.addEventListener('resize', resizeVisualization);
    
    return () => {
      window.removeEventListener('resize', resizeVisualization);
    };
  }, []);
  
  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full"></svg>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>The Global AI Readiness Index measures how prepared countries and regions are for the implementation and adoption of artificial intelligence technologies. North America leads with the highest readiness score, followed by Western Europe and East Asia.</p>
      </div>
    </div>
  );
};

export default GlobalReadinessVisualization;
