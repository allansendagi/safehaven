import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Safehaven exists to prepare civilization for the advent of artificial intelligence and superintelligence through collaborative governance, societal readiness, and global initiatives.
          </p>
          
          {/* YouTube Video */}
          <div className="mt-8 relative pb-[56.25%] h-0 overflow-hidden max-w-3xl mx-auto">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DfFzAlDSeUY" 
              title="Preparing Civilisation for the Advent of AI and Superintelligence"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission Pillar 1 */}
          <div className="card">
            <div className="h-16 w-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Bridging the Readiness Gap</h3>
            <p className="text-gray-700">
              We address the critical gap between exponential AI growth and linear societal adaptation through research, education, and practical frameworks.
            </p>
          </div>
          
          {/* Mission Pillar 2 */}
          <div className="card">
            <div className="h-16 w-16 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Collaborative Governance</h3>
            <p className="text-gray-700">
              We champion the AI TownSquare model—a modern adaptation of humanity's collaborative governance systems tailored for the AI era.
            </p>
          </div>
          
          {/* Mission Pillar 3 */}
          <div className="card">
            <div className="h-16 w-16 rounded-full bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Self-Correcting Society</h3>
            <p className="text-gray-700">
              We develop frameworks for a self-correcting society that can adapt to rapid technological change through systems theory, learning theory, and cybernetics.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/about" className="btn-primary">Learn About Our Approach</a>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
