"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';

interface Initiative {
  id: number;
  name: string;
  location: string;
  coordinates: [number, number];
  type: string;
  description: string;
  website: string;
}

// Define the proper types for GeoJSON and TopoJSON
interface GeoJSONFeature {
  type: string;
  geometry: any;
  properties: any;
}

interface GeoJSONCollection {
  type: string;
  features: GeoJSONFeature[];
}

const WorldMapChart = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);
  
  useEffect(() => {
    // Global AI initiatives data
    const initiatives: Initiative[] = [
      {
        id: 1,
        name: "AI Safety Center",
        location: "United Kingdom",
        coordinates: [0.1278, 51.5074], // London
        type: "Research",
        description: "UK's flagship AI safety research institute focused on evaluating and testing frontier AI models.",
        website: "https://www.aisafety.gov.uk/"
      },
      {
        id: 2,
        name: "NIST AI Risk Management Framework",
        location: "United States",
        coordinates: [-77.0369, 38.9072], // Washington DC
        type: "Governance",
        description: "Framework to better manage risks to individuals, organizations, and society associated with AI.",
        website: "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        id: 3,
        name: "EU AI Act",
        location: "Belgium",
        coordinates: [4.3517, 50.8503], // Brussels
        type: "Regulation",
        description: "First comprehensive legal framework for AI, categorizing AI systems by risk level.",
        website: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
      },
      {
        id: 4,
        name: "GPAI (Global Partnership on AI)",
        location: "France",
        coordinates: [2.3522, 48.8566], // Paris
        type: "International",
        description: "Multi-stakeholder initiative to bridge theory and practice on AI by supporting research and applied activities.",
        website: "https://gpai.ai/"
      },
      {
        id: 5,
        name: "AI Singapore",
        location: "Singapore",
        coordinates: [103.8198, 1.3521], // Singapore
        type: "National Program",
        description: "National program to anchor deep AI capabilities to create social and economic impacts.",
        website: "https://aisingapore.org/"
      },
      {
        id: 6,
        name: "Beijing Academy of AI",
        location: "China",
        coordinates: [116.4074, 39.9042], // Beijing
        type: "Research",
        description: "Research institute focused on AI ethics and governance in China.",
        website: "https://www.baai.ac.cn/en"
      },
      {
        id: 7,
        name: "OECD AI Policy Observatory",
        location: "France",
        coordinates: [2.3522, 48.8566], // Paris
        type: "Policy",
        description: "Platform for policy makers to share and shape AI policies.",
        website: "https://oecd.ai/"
      },
      {
        id: 8,
        name: "AI Safety Summit",
        location: "United Kingdom",
        coordinates: [-0.5860, 51.5074], // Bletchley Park
        type: "International",
        description: "International summit focused on frontier AI safety and governance.",
        website: "https://www.aisafetysummit.gov.uk/"
      },
      {
        id: 9,
        name: "Partnership on AI",
        location: "United States",
        coordinates: [-122.4194, 37.7749], // San Francisco
        type: "Multi-stakeholder",
        description: "Coalition committed to the responsible use of artificial intelligence.",
        website: "https://partnershiponai.org/"
      },
      {
        id: 10,
        name: "AI4Good Foundation",
        location: "Canada",
        coordinates: [-73.5673, 45.5017], // Montreal
        type: "Non-profit",
        description: "Organization focused on using AI to address global challenges.",
        website: "https://ai4good.org/"
      },
      {
        id: 11,
        name: "Dubai AI Ethics Advisory Board",
        location: "UAE",
        coordinates: [55.2708, 25.2048], // Dubai
        type: "Governance",
        description: "Advisory board guiding ethical AI implementation in Dubai.",
        website: "https://www.digitaldubai.ae/"
      },
      {
        id: 12,
        name: "AI Japan",
        location: "Japan",
        coordinates: [139.6917, 35.6895], // Tokyo
        type: "National Program",
        description: "Japan's national AI strategy focusing on research, development, and implementation.",
        website: "https://www.ai-japan.go.jp/"
      }
    ];
    
    // Initiative type colors
    const typeColors: Record<string, string> = {
      "Research": "#3B82F6", // blue
      "Governance": "#10B981", // green
      "Regulation": "#6366F1", // indigo
      "International": "#8B5CF6", // purple
      "National Program": "#EC4899", // pink
      "Policy": "#F59E0B", // amber
      "Multi-stakeholder": "#EF4444", // red
      "Non-profit": "#14B8A6" // teal
    };
    
    if (!svgRef.current) return;
    
    // Clear any previous content
    d3.select(svgRef.current).selectAll('*').remove();
    
    const width = 960;
    const height = 500;
    
    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');
    
    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 30)
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('font-weight', 'bold')
      .attr('fill', '#333')
      .text('Global AI Safety & Governance Initiatives');
    
    // Create a group for the map
    const g = svg.append('g');
    
    // Add zoom functionality
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });
    
    svg.call(zoom as any);
    
    // Create a projection
    const projection = d3.geoNaturalEarth1()
      .scale(width / 2 / Math.PI)
      .translate([width / 2, height / 2]);
    
    // Create a path generator
    const path = d3.geoPath()
      .projection(projection);
    
    // Load world map data
    d3.json<any>('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((topology) => {
        if (!topology) throw new Error("Failed to load topology data");
        
        // Use a simpler approach - create a basic world map without TopoJSON conversion
        // This avoids the complex typing issues with TopoJSON
        const worldData = {
          type: "FeatureCollection",
          features: []
        };
        
        try {
          // Try to convert TopoJSON to GeoJSON, but handle any errors
          const countries = feature(topology, topology.objects.countries) as unknown as GeoJSONCollection;
          
          // Draw the map
          g.selectAll('path')
            .data(countries.features || [])
            .enter()
            .append('path')
            .attr('d', path as any)
            .attr('fill', '#f0f0f0')
            .attr('stroke', '#ccc')
            .attr('stroke-width', 0.5);
        } catch (error) {
          console.error("Error converting TopoJSON:", error);
          
          // Fallback: Draw a simple world outline
          g.append('rect')
            .attr('width', width)
            .attr('height', height)
            .attr('fill', '#f0f0f0')
            .attr('stroke', '#ccc')
            .attr('stroke-width', 0.5);
        }
        
        // Add initiative points - this will work regardless of the map background
        const points = g.selectAll('.initiative-point')
          .data(initiatives)
          .enter()
          .append('circle')
          .attr('class', 'initiative-point')
          .attr('cx', d => {
            const coords = projection(d.coordinates as [number, number]);
            return coords ? coords[0] : 0;
          })
          .attr('cy', d => {
            const coords = projection(d.coordinates as [number, number]);
            return coords ? coords[1] : 0;
          })
          .attr('r', 8)
          .attr('fill', d => typeColors[d.type])
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5)
          .attr('opacity', 0.8)
          .style('cursor', 'pointer')
          .on('mouseover', function(event, d: Initiative) {
            d3.select(this)
              .attr('r', 12)
              .attr('opacity', 1);
            
            // Show tooltip
            const coords = projection(d.coordinates as [number, number]);
            if (!coords) return;
            const [x, y] = coords;
            
            const tooltip = g.append('g')
              .attr('class', 'tooltip')
              .attr('transform', `translate(${x + 15}, ${y - 15})`);
            
            tooltip.append('rect')
              .attr('width', 200)
              .attr('height', 80)
              .attr('rx', 5)
              .attr('ry', 5)
              .attr('fill', 'white')
              .attr('stroke', '#ccc')
              .attr('stroke-width', 1)
              .attr('opacity', 0.9);
            
            tooltip.append('text')
              .attr('x', 10)
              .attr('y', 20)
              .attr('font-weight', 'bold')
              .text(d.name);
            
            tooltip.append('text')
              .attr('x', 10)
              .attr('y', 40)
              .text(`${d.type} • ${d.location}`);
            
            tooltip.append('text')
              .attr('x', 10)
              .attr('y', 60)
              .attr('font-size', '12px')
              .text(d.description.substring(0, 50) + '...');
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('r', 8)
              .attr('opacity', 0.8);
            
            g.selectAll('.tooltip').remove();
          })
          .on('click', function(event, d: Initiative) {
            setSelectedInitiative(d);
          });
        
        // Add legend
        const legend = svg.append('g')
          .attr('class', 'legend')
          .attr('transform', `translate(20, ${height - 180})`);
        
        legend.append('rect')
          .attr('width', 180)
          .attr('height', 170)
          .attr('fill', 'white')
          .attr('opacity', 0.8)
          .attr('rx', 5)
          .attr('ry', 5)
          .attr('stroke', '#ccc')
          .attr('stroke-width', 1);
        
        legend.append('text')
          .attr('x', 10)
          .attr('y', 20)
          .attr('font-weight', 'bold')
          .text('Initiative Types');
        
        const types = Object.keys(typeColors);
        types.forEach((type, i) => {
          legend.append('circle')
            .attr('cx', 15)
            .attr('cy', 40 + i * 18)
            .attr('r', 6)
            .attr('fill', typeColors[type]);
          
          legend.append('text')
            .attr('x', 30)
            .attr('y', 44 + i * 18)
            .attr('font-size', '12px')
            .text(type);
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
      
      {selectedInitiative && (
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-md max-w-md">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">{selectedInitiative.name}</h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedInitiative(null)}
            >
              ×
            </button>
          </div>
          <div className="mt-1 text-sm text-gray-600">
            <span className="inline-block px-2 py-1 rounded-full text-xs mr-2" 
              style={{backgroundColor: selectedInitiative.type === "Research" ? "#3B82F6" : 
                      selectedInitiative.type === "Governance" ? "#10B981" :
                      selectedInitiative.type === "Regulation" ? "#6366F1" :
                      selectedInitiative.type === "International" ? "#8B5CF6" :
                      selectedInitiative.type === "National Program" ? "#EC4899" :
                      selectedInitiative.type === "Policy" ? "#F59E0B" :
                      selectedInitiative.type === "Multi-stakeholder" ? "#EF4444" : "#14B8A6",
                      color: "white"}}
            >
              {selectedInitiative.type}
            </span>
            <span>{selectedInitiative.location}</span>
          </div>
          <p className="mt-2 text-sm">{selectedInitiative.description}</p>
          <a 
            href={selectedInitiative.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-600 hover:underline text-sm"
          >
            Visit Website →
          </a>
        </div>
      )}
      
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>This map displays key global initiatives focused on AI safety, governance, and regulation. Click on any point to learn more about the initiative.</p>
      </div>
    </div>
  );
};

export default WorldMapChart;
