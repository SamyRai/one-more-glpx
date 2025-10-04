import { Feature } from "@/components/marketing/Feature";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Zap, Gem } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "Secure by Default",
    description:
      "We provide a secure baseline for your Kubernetes cluster, so you can focus on your business.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Blazing Fast",
    description:
      "Our solution is designed to be fast and efficient, so you can get the most out of your cluster.",
  },
  {
    icon: <Gem className="w-12 h-12 text-primary" />,
    title: "Feature Rich",
    description:
      "We provide a wide range of features to help you manage your cluster, from security to observability.",
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