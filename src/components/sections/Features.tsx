import { Feature } from "@/components/marketing/Feature";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Zap, Gem } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "Secure by Default",
    description:
      "Automate your security baseline. Our platform enforces best practices out-of-the-box, letting you ship faster without sacrificing security.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Blazing Fast",
    description:
      "Instant insights, zero overhead. Our eBPF-based solution offers powerful observability with minimal performance impact, so your cluster runs at peak efficiency.",
  },
  {
    icon: <Gem className="w-12 h-12 text-primary" />,
    title: "Feature Rich",
    description:
      "From compliance mapping for PCI & DORA to automated policy enforcement, get all the tools you need to secure your entire software development lifecycle.",
  },
];

export function Features() {
  return (
    <Section title="Features" description="Discover the amazing features we offer.">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}