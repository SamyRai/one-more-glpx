import { caseStudies, CaseStudy } from "@/data/customer-stories";

export function useCustomerStories(): CaseStudy[] {
  return caseStudies;
}