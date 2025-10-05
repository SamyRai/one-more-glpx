import { Pricing } from "@/components/marketing/Pricing";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { usePricing } from "@/hooks/usePricing";

export function PricingSection() {
  const { plans, features, planNames } = usePricing();

  return (
    <Section
      title="Pricing"
      description="Choose the plan that's right for you."
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Pricing
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              action={
                <Button variant={plan.action.variant}>{plan.action.text}</Button>
              }
              variant={plan.variant}
            />
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Compare Plans</h3>
          <ComparisonTable features={features} planNames={planNames} />
        </div>
      </div>
    </Section>
  );
}