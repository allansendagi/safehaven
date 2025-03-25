import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlobalReadinessVisualization from './GlobalReadinessVisualization';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2c4c7c] opacity-90"></div>
      
      {/* Content container */}
      <div className="container-wide relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Preparing Civilization for the Age of AI
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 animate-fade-in">
          SafeHaven is building the societal immune system for AI at scale, anchored by AI Townsquare, Societal Readiness Index and the Readiness Institute.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link href="/readiness" className="btn-accent">
            Assess Your Readiness
          </Link>
          <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-[#1a365d]">
            Learn More
          </Link>
        </div>
        
        {/* Global impact visualization */}
        <div className="mt-16 max-w-4xl mx-auto bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl mb-4">Global AI Readiness Index</h3>
          <div className="h-[200px] bg-white/5 rounded">
            <GlobalReadinessVisualization />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
