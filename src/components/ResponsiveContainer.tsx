import React from 'react';

const ResponsiveContainer = ({ children, className = '' }) => {
  return (
    <div className={`w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
