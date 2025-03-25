import React from 'react';
import WorldMap from './WorldMap';

const ReadinessIndex = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Societal Readiness Index</h2>
          <p className="text-lg text-gray-700">
            The Societal Readiness Index (SRI) provides a framework for measuring and enhancing society's preparedness for AI integration.
          </p>
        </div>
        
        {/* SRI Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="section-subtitle">Measuring Readiness</h3>
            <p className="mb-6 text-gray-700">
              The SRI evaluates readiness across multiple dimensions, providing actionable insights for improvement at individual, organizational, and societal levels.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2/5 font-semibold">Governance Readiness</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2/5 font-semibold">Technical Literacy</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2/5 font-semibold">Ethical Frameworks</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2/5 font-semibold">Infrastructure</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2/5 font-semibold">Social Adaptation</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Global average readiness scores across key dimensions (2025 data)
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="h-[300px]">
              <WorldMap />
            </div>
          </div>
        </div>
        
        {/* SRI Assessment Tool */}
        <div className="bg-[var(--primary)] bg-opacity-5 rounded-lg p-8 border border-[var(--primary)] border-opacity-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">Assess Your Readiness</h3>
            <p className="text-gray-700">
              Take our comprehensive assessment to evaluate your organization's AI readiness and receive personalized recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-center mb-2">Basic Assessment</h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                15 minutes • 20 questions<br />
                High-level overview
              </p>
              <div className="text-center">
                <a href="/assessment/basic" className="btn-outline text-sm py-1.5">Start Basic Assessment</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-md relative">
              <div className="absolute top-0 right-0 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                RECOMMENDED
              </div>
              <div className="h-12 w-12 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-center mb-2">Comprehensive Assessment</h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                30 minutes • 50 questions<br />
                Detailed analysis & recommendations
              </p>
              <div className="text-center">
                <a href="/assessment/comprehensive" className="btn-secondary text-sm py-1.5">Start Comprehensive</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-center mb-2">Enterprise Assessment</h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Custom evaluation<br />
                Tailored for large organizations
              </p>
              <div className="text-center">
                <a href="/assessment/enterprise" className="btn-outline text-sm py-1.5">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/readiness" className="btn-primary">Explore the SRI Framework</a>
        </div>
      </div>
    </section>
  );
};

export default ReadinessIndex;