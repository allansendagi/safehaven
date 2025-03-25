import React from 'react';
import Link from 'next/link';

export default function ReadinessInstitutePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">
            The Readiness Institute
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Translating theory into practice through cross-disciplinary research and real-world solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
              Our Mission
            </h2>
            
            <p className="text-gray-700 mb-4">
              The Readiness Institute exists to translate the Societal Readiness Index (SRI) from theory into practice. As a dedicated entity capable of conducting cross-disciplinary research and deploying real-world solutions, we scan for gaps identified by SRI—whether technical (e.g., the need for more transparent AI systems) or social (e.g., a demand for new welfare models).
            </p>
            
            <p className="text-gray-700">
              Our work bridges the critical gap between exponential AI growth and linear societal adaptation, ensuring communities and organizations can thrive in an AI-powered future.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-center mb-4">Our Core Values</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary) ] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Evidence-based research and solutions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary) ] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Cross-disciplinary collaboration</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary) ] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Practical implementation of theoretical frameworks</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary) ] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Inclusive and equitable AI development</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary) ] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Continuous adaptation and improvement</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 text-center">
            Our Areas of Focus
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Technical Solutions</h3>
              
              <p className="text-gray-700 mb-4">
                Developing open-source dashboards for tracking AI literacy rates and refining bias-detection libraries for public use.
              </p>
              
              <p className="text-sm text-gray-600 italic">
                "Our technical team is building tools that make AI transparency accessible to everyone, not just specialists."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-[var(--secondary) ] text-white flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Social Adaptation</h3>
              
              <p className="text-gray-700 mb-4">
                Collaborating with local governments to pilot new job-transition programs and develop language-specific AI literacy materials.
              </p>
              
              <p className="text-sm text-gray-600 italic">
                "We're helping communities prepare for AI-driven economic shifts through targeted training and support systems."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-[var(--accent) ] text-[var(--primary)] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Policy Innovation</h3>
              
              <p className="text-gray-700 mb-4">
                Exploring policy-simulation engines that test legislative proposals before they reach the real world, helping policymakers make evidence-based decisions.
              </p>
              
              <p className="text-sm text-gray-600 italic">
                "Our simulations allow policymakers to see the potential impacts of AI regulations before implementation."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-[var(--primary) ] bg-opacity-5 rounded-lg p-8 mb-16 border border-[var(--primary)] border-opacity-20">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">
            The Self-Correcting Ecosystem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-center">Diagnosis</h3>
              
              <p className="text-gray-700 mb-4">
                The SRI identifies weak points in societal readiness, such as "Citizen Empowerment" and "Economic Adaptability" in specific communities.
              </p>
              
              <div className="h-12 w-12 rounded-full bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-center">Intervention</h3>
              
              <p className="text-gray-700 mb-4">
                The Readiness Institute partners with AI TownSquare to organize targeted training programs and develops language-specific AI literacy materials.
              </p>
              
              <div className="h-12 w-12 rounded-full bg-[var(--secondary) ] text-white flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-center">Re-measurement</h3>
              
              <p className="text-gray-700 mb-4">
                After implementation, the SRI is recalculated. Gains in literacy rates and new policy initiatives drive up the overall readiness score.
              </p>
              
              <div className="h-12 w-12 rounded-full bg-[var(--accent) ] text-[var(--primary)] flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16 border border-gray-200">
          <h2 className="text-2xl font-bold text-[var(--primary) ] mb-6 text-center">
            Case Study: Amsterdam Pilot
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Initial Assessment</h3>
              
              <p className="text-gray-700 mb-4">
                Initial data revealed low AI literacy in certain districts, especially among older adults. Surveys indicated skepticism toward AI-driven government services, and job transition benefits for displaced workers were minimal.
              </p>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center">
                  <div className="w-1/2 font-semibold text-sm">AI Literacy Rate:</div>
                  <div className="w-1/2 bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                  <div className="ml-2 text-sm">32%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-semibold text-sm">Trust in AI Systems:</div>
                  <div className="w-1/2 bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                  <div className="ml-2 text-sm">28%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-semibold text-sm">Job Transition Support:</div>
                  <div className="w-1/2 bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="ml-2 text-sm">15%</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Six Months Later</h3>
              
              <p className="text-gray-700 mb-4">
                After targeted interventions, including AI literacy programs and expanded job transition benefits, the city saw significant improvements in readiness metrics and public sentiment.
              </p>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center">
                  <div className="w-1/2 font-semibold text-sm">AI Literacy Rate:</div>
                  <div className="w-1/2 bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <div className="ml-2 text-sm">68%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-semibold text-sm">Trust in AI Systems:</div>
                  <div className="w-1/2 bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '57%' }}></div>
                  </div>
                  <div className="ml-2 text-sm">57%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-semibold text-sm">Job Transition Support:</div>
                  <div className="w-1/2 bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="ml-2 text-sm">65%</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-700 italic">
              "By highlighting specific vulnerabilities and prompting immediate interventions, SRI functions as the 'self-correcting engine' of Societal Readiness. Its iterative nature ensures that as AI evolves, so does society—closing the readiness gap one pillar at a time."
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Partner with the Readiness Institute
          </Link>
        </div>
      </div>
    </div>
  );
}
