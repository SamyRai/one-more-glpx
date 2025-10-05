import {
  pricingPlans,
  comparisonFeatures,
  comparisonPlanNames,
  Plan,
  ComparisonFeature,
} from "@/data/pricing";

export function usePricing() {
  return {
    plans: pricingPlans,
    features: comparisonFeatures,
    planNames: comparisonPlanNames,
  };
}