"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// Define the data structure
interface TimelineEvent {
  year: number;
  aiEvent: string;
  societyEvent: string;
  aiY: number;
  societyY: number;
}

const GrowthCurveVisualization: React.FC = () => {
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

    // Sample timeline data
    const timelineData: TimelineEvent[] = [
      { year: 2020, aiEvent: "GPT-3 launches", societyEvent: "EU proposes AI Act", aiY: 30, societyY: 25 },
      { year: 2021, aiEvent: "AlphaFold 2 released", societyEvent: "First AI ethics frameworks", aiY: 40, societyY: 30 },
      { year: 2022, aiEvent: "Stable Diffusion & DALL-E 2", societyEvent: "U.S. CHIPS Act", aiY: 55, societyY: 35 },
      { year: 2023, aiEvent: "GPT-4 released", societyEvent: "Global AI safety summit", aiY: 75, societyY: 40 },
      { year: 2024, aiEvent: "Multimodal AI systems", societyEvent: "International AI treaties", aiY: 100, societyY: 45 },
      { year: 2025, aiEvent: "AI co-scientist systems", societyEvent: "AI literacy programs", aiY: 130, societyY: 50 },
    ];

    // Define scales
    const xScale = d3.scaleLinear().domain([2020, 2025]).range([0, chartWidth]);
    const yScale = d3.scaleLinear().domain([0, 150]).range([chartHeight, 0]);

    // Define axes
    const xAxis = d3.axisBottom(xScale).tickFormat((d) => d.toString()).ticks(6);
    const yAxis = d3.axisLeft(yScale).tickFormat(() => "").ticks(5);

    // Append x-axis
    chartGroup
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(xAxis as any) // Type assertion to handle D3 type quirks
      .selectAll("text")
      .style("font-size", "10px");

    // Append y-axis
    chartGroup.append("g").call(yAxis as any);

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
      .text("Capability / Adaptation");

    // Define line generators
    const aiLine = d3
      .line<TimelineEvent>()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.aiY))
      .curve(d3.curveCardinal);

    const societyLine = d3
      .line<TimelineEvent>()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.societyY))
      .curve(d3.curveLinear);

    // Draw AI advancement curve
    chartGroup
      .append("path")
      .datum(timelineData)
      .attr("fill", "none")
      .attr("stroke", "#3B82F6")
      .attr("stroke-width", 3)
      .attr("d", aiLine);

    // Draw societal adaptation curve
    chartGroup
      .append("path")
      .datum(timelineData)
      .attr("fill", "none")
      .attr("stroke", "#10B981")
      .attr("stroke-width", 3)
      .attr("d", societyLine);

    // Draw gap area
    chartGroup
      .append("path")
      .datum(timelineData)
      .attr("fill", "#EF4444")
      .attr("fill-opacity", 0.1)
      .attr(
        "d",
        d3
          .area<TimelineEvent>()
          .x((d) => xScale(d.year))
          .y0((d) => yScale(d.societyY))
          .y1((d) => yScale(d.aiY))
      );

    // Add AI event markers
    chartGroup
      .selectAll(".ai-event-marker")
      .data(timelineData)
      .enter()
      .append("circle")
      .attr("class", "ai-event-marker")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.aiY))
      .attr("r", 5)
      .attr("fill", "#3B82F6");

    // Add societal event markers
    chartGroup
      .selectAll(".society-event-marker")
      .data(timelineData)
      .enter()
      .append("circle")
      .attr("class", "society-event-marker")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.societyY))
      .attr("r", 5)
      .attr("fill", "#10B981");

    // Add AI event labels
    chartGroup
      .selectAll(".ai-event-label")
      .data(timelineData)
      .enter()
      .append("text")
      .attr("class", "ai-event-label")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.aiY) - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "8px")
      .attr("fill", "#3B82F6")
      .text((d) => d.aiEvent);

    // Add societal event labels
    chartGroup
      .selectAll(".society-event-label")
      .data(timelineData)
      .enter()
      .append("text")
      .attr("class", "society-event-label")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.societyY) + 15)
      .attr("text-anchor", "middle")
      .attr("font-size", "8px")
      .attr("fill", "#10B981")
      .text((d) => d.societyEvent);

    // Add legend
    const legend = chartGroup.append("g").attr("transform", `translate(${chartWidth - 150}, 10)`);

    // Legend: AI advancement
    legend
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 20)
      .attr("y2", 0)
      .attr("stroke", "#3B82F6")
      .attr("stroke-width", 3);

    legend
      .append("text")
      .attr("x", 25)
      .attr("y", 4)
      .attr("font-size", "10px")
      .text("AI Advancement");

    // Legend: Societal adaptation
    legend
      .append("line")
      .attr("x1", 0)
      .attr("y1", 20)
      .attr("x2", 20)
      .attr("y2", 20)
      .attr("stroke", "#10B981")
      .attr("stroke-width", 3);

    legend
      .append("text")
      .attr("x", 25)
      .attr("y", 24)
      .attr("font-size", "10px")
      .text("Societal Adaptation");

    // Legend: Readiness gap
    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 35)
      .attr("width", 20)
      .attr("height", 10)
      .attr("fill", "#EF4444")
      .attr("fill-opacity", 0.1);

    legend
      .append("text")
      .attr("x", 25)
      .attr("y", 44)
      .attr("font-size", "10px")
      .text("Readiness Gap");

    // Resize handler
    const resizeVisualization = () => {
      if (!svgRef.current) return;

      const newWidth = svgRef.current.clientWidth;
      const newChartWidth = newWidth - margin.left - margin.right;

      // Update SVG width
      svg.attr("width", newWidth);

      // Update xScale range
      xScale.range([0, newChartWidth]);

      // Update x-axis
      chartGroup.select("g").call(xAxis as any);

      // Update x-axis label position
      chartGroup.select("text").attr("x", newChartWidth / 2);

      // Update curves
      chartGroup.select("path:nth-child(1)").attr("d", aiLine);
      chartGroup.select("path:nth-child(2)").attr("d", societyLine);

      // Update gap area
      chartGroup.select("path:nth-child(3)").attr(
        "d",
        d3
          .area<TimelineEvent>()
          .x((d) => xScale(d.year))
          .y0((d) => yScale(d.societyY))
          .y1((d) => yScale(d.aiY))
      );

      // Update AI event markers with type annotation
      chartGroup
        .selectAll(".ai-event-marker")
        .attr("cx", (d: TimelineEvent) => xScale(d.year));

      // Update societal event markers with type annotation
      chartGroup
        .selectAll(".society-event-marker")
        .attr("cx", (d: TimelineEvent) => xScale(d.year));

      // Update AI event labels with type annotation
      chartGroup
        .selectAll(".ai-event-label")
        .attr("x", (d: TimelineEvent) => xScale(d.year));

      // Update societal event labels with type annotation
      chartGroup
        .selectAll(".society-event-label")
        .attr("x", (d: TimelineEvent) => xScale(d.year));

      // Update legend position
      legend.attr("transform", `translate(${newChartWidth - 150}, 10)`);
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
        <p>The widening gap between AI capabilities and societal readiness creates unprecedented risks and missed opportunities.</p>
      </div>
    </div>
  );
};

export default GrowthCurveVisualization;
