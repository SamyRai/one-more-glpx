import React from "react";
import { Section } from "@/components/ui/Section";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "10,000+",
    label: "Active Users",
  },
  {
    value: "50+",
    label: "Integrations",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export const StatsSection: React.FC = () => {
  return (
    <Section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Thousands
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're proud to have the trust of thousands of users and companies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};