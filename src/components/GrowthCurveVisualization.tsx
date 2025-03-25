import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { NumberValue } from 'd3';

interface DataPoint {
  year: number;
  aiAdvancement: number;
  societalAdaptation: number;
}

const GrowthCurveVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Sample data
  const timelineData: DataPoint[] = [
    { year: 2010, aiAdvancement: 10, societalAdaptation: 10 },
    { year: 2015, aiAdvancement: 30, societalAdaptation: 15 },
    { year: 2020, aiAdvancement: 60, societalAdaptation: 25 },
    { year: 2025, aiAdvancement: 90, societalAdaptation: 40 },
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    // ### SVG Setup
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = 300; // Fixed height
    const margin = { top: 20, right: 50, bottom: 50, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Clear previous content
    svg.selectAll('*').remove();

    // Append chart group
    const chartGroup = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // ### Scales
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(timelineData, d => d.year) as [number, number])
      .range([0, chartWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([chartHeight, 0]);

    // ### Axis Generators
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
    const yAxis = d3.axisLeft(yScale);

    // ### Create X-Axis Group
    const xAxisGroup = chartGroup
      .append('g')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(xAxis);

    // ### Create X-Axis Label
    const xAxisLabel = chartGroup
      .append('text')
      .attr('x', chartWidth / 2)
      .attr('y', chartHeight + 35)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .text('Year');

    // ### Create Y-Axis
    chartGroup.append('g').call(yAxis);

    // ### Line and Area Generators
    const aiLine = d3
      .line<DataPoint>()
      .x(d => xScale(d.year))
      .y(d => yScale(d.aiAdvancement));

    const societyLine = d3
      .line<DataPoint>()
      .x(d => xScale(d.year))
      .y(d => yScale(d.societalAdaptation));

    const gapArea = d3
      .area<DataPoint>()
      .x(d => xScale(d.year))
      .y0(d => yScale(d.societalAdaptation))
      .y1(d => yScale(d.aiAdvancement));

    // ### Add AI Advancement Curve
    chartGroup
      .append('path')
      .datum(timelineData)
      .attr('class', 'ai-line')
      .attr('fill', 'none')
      .attr('stroke', '#3B82F6')
      .attr('stroke-width', 3)
      .attr('d', aiLine);

    // ### Add Societal Adaptation Curve
    chartGroup
      .append('path')
      .datum(timelineData)
      .attr('class', 'society-line')
      .attr('fill', 'none')
      .attr('stroke', '#10B981')
      .attr('stroke-width', 3)
      .attr('d', societyLine);

    // ### Add Gap Area
    chartGroup
      .append('path')
      .datum(timelineData)
      .attr('class', 'gap-area')
      .attr('fill', '#EF4444')
      .attr('fill-opacity', 0.1)
      .attr('d', gapArea);

    // ### Add Legend
    const legend = chartGroup
      .append('g')
      .attr('transform', `translate(${chartWidth - 150}, 10)`);

    legend
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', '#3B82F6');

    legend
      .append('text')
      .attr('x', 15)
      .attr('y', 10)
      .attr('font-size', '12px')
      .text('AI Advancement');

    legend
      .append('rect')
      .attr('x', 0)
      .attr('y', 20)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', '#10B981');

    legend
      .append('text')
      .attr('x', 15)
      .attr('y', 30)
      .attr('font-size', '12px')
      .text('Societal Adaptation');

    // ### Resize Handler
    const resizeVisualization = () => {
      if (!svgRef.current) return;

      const newWidth = svgRef.current.clientWidth;
      const newChartWidth = newWidth - margin.left - margin.right;

      // Update xScale range
      xScale.range([0, newChartWidth]);

      // Update x-axis
      xAxisGroup.call(xAxis);

      // Update x-axis label position
      xAxisLabel.attr('x', newChartWidth / 2);

      // Update curves
      chartGroup.select('.ai-line').attr('d', aiLine);
      chartGroup.select('.society-line').attr('d', societyLine);
      chartGroup.select('.gap-area').attr('d', gapArea);

      // Update legend position
      legend.attr('transform', `translate(${newChartWidth - 150}, 10)`);
    };

    // Attach resize event listener
    window.addEventListener('resize', resizeVisualization);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeVisualization);
    };
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <svg ref={svgRef} style={{ width: '100%', height: '300px' }}></svg>
    </div>
  );
};

export default GrowthCurveVisualization;
