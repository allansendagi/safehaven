"use client";

import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real implementation, this would connect to Substack's API
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to Substack signup page
      window.open('https://readinessinstitute.substack.com/subscribe', '_blank');
      
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Newsletter signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--primary)] bg-opacity-5 rounded-lg p-6 border border-[var(--primary)] border-opacity-20">
      <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
        Subscribe to The Readiness Institute
      </h3>
      
      <p className="text-gray-700 mb-4">
        Stay updated on AI readiness, governance frameworks, and global initiatives. 
        Receive our newsletter with insights, resources, and event announcements.
      </p>
      
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          <p className="font-medium">Thank you for subscribing!</p>
          <p className="text-sm">Check your email to confirm your subscription to The Readiness Institute newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            disabled={isSubmitting}
            required
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      
      {error && (
        <p className="mt-2 text-red-600 text-sm">{error}</p>
      )}
      
      <p className="mt-3 text-xs text-gray-500">
        By subscribing, you agree to receive emails from The Readiness Institute. 
        You can unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  );
};

export default NewsletterSignup;
