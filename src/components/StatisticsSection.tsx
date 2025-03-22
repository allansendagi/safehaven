import React from 'react';

const StatisticsSection = () => {
  // Sample statistics
  const stats = [
    {
      value: '24+',
      label: 'Countries',
      description: 'Active partnerships across continents'
    },
    {
      value: '100K+',
      label: 'Citizens Trained',
      description: 'In AI literacy and governance'
    },
    {
      value: '50+',
      label: 'Policy Frameworks',
      description: 'Developed for governments and organizations'
    },
    {
      value: '12',
      label: 'Research Centers',
      description: 'Dedicated to AI readiness and governance'
    }
  ];

  return (
    <section className="py-16 bg-[var(--primary)]">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Global Impact</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="stat-value text-white">{stat.value}</div>
              <div className="text-lg font-semibold text-white/90 mt-2">{stat.label}</div>
              <div className="text-sm text-white/70 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/impact" className="btn-accent">View Detailed Impact Report</a>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
