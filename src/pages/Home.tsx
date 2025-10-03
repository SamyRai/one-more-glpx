import React, { useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Logos } from '@/components/sections/Logos';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { EvidenceTeaser } from '@/components/sections/EvidenceTeaser';
import { FeaturedArticles } from '@/components/sections/FeaturedArticles';
import { FAQ } from '@/components/sections/FAQ';

function Home() {
  useEffect(() => {
    document.title = "Week‑to‑Ready • Kubernetes Security Baseline";
  }, []);

  return (
    <main>
      <Hero />
      <Logos />
      <HowItWorks />
      <EvidenceTeaser />
      <FeaturedArticles />
      <FAQ />
    </main>
  );
}

export default Home;