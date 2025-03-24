import React from 'react';

const DataVisualization = ({ 
  type = 'bar', // bar, line, pie, map
  data,
  title,
  description,
  className = '',
  height = '300px'
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Visualization Header */}
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
          {description && <p className="text-gray-600 text-sm">{description}</p>}
        </div>
      )}
      
      {/* Visualization Placeholder */}
      <div 
        className="bg-gray-100 rounded flex items-center justify-center" 
        style={{ height }}
      >
        {type === 'bar' && (
          <div className="w-full h-full flex items-end justify-around px-4 py-6">
            <div className="w-1/6 bg-[var(--primary)] rounded-t" style={{ height: '60%' }}></div>
            <div className="w-1/6 bg-[var(--primary)] rounded-t" style={{ height: '80%' }}></div>
            <div className="w-1/6 bg-[var(--primary)] rounded-t" style={{ height: '40%' }}></div>
            <div className="w-1/6 bg-[var(--primary)] rounded-t" style={{ height: '70%' }}></div>
            <div className="w-1/6 bg-[var(--primary)] rounded-t" style={{ height: '50%' }}></div>
          </div>
        )}
        
        {type === 'line' && (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-full h-full px-4 py-6">
              <polyline
                points="0,40 20,35 40,20 60,30 80,10 100,25"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
        
        {type === 'pie' && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-[var(--primary)]" style={{
              background: 'conic-gradient(var(--primary) 0% 30%, var(--secondary) 30% 55%, var(--accent) 55% 75%, #64748b 75% 100%)'
            }}></div>
          </div>
        )}
        
        {type === 'map' && (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Global map visualization will appear here</p>
          </div>
        )}
      </div>
      
      {/* Legend Placeholder */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center text-sm text-gray-600 mr-4">
          <div className="w-3 h-3 bg-[var(--primary)] mr-2"></div>
          <span>Category A</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mr-4">
          <div className="w-3 h-3 bg-[var(--secondary)] mr-2"></div>
          <span>Category B</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-3 h-3 bg-[var(--accent)] mr-2"></div>
          <span>Category C</span>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
