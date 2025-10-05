import * as React from 'react';
import { Seo } from '@/components/ui/Seo';
import { organizationSchema } from '@/lib/schema';
import { Hero } from '@/components/sections/Hero';
import { Logos } from '@/components/sections/Logos';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTA } from '@/components/sections/CTA';
import { FAQ } from '@/components/sections/FAQ';

function Home() {
  return (
    <main>
      <Seo
        title="Kubernetes Security Baseline"
        description="Gateway API TLS configured correctly, admission policies live (VAP/CEL + Kyverno where needed), secrets at rest, minimal Falco eBPF alerts, and logging/retention templates that map to PCI/DORA/NIS2."
        schema={organizationSchema}
        canonical="/"
      />
      <Hero />
      <Logos />
      <HowItWorks />
      <Features />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <CTA />
    </main>
  );
}

export default Home;
