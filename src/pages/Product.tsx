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
  { src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "A real-time dashboard showing security alerts and cluster health." },
  { src: "https://images.unsplash.com/photo-1591453089943-01383ab53a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "An intuitive policy editor for creating and managing security rules." },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "A comprehensive compliance report for PCI, DORA, and other standards." },
  { src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "A timeline view of security events and alerts for incident response." },
];

const roadmapSteps = [
  { title: "Q3 2024 - Expanded Compliance Packs", description: "Adding support for HIPAA and SOC 2 compliance standards.", status: "completed" as const },
  { title: "Q4 2024 - Public API Launch", description: "Enabling programmatic access to automate security workflows.", status: "current" as const },
  { title: "Q1 2025 - Advanced Threat Intelligence", description: "Integrating with leading threat intelligence feeds for proactive defense.", status: "upcoming" as const },
  { title: "Q2 2025 - Serverless Security Module", description: "Extending our security coverage to serverless environments.", status: "upcoming" as const },
];

function ProductPage() {
  return (
    <Page>
      <Seo title="Product Features" description="Explore the powerful features of our Kubernetes security platform." />
      <Page.Header>
        <Page.Title>A Better Way to Secure Your Cloud</Page.Title>
        <Page.Description>
          Our platform provides the visibility and control you need to secure your cloud-native applications with confidence.
        </Page.Description>
      </Page.Header>

      <main className="py-8 space-y-16">
        <Section
          title="See Our Platform in Action"
          description="Watch this short demo to see how our platform can help you secure your Kubernetes environment in minutes."
        >
          <VideoPlayer src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Platform Demo" />
        </Section>
        <Section
          title="Compare Our Features"
          description="Find the perfect plan for your team's needs."
        >
          <ComparisonTable features={comparisonFeatures} planNames={comparisonPlanNames} />
        </Section>
        <Section
          title="Explore the Platform"
          description="Get a glimpse of our intuitive interface and powerful features."
        >
          <ImageGallery images={galleryImages} />
        </Section>
        <Section
          title="What's Next?"
          description="We're constantly innovating. Here's a look at our product roadmap."
        >
          <Roadmap steps={roadmapSteps} />
        </Section>
        <Section
          title="Learn From Our Customers"
          description="See how companies like yours are using our platform to achieve their security and compliance goals."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseStudyTeaser image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Acme Inc. Reduced Security Incidents by 75%" description="Discover their strategies for a more resilient infrastructure." href="/case-studies" />
              <CaseStudyTeaser image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Globex Corp. Achieved 99.9% Uptime" description="Learn how they built customer trust with our automated security." href="/case-studies" />
              <CaseStudyTeaser image="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Stark Industries Streamlined Compliance" description="A deep dive into how they automated compliance and saved resources." href="/case-studies" />
          </div>
        </Section>
      </main>
    </Page>
  );
}

export default ProductPage;