"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';

const WorldMapChart = () => {
  const svgRef = useRef(null);
  
  useEffect(() => {
    // Sample data for readiness scores by country
    const readinessData = {
      USA: 68,
      CAN: 72,
      GBR: 65,
      DEU: 70,
      FRA: 63,
      ESP: 58,
      ITA: 55,
      JPN: 75,
      KOR: 73,
      AUS: 67,
      NZL: 66,
      CHN: 60,
      IND: 45,
      BRA: 48,
      RUS: 52,
      ZAF: 43,
      NGA: 35,
      EGY: 40,
      SAU: 55,
      ARE: 62,
      // Add more countries as needed
    };
    
    const getColor = (score) => {
      if (score >= 70) return '#10B981'; // green
      if (score >= 55) return '#F59E0B'; // yellow
      if (score >= 40) return '#F97316'; // orange
      return '#EF4444'; // red
    };
    
    const width = 960;
    const height = 500;
    
    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');
    
    // Clear any previous content
    svg.selectAll('*').remove();
    
    // Create a group for the map
    const g = svg.append('g');
    
    // Add zoom functionality
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });
    
    svg.call(zoom);
    
    // Create a projection
    const projection = d3.geoNaturalEarth1()
      .scale(width / 2 / Math.PI)
      .translate([width / 2, height / 2]);
    
    // Create a path generator
    const path = d3.geoPath()
      .projection(projection);
    
    // Load world map data
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((topology) => {
        // Convert TopoJSON to GeoJSON
        const countries = feature(topology, topology.objects.countries);
        
        // Draw the map
        g.selectAll('path')
          .data(countries.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('fill', (d) => {
            // Get the country code
            const countryCode = d.properties.iso_a3;
            // Get the readiness score for this country
            const score = readinessData[countryCode];
            // Return color based on score, or gray if no data
            return score ? getColor(score) : '#E5E7EB';
          })
          .attr('stroke', '#FFFFFF')
          .attr('stroke-width', 0.5)
          .on('mouseover', function(event, d) {
            // Highlight country on hover
            d3.select(this)
              .attr('stroke-width', 1.5)
              .attr('stroke', '#000000');
            
            // Show tooltip
            const countryCode = d.properties.iso_a3;
            const score = readinessData[countryCode];
            
            if (score) {
              const [x, y] = path.centroid(d);
              
              g.append('text')
                .attr('class', 'tooltip')
                .attr('x', x)
                .attr('y', y)
                .attr('text-anchor', 'middle')
                .attr('font-size', '12px')
                .attr('font-weight', 'bold')
                .attr('fill', '#000000')
                .attr('stroke', '#FFFFFF')
                .attr('stroke-width', 0.5)
                .attr('paint-order', 'stroke')
                .text(`${d.properties.name}: ${score}%`);
            }
          })
          .on('mouseout', function() {
            // Reset highlight
            d3.select(this)
              .attr('stroke-width', 0.5)
              .attr('stroke', '#FFFFFF');
            
            // Remove tooltip
            g.selectAll('.tooltip').remove();
          });
      })
      .catch((error) => {
        console.error('Error loading world map data:', error);
      });
    
    return () => {
      // Cleanup
      svg.selectAll('*').remove();
    };
  }, []);
  
  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};

export default WorldMapChart;
