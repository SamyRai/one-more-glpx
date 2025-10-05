import { Feature } from "@/components/marketing/Feature";
import { Section } from "@/components/ui/Section";
import { useFeatures } from "@/hooks/useFeatures";

export function Features() {
  const features = useFeatures();

  return (
    <Section title="Features" description="Discover the amazing features we offer.">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={<feature.icon className="w-12 h-12 text-primary" />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}