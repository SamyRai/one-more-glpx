import { Pricing } from "@/components/marketing/Pricing";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const pricingPlans = [
  {
    title: "Developer",
    price: "$0",
    period: "forever",
    features: ["1 connected cluster", "Core security scanning", "Community support"],
    action: <Button variant="outline">Start for Free</Button>,
  },
  {
    title: "Team",
    price: "$249",
    period: "month",
    features: ["Up to 5 clusters", "Automated compliance (PCI, DORA)", "eBPF-based observability", "Priority email support"],
    action: <Button>Start 14-Day Trial</Button>,
    variant: "primary",
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "year",
    features: ["Unlimited clusters", "Dedicated account manager", "24/7 emergency support", "Custom policy development"],
    action: <Button variant="outline">Contact Sales</Button>,
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