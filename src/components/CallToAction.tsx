import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[#2c4c7c)] text-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement for a Self-Correcting Future</h2>
          <p className="text-xl mb-10 text-white/90">
            The time to prepare for the age of AI and superintelligence is now. Together, we can build a future where technology empowers humanity and enhances our collective potential.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* For Policymakers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition duration-300">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">For Policymakers</h3>
              <p className="mb-4 text-white/80">
                Access governance frameworks, policy templates, and international best practices.
              </p>
              <Link href="/join/policymakers" className="inline-block text-white border border-white hover:bg-white hover:text-[var(--primary)] font-semibold py-2 px-4 rounded-md transition duration-300">
                Access Resources
              </Link>
            </div>
            
            {/* For Organizations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition duration-300">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">For Organizations</h3>
              <p className="mb-4 text-white/80">
                Partner with us to assess your AI readiness and implement responsible AI practices.
              </p>
              <Link href="/join/organizations" className="inline-block text-white border border-white hover:bg-white hover:text-[var(--primary)] font-semibold py-2 px-4 rounded-md transition duration-300">
                Become a Partner
              </Link>
            </div>
            
            {/* For Individuals */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition duration-300">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">For Individuals</h3>
              <p className="mb-4 text-white/80">
                Enhance your AI literacy, join local initiatives, and contribute to the global movement.
              </p>
              <Link href="/join/individuals" className="inline-block text-white border border-white hover:bg-white hover:text-[var(--primary)] font-semibold py-2 px-4 rounded-md transition duration-300">
                Get Involved
              </Link>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Stay Informed</h3>
            <p className="mb-6 text-white/80">
              Subscribe to our newsletter for updates on AI developments, Safehaven initiatives, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="btn-accent py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
