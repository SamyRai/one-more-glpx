import * as React from 'react';
import { Seo } from '@/components/ui/Seo';
import { organizationSchema } from '@/lib/schema';
import { Hero } from '@/components/sections/Hero';
import { Logos } from '@/components/sections/Logos';
import { StatsSection } from "@/components/marketing/StatsSection";
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTA } from '@/components/sections/CTA';
import { FAQ } from '@/components/sections/FAQ';
import { CustomerStories } from '@/components/sections/CustomerStories';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

function Home() {
  return (
    <main>
      <Seo
        title="Automated Kubernetes Security and Compliance"
        description="Achieve a robust security baseline and auditor-ready compliance for Kubernetes with our automated platform. Secure your cloud-native environment with confidence."
        schema={organizationSchema}
        canonical="/"
      />
      <Hero />
      <Logos />
      <StatsSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CustomerStories />
      <PricingSection />
      <FAQ />
      <NewsletterSection />
      <CTA />
    </main>
  );
}

export default Home;
