import React from 'react';

const ResponsiveImage = ({ src, alt, className = '', width = 'full', height = 'auto', priority = false }) => {
  // Width classes mapping
  const widthClasses = {
    'full': 'w-full',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
    '2/3': 'w-2/3',
    '1/4': 'w-1/4',
    '3/4': 'w-3/4',
  };

  // Height classes mapping
  const heightClasses = {
    'auto': 'h-auto',
    'full': 'h-full',
    'screen': 'h-screen',
    '1/2': 'h-1/2',
    '1/3': 'h-1/3',
    '2/3': 'h-2/3',
  };

  const widthClass = widthClasses[width] || 'w-full';
  const heightClass = heightClasses[height] || 'h-auto';

  return (
    <div className={`relative overflow-hidden ${widthClass} ${heightClass} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="object-cover w-full h-full"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

export default ResponsiveImage;
