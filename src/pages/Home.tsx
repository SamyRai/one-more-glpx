import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ContactSection from '@/components/sections/ContactSection';

/**
 * Home page composes the landing page sections. Additional sections can be
 * inserted here for testimonials, FAQs, etc.
 */
export const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
    </main>
  );
};

export default Home;
