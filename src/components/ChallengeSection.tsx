import React from 'react';
import GrowthCurveVisualization from './GrowthCurveVisualization';

const ChallengeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">The Challenge</h2>
          <p className="text-lg text-gray-700">
            We face an unprecedented challenge: AI advancement is accelerating exponentially while our societal adaptation remains linear, creating a critical readiness gap.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Visualization */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Exponential Growth vs. Linear Adaptation</h3>
            <div className="h-[300px]">
              <GrowthCurveVisualization />
            </div>
          </div>
          
          {/* Right side: Key challenges */}
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Governance Lag</h4>
                  <p className="text-gray-700">
                    Traditional governance structures move too slowly to effectively regulate and guide rapidly evolving AI technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Literacy Deficit</h4>
                  <p className="text-gray-700">
                    Most citizens, policymakers, and even technologists lack the comprehensive understanding needed to make informed decisions about AI.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Concentration of Power</h4>
                  <p className="text-gray-700">
                    AI development is increasingly concentrated in a few corporations and nations, creating imbalances in access and influence.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Alignment Complexity</h4>
                  <p className="text-gray-700">
                    Ensuring AI systems align with human values becomes exponentially more difficult as capabilities increase and systems become more autonomous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/challenge" className="btn-primary">Explore the Readiness Gap</a>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
