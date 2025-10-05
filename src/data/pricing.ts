import { Button } from "@/components/ui/Button";

export type Plan = {
  title: string;
  price: string;
  period: string;
  features: string[];
  action: {
    text: string;
    variant: "default" | "outline" | "primary";
    as?: string;
    href?: string;
  };
  variant?: "default" | "primary";
};

export const pricingPlans: Plan[] = [
  {
    title: "Developer",
    price: "$0",
    period: "forever",
    features: ["1 connected cluster", "Core security scanning", "Community support"],
    action: {
      text: "Start for Free",
      variant: "outline",
    },
  },
  {
    title: "Team",
    price: "$249",
    period: "month",
    features: ["Up to 5 clusters", "Automated compliance (PCI, DORA)", "eBPF-based observability", "Priority email support"],
    action: {
      text: "Start 14-Day Trial",
      variant: "primary",
    },
    variant: "primary",
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "year",
    features: ["Unlimited clusters", "Dedicated account manager", "24/7 emergency support", "Custom policy development"],
    action: {
      text: "Contact Sales",
      variant: "outline",
    },
  },
];

export type ComparisonFeature = {
  feature: string;
  plans: {
    Developer: string | boolean;
    Team: string | boolean;
    Enterprise: string | boolean;
  };
};

export const comparisonFeatures: ComparisonFeature[] = [
  { feature: "Connected Clusters", plans: { Developer: "1", Team: "5", Enterprise: "Unlimited" } },
  { feature: "Core Security Scanning", plans: { Developer: true, Team: true, Enterprise: true } },
  { feature: "Automated Compliance (PCI, DORA)", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "eBPF-based Observability", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "Priority Email Support", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "24/7 Emergency Support", plans: { Developer: false, Team: false, Enterprise: true } },
  { feature: "Dedicated Account Manager", plans: { Developer: false, Team: false, Enterprise: true } },
  { feature: "Custom Policy Development", plans: { Developer: false, Team: false, Enterprise: true } },
];

export const comparisonPlanNames = ["Developer", "Team", "Enterprise"];