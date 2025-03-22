import React from 'react';

const ResponsiveGrid = ({ children, columns = { default: 1, sm: 2, md: 3, lg: 4 }, gap = 6, className = '' }) => {
  // Generate the grid columns class based on the columns prop
  const getGridColsClass = () => {
    const colClasses = [];
    
    if (columns.default) colClasses.push(`grid-cols-${columns.default}`);
    if (columns.sm) colClasses.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) colClasses.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) colClasses.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) colClasses.push(`xl:grid-cols-${columns.xl}`);
    
    return colClasses.join(' ');
  };

  return (
    <div className={`grid ${getGridColsClass()} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
