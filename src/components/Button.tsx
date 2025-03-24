import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  fullWidth = false,
  disabled = false,
  className = '',
  icon
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-[var(--primary)] hover:bg-[#2c4c7c] text-white',
    secondary: 'bg-[var(--secondary)] hover:bg-[#3db5a6] text-white',
    accent: 'bg-[var(--accent)] hover:bg-[#f0d185] text-[var(--primary)]',
    outline: 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white',
    ghost: 'text-[var(--primary)] hover:bg-[var(--primary)] hover:bg-opacity-10'
  };

  // Size styles
  const sizes = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-6',
    lg: 'py-3 px-8 text-lg'
  };

  // Base classes
  const baseClasses = 'font-semibold rounded-md transition duration-300 inline-flex items-center justify-center';
  
  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Render as link or button
  if (href) {
    return (
      <a href={href} className={buttonClasses} role="button">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={buttonClasses}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
