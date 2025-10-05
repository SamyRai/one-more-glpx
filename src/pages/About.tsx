import React from "react";
import { Page } from "@/components/ui/Page";
import { Seo } from "@/components/ui/Seo";
import { TeamSection } from "@/components/marketing/TeamSection";
import { Timeline } from "@/components/marketing/Timeline";
import { Section } from "@/components/ui/Section";

const timelineItems = [
    { date: "2023-01-15", title: "Company Founded", description: "Our journey began with a small team and a big idea to simplify Kubernetes security." },
    { date: "2023-08-20", title: "First Product Launch", description: "We launched our first product to a group of beta testers, gathering crucial feedback." },
    { date: "2024-03-10", title: "1,000 Active Users", description: "We celebrated a major milestone of reaching 1,000 active users and securing our first enterprise clients." },
    { date: "2024-09-01", title: "Series A Funding", description: "Secured $10M in Series A funding to accelerate our mission and expand the team." },
];

function AboutPage() {
  return (
    <Page>
      <Seo title="About Us" description="Learn more about our mission, our team, and our journey." />
      <Page.Header>
        <Page.Title>About Our Company</Page.Title>
        <Page.Description>
          We are a passionate team dedicated to making cloud-native security accessible to everyone.
        </Page.Description>
      </Page.Header>

      <main className="py-8 space-y-16">
        <TeamSection />
        <Section>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                <Timeline items={timelineItems} />
            </div>
        </Section>
      </main>
    </Page>
  );
}

export default AboutPage;