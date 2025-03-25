import React from 'react';
import Link from 'next/link';
import GlobalReadinessVisualization from '@/components/GlobalReadinessVisualization';

export default function ReadinessPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">
            Societal Readiness Index
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            The Societal Readiness Index (SRI) provides a framework for measuring and enhancing society's preparedness for AI integration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/readiness/white-paper" className="btn-primary">
              Read the Whitepaper
            </Link>
            <a href="/documents/White Paper - Towards Societal Readiness.pdf" download className="btn-outline">
              Download PDF
            </a>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">
            Global AI Readiness Assessment
          </h2>
          
          <div className="mb-8">
            <GlobalReadinessVisualization />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
              The Five Pillars of Societal Readiness
            </h2>
            
            <div className="space-y-4 mt-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-2/5 font-semibold">Governance Readiness</div>
                <div className="w-full sm:w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-2/5 font-semibold">Technical Literacy</div>
                <div className="w-full sm:w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-2/5 font-semibold">Ethical Frameworks</div>
                <div className="w-full sm:w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-2/5 font-semibold">Infrastructure</div>
                <div className="w-full sm:w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-2/5 font-semibold">Social Adaptation</div>
                <div className="w-full sm:w-3/5 bg-gray-200 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">
              Global average readiness scores across key dimensions (2025 data)
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
              Why Societal Readiness Matters
            </h2>
            
            <p className="text-gray-700 mb-4">
              As AI capabilities advance at an exponential rate, societies worldwide face unprecedented challenges in adaptation and governance. The gap between technological development and societal readiness threatens to create instability, inequality, and potential risks.
            </p>
            
            <p className="text-gray-700 mb-4">
              The SRI provides a quantifiable framework for measuring and enhancing society's preparedness for AI integration across five key dimensions, enabling targeted interventions where they are most needed.
            </p>
            
            <p className="text-gray-700">
              By addressing readiness proactively rather than reactively, we can help ensure that AI development proceeds in a manner that is beneficial, safe, and aligned with human values and flourishing.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">
            Take the Readiness Assessment
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Evaluate your organization's AI readiness and receive personalized recommendations for improvement.
          </p>
          
          <div className="flex justify-center">
            <Link href="/readiness-assessment" className="btn-primary">
              Start Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
