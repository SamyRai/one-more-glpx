import { Testimonial } from "@/components/marketing/Testimonial";
import { Section } from "@/components/ui/Section";
import { useTestimonials } from "@/hooks/useTestimonials";

export function Testimonials() {
  const testimonials = useTestimonials();

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