import { Testimonial } from "@/components/marketing/Testimonial";
import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Jane Doe",
    title: "CTO, Acme Inc.",
    quote:
      "This product has been a game-changer for our team. We're now able to ship features faster and with more confidence.",
  },
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "John Smith",
    title: "CEO, Globex Corp.",
    quote:
      "I'm blown away by the quality of this product. It's clear that a lot of thought and care went into its design.",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    name: "Alice Johnson",
    title: "Developer, Stark Industries",
    quote:
      "I can't imagine going back to my old workflow. This product has saved me countless hours of frustration.",
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