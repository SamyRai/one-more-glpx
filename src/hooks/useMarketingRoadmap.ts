import { marketingRoadmapSteps, RoadmapStep } from "@/data/marketing-roadmap";

export function useMarketingRoadmap(): RoadmapStep[] {
  return marketingRoadmapSteps;
}