import { Pricing } from "@/components/marketing/Pricing";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";

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

const comparisonFeatures = [
  { feature: "Connected Clusters", plans: { Developer: "1", Team: "5", Enterprise: "Unlimited" } },
  { feature: "Core Security Scanning", plans: { Developer: true, Team: true, Enterprise: true } },
  { feature: "Automated Compliance (PCI, DORA)", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "eBPF-based Observability", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "Priority Email Support", plans: { Developer: false, Team: true, Enterprise: true } },
  { feature: "24/7 Emergency Support", plans: { Developer: false, Team: false, Enterprise: true } },
  { feature: "Dedicated Account Manager", plans: { Developer: false, Team: false, Enterprise: true } },
  { feature: "Custom Policy Development", plans: { Developer: false, Team: false, Enterprise: true } },
];
const comparisonPlanNames = ["Developer", "Team", "Enterprise"];

export function PricingSection() {
  return (
    <Section
      title="Pricing"
      description="Choose the plan that's right for you."
    >
      <div className="space-y-16">
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
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Compare Plans</h3>
          <ComparisonTable features={comparisonFeatures} planNames={comparisonPlanNames} />
        </div>
      </div>
    </Section>
  );
}