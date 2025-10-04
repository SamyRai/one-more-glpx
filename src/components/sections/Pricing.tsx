import { Pricing } from "@/components/marketing/Pricing";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const pricingPlans = [
  {
    title: "Basic",
    price: "$0",
    period: "month",
    features: ["1 user", "1 project", "1GB storage"],
    action: <Button variant="outline">Get Started</Button>,
  },
  {
    title: "Pro",
    price: "$49",
    period: "month",
    features: ["5 users", "Unlimited projects", "10GB storage"],
    action: <Button>Get Started</Button>,
    variant: "primary",
  },
  {
    title: "Enterprise",
    price: "Contact us",
    period: "year",
    features: ["Unlimited users", "Unlimited projects", "Unlimited storage"],
    action: <Button variant="outline">Contact Us</Button>,
  },
];

export function PricingSection() {
  return (
    <Section
      title="Pricing"
      description="Choose the plan that's right for you."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Pricing
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            action={plan.action}
            variant={plan.variant as "default" | "primary" | undefined}
          />
        ))}
      </div>
    </Section>
  );
}