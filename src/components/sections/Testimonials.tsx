import { Testimonial } from "@/components/marketing/Testimonial";
import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Jane Doe",
    title: "CTO, Acme Inc.",
    quote:
      "The automated security baseline is a lifesaver. We've cut our pre-deployment security checks by 50%, allowing us to ship critical updates faster than ever.",
  },
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "John Smith",
    title: "Head of Platform, Globex Corp.",
    quote:
      "Finally, a security solution that doesn't slow us down. The eBPF-based monitoring gives us deep visibility without any noticeable performance hit on our clusters.",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    name: "Alice Johnson",
    title: "Lead Security Engineer, Stark Industries",
    quote:
      "Meeting compliance standards like PCI and DORA used to be a manual, time-consuming nightmare. This platform automates evidence collection and makes audits a breeze.",
  },
];

export function Testimonials() {
  return (
    <Section
      title="Testimonials"
      description="See what our customers have to say about us."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            title={testimonial.title}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </Section>
  );
}