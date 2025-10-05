import { productRoadmapSteps, RoadmapStep } from "@/data/product-roadmap";

export function useProductRoadmap(): RoadmapStep[] {
  return productRoadmapSteps;
}