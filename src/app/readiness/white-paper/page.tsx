import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhitePaperPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6 text-center animate-fade-in">
            Towards Societal Readiness
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 text-center animate-fade-in">
            A comprehensive white paper on preparing civilization for the advent of AI and superintelligence
          </p>
          
          <div className="bg-[var(--primary)] bg-opacity-5 rounded-lg p-8 mb-12 border border-[var(--primary)] border-opacity-20 animate-slide-up">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-80 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2c4c7c] opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">White Paper</h3>
                      <p className="text-lg mb-4">Towards Societal Readiness</p>
                      <p className="text-sm">Safehaven Institute</p>
                      <p className="text-sm">2025</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Executive Summary</h3>
                <p className="text-gray-700 mb-4">
                  This white paper presents a framework for assessing and enhancing societal readiness for advanced artificial intelligence and potential superintelligence. It outlines the challenges of exponential AI growth against linear societal adaptation and proposes structured approaches to bridge this gap.
                </p>
                <p className="text-gray-700 mb-6">
                  The Societal Readiness Index (SRI) introduced in this paper provides a quantifiable metric for measuring preparedness across governance, technical literacy, ethical frameworks, infrastructure, and social adaptation dimensions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/documents/White Paper - Towards Societal Readiness.pdf" 
                    download
                    className="btn-primary flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                  <button className="btn-outline">
                    Read Online
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12 animate-fade-in">
            <section>
              <h2 className="section-subtitle mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                As artificial intelligence capabilities advance at an exponential rate, societies worldwide face unprecedented challenges in adaptation and governance. The gap between technological development and societal readiness threatens to create instability, inequality, and potential existential risks.
              </p>
              <p className="text-gray-700">
                This white paper introduces a comprehensive framework for assessing and enhancing societal readiness for advanced AI systems, with particular focus on the potential emergence of artificial general intelligence (AGI) and superintelligence.
              </p>
            </section>
            
            <section>
              <h2 className="section-subtitle mb-4">The Readiness Gap</h2>
              <p className="text-gray-700 mb-4">
                Current data indicates significant disparities in AI readiness across different sectors and regions:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>85% of CEOs anticipate AI disruption within 3 years, but only 23% have comprehensive adaptation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>60+ nations are drafting AI regulations, but most lack comprehensive governance frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>76% of citizens want a voice in AI governance, but only 12% report meaningful opportunities for participation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Technical AI literacy among policymakers remains below 30% in most countries</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700">
                These statistics highlight the urgent need for structured approaches to enhance readiness across all sectors of society.
              </p>
            </section>
            
            <section>
              <h2 className="section-subtitle mb-4">The Societal Readiness Index (SRI)</h2>
              <p className="text-gray-700 mb-6">
                The SRI provides a quantifiable framework for measuring and enhancing society's preparedness for AI integration across five key dimensions:
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[var(--primary)]">
                  <h3 className="font-semibold text-lg mb-2">Governance Readiness</h3>
                  <p className="text-gray-700">
                    Assesses the maturity of regulatory frameworks, institutional capacity, and policy mechanisms for AI oversight and direction.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[var(--secondary)]">
                  <h3 className="font-semibold text-lg mb-2">Technical Literacy</h3>
                  <p className="text-gray-700">
                    Measures understanding of AI capabilities, limitations, and implications among decision-makers, educators, and the general public.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[var(--accent)]">
                  <h3 className="font-semibold text-lg mb-2">Ethical Frameworks</h3>
                  <p className="text-gray-700">
                    Evaluates the development and implementation of ethical guidelines, value alignment mechanisms, and moral considerations in AI systems.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-2">Infrastructure</h3>
                  <p className="text-gray-700">
                    Assesses technical infrastructure, data governance systems, and security measures necessary for responsible AI deployment.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
                  <h3 className="font-semibold text-lg mb-2">Social Adaptation</h3>
                  <p className="text-gray-700">
                    Measures societal resilience, educational systems, workforce transition capabilities, and public engagement mechanisms.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="section-subtitle mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-4">
                The path toward societal readiness for advanced AI requires coordinated effort across all sectors of society. The SRI framework provides a structured approach to assessment and improvement, enabling targeted interventions where they are most needed.
              </p>
              <p className="text-gray-700">
                By addressing readiness proactively rather than reactively, we can help ensure that AI development proceeds in a manner that is beneficial, safe, and aligned with human values and flourishing.
              </p>
            </section>
            
            <div className="text-center pt-8">
              <a 
                href="/documents/White Paper - Towards Societal Readiness.pdf" 
                download
                className="btn-primary inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Full White Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
