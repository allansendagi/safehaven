import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the chart component with no SSR to avoid hydration issues
const WorldMapChart = dynamic(() => import('./WorldMapChart'), { ssr: false });

const WorldMap = () => {
  return (
    <div className="world-map-container">
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <WorldMapChart />
        </div>
        
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded-md shadow-sm">
          <h4 className="text-sm font-semibold mb-2">Readiness Level</h4>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              <span className="text-xs">High</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
              <span className="text-xs">Moderate</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
              <span className="text-xs">Limited</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
              <span className="text-xs">Critical</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;