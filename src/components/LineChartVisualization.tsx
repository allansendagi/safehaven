"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// Define the data structure
interface DataPoint {
  year: number;
  value: number;
}

const LineChartVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear existing SVG content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Initial dimensions
    const width = svgRef.current.clientWidth;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Set SVG dimensions
    svg.attr("width", width).attr("height", height);

    // Create chart container
    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Sample data
    const data: DataPoint[] = [
      { year: 2020, value: 30 },
      { year: 2021, value: 40 },
      { year: 2022, value: 55 },
      { year: 2023, value: 75 },
      { year: 2024, value: 100 },
      { year: 2025, value: 130 },
    ];

    // Define scales
    const xScale = d3.scaleLinear().domain([2020, 2025]).range([0, chartWidth]);
    const yScale = d3.scaleLinear().domain([0, 150]).range([chartHeight, 0]);

    // Manually create x-axis
    const xTicks = xScale.ticks(6); // Generate 6 ticks
    const xAxisGroup = chartGroup
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`);

    // Add x-axis tick lines
    xAxisGroup
      .selectAll("line")
      .data(xTicks)
      .enter()
      .append("line")
      .attr("x1", (d) => xScale(d))
      .attr("x2", (d) => xScale(d))
      .attr("y1", 0)
      .attr("y2", 5)
      .attr("stroke", "black");

    // Add x-axis tick labels
    xAxisGroup
      .selectAll("text")
      .data(xTicks)
      .enter()
      .append("text")
      .attr("x", (d) => xScale(d))
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .text((d) => d.toString());

    // Manually create y-axis
    const yTicks = yScale.ticks(5); // Generate 5 ticks
    const yAxisGroup = chartGroup.append("g");

    // Add y-axis tick lines
    yAxisGroup
      .selectAll("line")
      .data(yTicks)
      .enter()
      .append("line")
      .attr("x1", 0)
      .attr("x2", -5)
      .attr("y1", (d) => yScale(d))
      .attr("y2", (d) => yScale(d))
      .attr("stroke", "black");

    // Add y-axis tick labels
    yAxisGroup
      .selectAll("text")
      .data(yTicks)
      .enter()
      .append("text")
      .attr("x", -10)
      .attr("y", (d) => yScale(d))
      .attr("dy", "0.32em")
      .attr("text-anchor", "end")
      .attr("font-size", "10px")
      .text((d) => d.toString());

    // Add x-axis label
    chartGroup
      .append("text")
      .attr("x", chartWidth / 2)
      .attr("y", chartHeight + 35)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text("Year");

    // Add y-axis label
    chartGroup
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -chartHeight / 2)
      .attr("y", -35)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text("Value");

    // Define line generator
    const line = d3
      .line<DataPoint>()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.value))
      .curve(d3.curveCardinal);

    // Draw the line
    chartGroup
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#3B82F6")
      .attr("stroke-width", 3)
      .attr("d", line);

    // Add event markers
    chartGroup
      .selectAll(".event-marker")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "event-marker")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.value))
      .attr("r", 5)
      .attr("fill", "#3B82F6");

    // Resize handler
    const resizeVisualization = () => {
      if (!svgRef.current) return;

      const newWidth = svgRef.current.clientWidth;
      const newChartWidth = newWidth - margin.left - margin.right;

      // Update SVG width
      svg.attr("width", newWidth);

      // Update xScale range
      xScale.range([0, newChartWidth]);

      // Update x-axis tick positions
      xAxisGroup
        .selectAll("line")
        .attr("x1", (d: number) => xScale(d))
        .attr("x2", (d: number) => xScale(d));

      xAxisGroup
        .selectAll("text")
        .attr("x", (d: number) => xScale(d));

      // Update x-axis label position
      chartGroup.select("text").attr("x", newChartWidth / 2);

      // Update the line path
      chartGroup.select("path").attr("d", line);

      // Update event markers
      chartGroup
        .selectAll(".event-marker")
        .attr("cx", (d: DataPoint) => xScale(d.year));
    };

    // Attach resize listener
    window.addEventListener("resize", resizeVisualization);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeVisualization);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full" />
      <div className="mt-4 text-xs text-gray-600 text-center">
        <p>A simple line chart visualization using D3.js and React.</p>
      </div>
    </div>
  );
};

export default LineChartVisualization;
