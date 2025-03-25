import Link from 'next/link';
import Image from 'next/image';

// Component imports will go here
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import ChallengeSection from '@/components/ChallengeSection';
import ApproachSection from '@/components/ApproachSection';
import GlobalInitiatives from '@/components/GlobalInitiatives';
import ReadinessIndex from '@/components/ReadinessIndex';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* The Challenge Section */}
      <ChallengeSection />
      
      {/* Our Approach Section */}
      <ApproachSection />
      
      {/* Global Initiatives Section */}
      <GlobalInitiatives />
      
      {/* Societal Readiness Index Section */}
      <ReadinessIndex />
      
      {/* Call to Action Section */}
      <CallToAction />
    </main>
  );
}