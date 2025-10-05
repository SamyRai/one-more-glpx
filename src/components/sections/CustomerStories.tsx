import { CaseStudyTeaser } from "@/components/marketing/CaseStudyTeaser";
import { Section } from "@/components/ui/Section";
import { useCustomerStories } from "@/hooks/useCustomerStories";

export function CustomerStories() {
  const caseStudies = useCustomerStories();

  return (
    <Section
      title="Trusted by Industry Leaders"
      description="Read how our customers have transformed their security and operations."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <CaseStudyTeaser
            key={index}
            image={study.image}
            title={study.title}
            description={study.description}
            href={study.href}
          />
        ))}
      </div>
    </Section>
  );
}