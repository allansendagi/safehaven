"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GlobalReadinessVisualization = () => {
  const svgRef = useRef(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Clear any previous content
    d3.select(svgRef.current).selectAll('*').remove();
    
    const width = svgRef.current.clientWidth;
    const height = 200;
    
    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);
    
    // Sample data for countries and their readiness scores
    const countries = [
      { name: 'North America', score: 65, color: '#10B981' },
      { name: 'Europe', score: 60, color: '#F59E0B' },
      { name: 'Asia', score: 50, color: '#F59E0B' },
      { name: 'South America', score: 40, color: '#F97316' },
      { name: 'Africa', score: 30, color: '#EF4444' },
      { name: 'Oceania', score: 55, color: '#F59E0B' },
    ];
    
    // Create a force simulation
    const simulation = d3.forceSimulation(countries)
      .force('x', d3.forceX(width / 2).strength(0.05))
      .force('y', d3.forceY(height / 2).strength(0.05))
      .force('collide', d3.forceCollide().radius(d => Math.sqrt(d.score) * 2 + 10).strength(0.8))
      .on('tick', ticked);
    
    // Create circles for each country
    const circles = svg.selectAll('g')
      .data(countries)
      .enter()
      .append('g')
      .attr('class', 'country-bubble');
    
    // Add circles
    circles.append('circle')
      .attr('r', d => Math.sqrt(d.score) * 2)
      .attr('fill', d => d.color)
      .attr('fill-opacity', 0.7)
      .attr('stroke', d => d.color)
      .attr('stroke-width', 2);
    
    // Add country names
    circles.append('text')
      .text(d => d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .attr('font-size', '10px')
      .attr('fill', 'white')
      .attr('font-weight', 'bold');
    
    // Add score labels
    circles.append('text')
      .text(d => `${d.score}%`)
      .attr('text-anchor', 'middle')
      .attr('dy', 18)
      .attr('font-size', '9px')
      .attr('fill', 'white');
    
    // Update positions on each tick
    function ticked() {
      circles.attr('transform', d => `translate(${d.x},${d.y})`);
    }
    
    // Add responsive resize handler
    const resizeVisualization = () => {
      if (!svgRef.current) return;
      
      const newWidth = svgRef.current.clientWidth;
      
      // Update SVG width
      svg.attr('width', newWidth);
      
      // Update force simulation
      simulation
        .force('x', d3.forceX(newWidth / 2).strength(0.05))
        .alpha(0.3)
        .restart();
    };
    
    window.addEventListener('resize', resizeVisualization);
    
    return () => {
      window.removeEventListener('resize', resizeVisualization);
      simulation.stop();
    };
  }, []);
  
  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};

export default GlobalReadinessVisualization;
