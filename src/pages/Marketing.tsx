import React from "react";
import { Page } from "@/components/ui/Page";
import { Seo } from "@/components/ui/Seo";
import { TeamSection } from "@/components/marketing/TeamSection";
import { StatsSection } from "@/components/marketing/StatsSection";
import { NewsletterSignup } from "@/components/marketing/NewsletterSignup";
import { AnnouncementBanner } from "@/components/marketing/AnnouncementBanner";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { VideoPlayer } from "@/components/marketing/VideoPlayer";
import { ImageGallery } from "@/components/marketing/ImageGallery";
import { Roadmap } from "@/components/marketing/Roadmap";
import { CaseStudyTeaser } from "@/components/marketing/CaseStudyTeaser";
import { Timeline } from "@/components/marketing/Timeline";
import { Section } from "@/components/ui/Section";

const comparisonFeatures = [
  {
    feature: "User Accounts",
    plans: { Basic: "1", Pro: "10", Enterprise: "Unlimited" },
  },
  {
    feature: "Project Creation",
    plans: { Basic: true, Pro: true, Enterprise: true },
  },
  {
    feature: "24/7 Support",
    plans: { Basic: false, Pro: true, Enterprise: true },
  },
];
const comparisonPlanNames = ["Basic", "Pro", "Enterprise"];

const galleryImages = [
  { src: "https://via.placeholder.com/400x300?text=Image+1", alt: "Image 1" },
  { src: "https://via.placeholder.com/400x300?text=Image+2", alt: "Image 2" },
  { src: "https://via.placeholder.com/400x300?text=Image+3", alt: "Image 3" },
  { src: "https://via.placeholder.com/400x300?text=Image+4", alt: "Image 4" },
];

const roadmapSteps = [
  { title: "Q1 - Planning", description: "Initial project planning and research.", status: "completed" as const },
  { title: "Q2 - Development", description: "Core feature development.", status: "current" as const },
  { title: "Q3 - Beta Launch", description: "Limited release for beta testers.", status: "upcoming" as const },
  { title: "Q4 - Public Launch", description: "Full public release.", status: "upcoming" as const },
];

const timelineItems = [
    { date: "2023-01-15", title: "Company Founded", description: "Our journey began with a small team and a big idea." },
    { date: "2023-08-20", title: "First Product Launch", description: "We launched our first product to a group of beta testers." },
    { date: "2024-03-10", title: "1,000 Active Users", description: "We celebrated a major milestone of reaching 1,000 active users." },
];

function MarketingPage() {
  return (
    <Page>
      <Seo title="Marketing Components" description="A showcase of all marketing components." />
      <Page.Header>
        <Page.Title>Marketing Components</Page.Title>
        <Page.Description>
          This page showcases the reusable marketing components.
        </Page.Description>
      </Page.Header>

      <AnnouncementBanner text="New components have been added!" actionText="Explore" onActionClick={() => alert("Action clicked!")} />

      <main className="py-8 space-y-16">
        <TeamSection />
        <StatsSection />
        <Section><div className="container"><NewsletterSignup /></div></Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Comparison Table</h2>
                <ComparisonTable features={comparisonFeatures} planNames={comparisonPlanNames} />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Video Player</h2>
                <VideoPlayer src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sample Video" />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>
                <ImageGallery images={galleryImages} />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
                <Roadmap steps={roadmapSteps} />
            </div>
        </Section>
        <Section>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CaseStudyTeaser image="https://via.placeholder.com/400x200?text=Case+Study+1" title="Case Study 1" description="A success story." href="#" />
                <CaseStudyTeaser image="https://via.placeholder.com/400x200?text=Case+Study+2" title="Case Study 2" description="Another success story." href="#" />
                <CaseStudyTeaser image="https://via.placeholder.com/400x200?text=Case+Study+3" title="Case Study 3" description="Yet another success story." href="#" />
            </div>
        </Section>
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
                <Timeline items={timelineItems} />
            </div>
        </Section>
      </main>
    </Page>
  );
}

export default MarketingPage;