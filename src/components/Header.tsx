"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-wide py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--primary)]">Safehaven</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-[var(--primary)] font-medium">About</Link>
            <Link href="/challenge" className="text-gray-700 hover:text-[var(--primary)] font-medium">The Challenge</Link>
            <Link href="/approach" className="text-gray-700 hover:text-[var(--primary)] font-medium">Our Approach</Link>
            <Link href="/initiatives" className="text-gray-700 hover:text-[var(--primary)] font-medium">Initiatives</Link>
            <Link href="/ai-townsquare" className="text-gray-700 hover:text-[var(--primary)] font-medium font-semibold">AI TownSquare</Link>
            <Link href="/readiness" className="text-gray-700 hover:text-[var(--primary)] font-medium">Readiness Index</Link>
            <Link href="/resources" className="text-gray-700 hover:text-[var(--primary)] font-medium">Resources</Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/join" className="btn-primary">Get Involved</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-700 hover:text-[var(--primary)] font-medium">About</Link>
              <Link href="/challenge" className="text-gray-700 hover:text-[var(--primary)] font-medium">The Challenge</Link>
              <Link href="/approach" className="text-gray-700 hover:text-[var(--primary)] font-medium">Our Approach</Link>
              <Link href="/initiatives" className="text-gray-700 hover:text-[var(--primary)] font-medium">Initiatives</Link>
              <Link href="/ai-townsquare" className="text-gray-700 hover:text-[var(--primary)] font-medium font-semibold">AI TownSquare</Link>
              <Link href="/readiness" className="text-gray-700 hover:text-[var(--primary)] font-medium">Readiness Index</Link>
              <Link href="/resources" className="text-gray-700 hover:text-[var(--primary)] font-medium">Resources</Link>
              <Link href="/join" className="btn-primary inline-block text-center">Get Involved</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
