import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AITownSquarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2c4c7c] text-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              AI TownSquare
            </h1>
            <p className="text-xl mb-8 animate-fade-in">
              A global platform for AI literacy and participatory governance, fostering dialogue and collaborative decision-making about AI's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="#upcoming-events" className="btn-accent">
                Upcoming Events
              </Link>
              <Link href="#join-discussion" className="btn-outline border-white text-white hover:bg-white hover:text-[#1a365d]">
                Join the Discussion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About AI TownSquare */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-subtitle mb-4">What is AI TownSquare?</h2>
              <p className="text-gray-700 mb-4">
                AI TownSquare is a global initiative designed to bridge the gap between exponential AI growth and linear societal adaptation through education, dialogue, and participatory governance.
              </p>
              <p className="text-gray-700 mb-4">
                As AI systems become increasingly powerful and integrated into our daily lives, it's essential that citizens, organizations, and governments have the knowledge and platforms to engage meaningfully in shaping AI's development and deployment.
              </p>
              <p className="text-gray-700">
                AI TownSquare provides structured forums, educational resources, and collaborative governance frameworks to ensure that AI development aligns with human values and benefits humanity as a whole.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Global Reach</h3>
                    <p className="text-gray-600">Connecting participants from diverse backgrounds and regions worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">AI Literacy</h3>
                    <p className="text-gray-600">Educational resources to build understanding of AI capabilities and implications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Participatory Governance</h3>
                    <p className="text-gray-600">Frameworks for inclusive decision-making about AI development and deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="section-title mb-12">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-[var(--primary)] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                VIRTUAL FORUM
              </div>
              <h3 className="text-xl font-semibold mb-2">Global AI Governance Dialogue</h3>
              <p className="text-gray-600 mb-4">
                A structured discussion on developing international frameworks for AI governance with experts from policy, industry, and civil society.
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 15, 2025 • 10:00 AM - 12:00 PM UTC</span>
              </div>
              <Link href="#" className="btn-outline w-full text-center">
                Register (Coming Soon)
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-[var(--secondary)] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                WORKSHOP
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Literacy for Organizations</h3>
              <p className="text-gray-600 mb-4">
                A hands-on workshop for organizational leaders to develop AI literacy programs and readiness assessments for their teams.
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>May 3, 2025 • 2:00 PM - 5:00 PM UTC</span>
              </div>
              <Link href="#" className="btn-outline w-full text-center">
                Register (Coming Soon)
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-[var(--accent)] text-[var(--primary)] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                CONFERENCE
              </div>
              <h3 className="text-xl font-semibold mb-2">AI TownSquare Annual Summit</h3>
              <p className="text-gray-600 mb-4">
                Our flagship event bringing together stakeholders from around the world to address the challenges and opportunities of AI advancement.
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>September 21-23, 2025 • New York City</span>
              </div>
              <Link href="#" className="btn-outline w-full text-center">
                Register (Coming Soon)
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Join the Discussion */}
      <section id="join-discussion" className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Join the Discussion</h2>
            <p className="text-lg text-gray-700">
              AI TownSquare provides multiple ways to engage in meaningful dialogue about AI's future. Join our community to contribute your perspective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="h-16 w-16 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Online Forums</h3>
              <p className="text-gray-600 mb-6">
                Participate in structured discussions on key topics related to AI governance, ethics, and societal impact.
              </p>
              <Link href="#" className="btn-outline">
                Browse Forums
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="h-16 w-16 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Policy Working Groups</h3>
              <p className="text-gray-600 mb-6">
                Join specialized working groups focused on developing policy recommendations for specific AI challenges.
              </p>
              <Link href="#" className="btn-outline">
                Explore Groups
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="h-16 w-16 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Educational Resources</h3>
              <p className="text-gray-600 mb-6">
                Access courses, workshops, and materials designed to build AI literacy and understanding.
              </p>
              <Link href="#" className="btn-outline">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[var(--primary)] bg-opacity-5">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to The Readiness Institute newsletter to receive updates on AI TownSquare events, resources, and opportunities to participate.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
