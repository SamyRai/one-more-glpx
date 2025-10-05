import { NewsletterSignup } from "@/components/marketing/NewsletterSignup";
import { Section } from "@/components/ui/Section";
import React from "react";

export function NewsletterSection() {
  return (
    <Section>
      <div className="container">
        <NewsletterSignup
          title="Stay Ahead of the Curve"
          description="Subscribe to our newsletter for the latest in cloud-native security, product updates, and exclusive content."
        />
      </div>
    </Section>
  );
}