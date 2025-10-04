import React, { useEffect } from "react";
import { setMetaDescription } from "@/lib/meta";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EvidenceTeaser } from "@/components/sections/EvidenceTeaser";
import { FeaturedArticles } from "@/components/sections/FeaturedArticles";
import { FAQ } from "@/components/sections/FAQ";

function Home() {
  useEffect(() => {
    document.title = "Kubernetes Security Baseline • Week‑to‑Ready";
    setMetaDescription(
      "Gateway API TLS configured correctly, admission policies live (VAP/CEL + Kyverno where needed), secrets at rest, minimal Falco eBPF alerts, and logging/retention templates that map to PCI/DORA/NIS2.",
    );
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
