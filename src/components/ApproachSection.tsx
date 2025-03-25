import React from 'react';
import SelfCorrectionVisualization from './SelfCorrectionVisualization';

const ApproachSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Our Approach</h2>
          <p className="text-lg text-gray-700">
            The AI TownSquare concept and self-correcting society framework form the foundation of our approach to AI governance and societal adaptation.
          </p>
        </div>
        
        {/* AI TownSquare Concept */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="section-subtitle">The AI TownSquare</h3>
              <p className="mb-4 text-gray-700">
                The AI TownSquare isn't a utopian fantasy—it's a modern adaptation of humanity's long history of collaborative governance and resource sharing, tailored for the AI era.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[var(--secondary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Decentralized governance structures that distribute decision-making power</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[var(--secondary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent processes that build trust and accountability</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[var(--secondary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Inclusive participation that ensures diverse perspectives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[var(--secondary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Iterative learning mechanisms that improve over time</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-[300px] flex items-center justify-center">
                <p className="text-gray-500">AI TownSquare visualization will appear here</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Self-Correcting Society */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-50 rounded-lg p-6">
              <div className="h-[300px]">
                <SelfCorrectionVisualization />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="section-subtitle">Self-Correcting Society</h3>
              <p className="mb-4 text-gray-700">
                By integrating principles from systems theory, learning theory, and cybernetics, we lay the theoretical foundation for a self-correcting, adaptive governance model.
              </p>
              <div className="space-y-4">
                <div className="bg-[var(--primary)] bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold text-[var(--primary)]">Systems Theory Foundation</h4>
                  <p className="text-sm">Understanding society as an interconnected system with feedback loops and emergent properties</p>
                </div>
                <div className="bg-[var(--secondary)] bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold text-[var(--secondary)]">Learning Theory Integration</h4>
                  <p className="text-sm">Building adaptive capacity by equipping citizens, institutions, and developers with skills for rapid technological change</p>
                </div>
                <div className="bg-[var(--accent)] bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold text-[var(--accent)]">Cybernetic Principles</h4>
                  <p className="text-sm">Implementing feedback mechanisms that detect errors and adjust in real-time to maintain system balance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/approach" className="btn-primary">Explore Our Methodology</a>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
