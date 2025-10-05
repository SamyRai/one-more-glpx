import React from "react";
import { Page } from "@/components/ui/Page";
import { Seo } from "@/components/ui/Seo";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { VideoPlayer } from "@/components/marketing/VideoPlayer";
import { ImageGallery } from "@/components/marketing/ImageGallery";
import { Roadmap } from "@/components/marketing/Roadmap";
import { CaseStudyTeaser } from "@/components/marketing/CaseStudyTeaser";
import { Section } from "@/components/ui/Section";

const comparisonFeatures = [
  { feature: "Automated Security Baseline", plans: { Developer: true, Team: true, Enterprise: true } },
  { feature: "eBPF-based Observability", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "PCI/DORA Compliance Mapping", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "24/7 Emergency Support", plans: { Developer: false, Team: false, Enterprise: true } },
];
const comparisonPlanNames = ["Developer", "Team", "Enterprise"];

const galleryImages = [
  { src: "https://via.placeholder.com/800x600?text=Dashboard+View", alt: "Dashboard View" },
  { src: "https://via.placeholder.com/800x600?text=Policy+Editor", alt: "Policy Editor" },
  { src: "https://via.placeholder.com/800x600?text=Compliance+Report", alt: "Compliance Report" },
  { src: "https://via.placeholder.com/800x600?text=Alerts+Timeline", alt: "Alerts Timeline" },
];

const roadmapSteps = [
  { title: "Q3 2024 - Beta Launch", description: "Limited release for beta testers.", status: "completed" as const },
  { title: "Q4 2024 - Public Launch", description: "Full public release with core features.", status: "current" as const },
  { title: "Q1 2025 - Advanced Integrations", description: "Integrate with third-party SIEM and ticketing systems.", status: "upcoming" as const },
  { title: "Q2 2025 - AI-Powered Insights", description: "Introduce AI-driven security recommendations.", status: "upcoming" as const },
];

function ProductPage() {
  return (
    <Page>
      <Seo title="Product Features" description="Explore the powerful features of our platform." />
      <Page.Header>
        <Page.Title>Discover Our Product</Page.Title>
        <Page.Description>
          A deep dive into the features that make our platform the best choice for Kubernetes security.
        </Page.Description>
      </Page.Header>

      <main className="py-8 space-y-16">
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Watch Our Demo</h2>
                <VideoPlayer src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Product Demo" />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
                <ComparisonTable features={comparisonFeatures} planNames={comparisonPlanNames} />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Product Gallery</h2>
                <ImageGallery images={galleryImages} />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Product Roadmap</h2>
                <Roadmap steps={roadmapSteps} />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Customer Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CaseStudyTeaser image="https://via.placeholder.com/400x200?text=Acme+Inc." title="Acme Inc. Cuts Deployment Time by 50%" description="Learn how Acme Inc. accelerated their CI/CD pipeline." href="#" />
                    <CaseStudyTeaser image="https://via.placeholder.com/400x200?text=Globex+Corp." title="Globex Corp. Achieves PCI Compliance in Weeks" description="Discover their path to rapid compliance." href="#" />
                    <CaseStudyTeaser image="https://via.placeholder.com/400x200?text=Stark+Industries" title="Stark Industries Enhances Threat Detection" description="See how they gained deep visibility into their clusters." href="#" />
                </div>
            </div>
        </Section>
      </main>
    </Page>
  );
}

export default ProductPage;