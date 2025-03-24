import React from 'react';

const Timeline = () => {
  // Sample timeline data
  const timelineEvents = [
    {
      year: '2023',
      title: 'Safehaven Foundation',
      description: 'Establishment of Safehaven to address the critical gap between AI advancement and societal readiness.'
    },
    {
      year: '2023',
      title: 'AI TownSquare Concept',
      description: 'Introduction of the AI TownSquare governance framework as a collaborative approach to AI governance.'
    },
    {
      year: '2024',
      title: 'Global Readiness Initiative',
      description: 'Launch of the Societal Readiness Index (SRI) to measure and enhance preparedness for AI integration.'
    },
    {
      year: '2024',
      title: 'International Partnerships',
      description: 'Formation of strategic partnerships with governments, organizations, and academic institutions across 24 countries.'
    },
    {
      year: '2025',
      title: 'Self-Correcting Society Framework',
      description: 'Development of theoretical foundations for adaptive governance models based on systems theory and cybernetics.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Our Journey</h3>
      <p className="text-gray-600 mb-6">Key milestones in Safehaven's mission to prepare civilization for AI and superintelligence</p>
      
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="flex items-start">
              <span className="text-sm font-bold bg-[var(--primary)] text-white px-2 py-1 rounded mr-3">
                {event.year}
              </span>
              <div>
                <h4 className="font-semibold text-lg">{event.title}</h4>
                <p className="text-gray-700 mt-1">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <a href="/about/history" className="text-[var(--primary)] font-semibold hover:underline">
          View Complete History →
        </a>
      </div>
    </div>
  );
};

export default Timeline;
