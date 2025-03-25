import React from 'react';

const Card = ({ 
  title, 
  content, 
  icon, 
  image, 
  tag, 
  date, 
  link, 
  linkText = 'Learn more', 
  className = '',
  variant = 'default' // default, feature, stat, testimonial
}) => {
  // Card variants
  const variants = {
    default: 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300',
    feature: 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-t-4 border-[var(--secondary)]',
    stat: 'bg-[var(--primary)] text-white rounded-lg shadow-md p-6',
    testimonial: 'bg-white rounded-lg shadow-md p-6 border-l-4 border-[var(--accent)]'
  };

  const cardClass = variants[variant] || variants.default;

  return (
    <div className={`${cardClass} ${className}`}>
      {/* Card Image */}
      {image && (
        <div className="h-48 mb-4 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-6">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      {/* Card Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          {/* Icon */}
          {icon && (
            <div className="mr-4">
              {icon}
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        {/* Tag */}
        {tag && (
          <span className="bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] text-xs px-2 py-1 rounded">
            {tag}
          </span>
        )}
      </div>
      
      {/* Date */}
      {date && (
        <div className="text-sm text-gray-500 mb-3">{date}</div>
      )}
      
      {/* Content */}
      <div className={`${variant === 'stat' ? 'text-white/90' : 'text-gray-700'}`}>
        {content}
      </div>
      
      {/* Link */}
      {link && (
        <div className="mt-4">
          <a 
            href={link} 
            className={`
              ${variant === 'stat' 
                ? 'text-white hover:text-[var(--accent)]' 
                : 'text-[var(--primary)] hover:text-[var(--secondary)]'
              } 
              font-semibold hover:underline
            `}
          >
            {linkText} →
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;