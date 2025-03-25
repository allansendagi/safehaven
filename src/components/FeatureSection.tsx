import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  // Sample features
  const features = [
    {
      title: "AI TownSquare Framework",
      description: "A collaborative governance model that distributes decision-making power and ensures diverse perspectives in AI development and deployment.",
      image: "/images/features/ai-townsquare.jpg"
    },
    {
      title: "Societal Readiness Index",
      description: "A comprehensive framework for measuring and enhancing society's preparedness for AI integration across multiple dimensions.",
      image: "/images/features/societal-readiness.jpg"
    },
    {
      title: "Self-Correcting Society",
      description: "Theoretical foundations for adaptive governance models based on systems theory, learning theory, and cybernetics.",
      image: "/images/features/self-correcting.jpg"
    },
    {
      title: "Global Initiatives Network",
      description: "A worldwide network of projects and partnerships working to prepare communities for the advent of advanced AI.",
      image: "/images/features/global-network.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <h2 className="section-title mb-12">Our Core Frameworks</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card feature">
              <div className="mb-4 h-48 relative overflow-hidden rounded-lg">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
              <div className="mt-4">
                <a href={`/frameworks/${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[var(--primary)] font-semibold hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
