import React from 'react';
import WorldMap from './WorldMap';

const GlobalInitiatives = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Global Initiatives</h2>
          <p className="text-lg text-gray-700">
            Our work spans continents and cultures, building a truly international movement to prepare civilization for AI and superintelligence.
          </p>
        </div>
        
        {/* World Map */}
        <div className="mb-16 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Global AI Safety & Governance Initiatives</h3>
          <div className="h-[400px] rounded">
            <WorldMap />
          </div>
        </div>
        
        {/* Featured Initiatives */}
        <h3 className="section-subtitle text-center mb-10">Featured Initiatives</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Initiative 1 */}
          <div className="card">
            <div className="h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
              <p className="text-gray-500">Initiative image</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-[var(--primary)] text-white text-xs px-2 py-1 rounded">Asia</span>
                <span className="text-sm text-gray-500">Est. 2023</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">AI Literacy Coalition</h4>
              <p className="text-gray-700 mb-4">
                Training 100,000 citizens across Southeast Asia in AI fundamentals, governance, and ethical considerations.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--secondary)]">5 countries</span>
                <a href="/initiatives/ai-literacy" className="text-[var(--primary)] font-semibold text-sm hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          
          {/* Initiative 2 */}
          <div className="card">
            <div className="h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
              <p className="text-gray-500">Initiative image</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-[var(--secondary)] text-white text-xs px-2 py-1 rounded">Europe</span>
                <span className="text-sm text-gray-500">Est. 2024</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Policy Sandbox Network</h4>
              <p className="text-gray-700 mb-4">
                Creating experimental governance zones where new AI regulation approaches can be tested safely.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--secondary)]">12 countries</span>
                <a href="/initiatives/policy-sandbox" className="text-[var(--primary)] font-semibold text-sm hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          
          {/* Initiative 3 */}
          <div className="card">
            <div className="h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
              <p className="text-gray-500">Initiative image</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-[var(--accent)] text-[var(--primary)] text-xs px-2 py-1 rounded">Global</span>
                <span className="text-sm text-gray-500">Est. 2023</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">AI Commons Project</h4>
              <p className="text-gray-700 mb-4">
                Developing open-source AI models and datasets governed by multi-stakeholder communities.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--secondary)]">24 countries</span>
                <a href="/initiatives/ai-commons" className="text-[var(--primary)] font-semibold text-sm hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/initiatives" className="btn-primary">Explore All Initiatives</a>
        </div>
      </div>
    </section>
  );
};

export default GlobalInitiatives;
