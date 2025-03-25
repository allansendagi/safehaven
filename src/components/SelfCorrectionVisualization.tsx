"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SelfCorrectionVisualization = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Clear any previous content
    d3.select(svgRef.current).selectAll('*').remove();
    
    const width = svgRef.current.clientWidth;
    const height = 300;
    
    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);
    
    // Define the center point and radius for the circular flow
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;
    
    // Create a group for the visualization
    const vizGroup = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`);
    
    // Define the three stages of the self-correction process
    const stages = [
      { id: 'diagnosis', name: 'Diagnosis', description: 'SRI identifies weak points', color: '#3B82F6', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
      { id: 'intervention', name: 'Intervention', description: 'Targeted programs & policies', color: '#10B981', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4' },
      { id: 'remeasurement', name: 'Re-measurement', description: 'Recalculate SRI scores', color: '#EC4899', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
    ];
    
    // Calculate positions for each stage (equally spaced around a circle)
    const angleStep = (2 * Math.PI) / stages.length;
    stages.forEach((stage, i) => {
      const angle = i * angleStep - Math.PI / 2; // Start from the top
      stage['x'] = radius * Math.cos(angle);
      stage['y'] = radius * Math.sin(angle);
    });
    
    // Draw connecting arrows between stages (circular flow)
    const arrowPath = d3.path();
    arrowPath.arc(0, 0, radius, 0, 2 * Math.PI);
    
    vizGroup.append('path')
      .attr('d', arrowPath.toString())
      .attr('fill', 'none')
      .attr('stroke', '#CBD5E1')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5');
    
    // Add arrowheads to the circular path
    stages.forEach((stage, i) => {
      const nextIndex = (i + 1) % stages.length;
      const currentAngle = i * angleStep - Math.PI / 2;
      const nextAngle = nextIndex * angleStep - Math.PI / 2;
      
      // Calculate a point along the arc for the arrowhead
      const midAngle = (currentAngle + nextAngle) / 2;
      const arrowX = radius * Math.cos(midAngle);
      const arrowY = radius * Math.sin(midAngle);
      
      // Calculate the angle for the arrowhead
      const arrowAngle = midAngle + Math.PI / 2;
      
      // Draw the arrowhead
      vizGroup.append('polygon')
        .attr('points', '0,-5 5,5 -5,5')
        .attr('transform', `translate(${arrowX}, ${arrowY}) rotate(${arrowAngle * 180 / Math.PI})`)
        .attr('fill', '#64748B');
    });
    
    // Create stage nodes
    const stageGroups = vizGroup.selectAll('.stage')
      .data(stages)
      .enter()
      .append('g')
      .attr('class', 'stage')
      .attr('transform', d => `translate(${d['x']}, ${d['y']})`);
    
    // Add circular backgrounds for each stage
    stageGroups.append('circle')
      .attr('r', 40)
      .attr('fill', 'white')
      .attr('stroke', d => d.color)
      .attr('stroke-width', 3);
    
    // Add icons to each stage
    stageGroups.append('svg')
      .attr('width', 30)
      .attr('height', 30)
      .attr('x', -15)
      .attr('y', -15)
      .append('path')
      .attr('d', d => d.icon)
      .attr('fill', 'none')
      .attr('stroke', d => d.color)
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round');
    
    // Add stage names
    stageGroups.append('text')
      .attr('y', 60)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '14px')
      .attr('fill', d => d.color)
      .text(d => d.name);
    
    // Add stage descriptions
    stageGroups.append('text')
      .attr('y', 78)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#64748B')
      .text(d => d.description);
    
    // Add central element representing the SRI
    vizGroup.append('circle')
      .attr('r', 50)
      .attr('fill', 'white')
      .attr('stroke', '#1E40AF')
      .attr('stroke-width', 2);
    
    vizGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '16px')
      .attr('fill', '#1E40AF')
      .attr('y', -10)
      .text('Societal');
    
    vizGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '16px')
      .attr('fill', '#1E40AF')
      .attr('y', 10)
      .text('Readiness');
    
    vizGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '16px')
      .attr('fill', '#1E40AF')
      .attr('y', 30)
      .text('Index');
    
    // Add the Amsterdam case study example
    const caseStudyGroup = svg.append('g')
      .attr('transform', `translate(${width - 150}, ${height - 80})`);
    
    caseStudyGroup.append('rect')
      .attr('width', 140)
      .attr('height', 70)
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('fill', '#F8FAFC')
      .attr('stroke', '#CBD5E1')
      .attr('stroke-width', 1);
    
    caseStudyGroup.append('text')
      .attr('x', 70)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .attr('fill', '#1E40AF')
      .text('Amsterdam Pilot');
    
    caseStudyGroup.append('text')
      .attr('x', 70)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#64748B')
      .text('SRI Score: 62 → 78');
    
    caseStudyGroup.append('text')
      .attr('x', 70)
      .attr('y', 55)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#10B981')
      .text('(+16 points in 6 months)');
    
    // Add responsive resize handler
    const resizeVisualization = () => {
      if (!svgRef.current) return;
      
      const newWidth = svgRef.current.clientWidth;
      const newHeight = 300;
      
      // Update SVG dimensions
      svg.attr('width', newWidth)
         .attr('height', newHeight);
      
      // Update center point
      const newCenterX = newWidth / 2;
      
      // Update visualization group position
      vizGroup.attr('transform', `translate(${newCenterX}, ${centerY})`);
      
      // Update case study position
      caseStudyGroup.attr('transform', `translate(${newWidth - 150}, ${newHeight - 80})`);
    };
    
    window.addEventListener('resize', resizeVisualization);
    
    return () => {
      window.removeEventListener('resize', resizeVisualization);
    };
  }, []);
  
  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full"></svg>
      <div className="mt-4 text-xs text-gray-600 text-center">
        <p>The self-correcting framework ensures that as AI evolves, society adapts—closing the readiness gap one pillar at a time.</p>
      </div>
    </div>
  );
};

export default SelfCorrectionVisualization;
