import React from 'react';
import Link from 'next/link';

interface ComingSoonProps {
  title: string;
  description: string;
  returnLink: string;
  returnText: string;
  showNewsletter?: boolean;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title, 
  description, 
  returnLink, 
  returnText,
  showNewsletter = true 
}) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container-wide text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6 animate-fade-in">
          {title}
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 animate-fade-in">
          {description}
        </p>
        
        {showNewsletter && (
          <div className="bg-[var(--primary)] bg-opacity-5 rounded-lg p-8 mb-8 border border-[var(--primary)] border-opacity-20 animate-slide-up">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Stay Updated</h3>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter from The Readiness Institute to be notified when this feature becomes available.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        )}
        
        <Link href={returnLink} className="btn-outline inline-flex items-center animate-fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          {returnText}
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
