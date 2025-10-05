import { testimonials, Testimonial } from "@/data/testimonials";

export function useTestimonials(): Testimonial[] {
  return testimonials;
}