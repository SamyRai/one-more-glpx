import * as React from "react";
import { features, Feature as FeatureData } from "@/data/features";
import { ShieldCheck, Zap, Gem } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Zap,
  Gem,
};

export type Feature = Omit<FeatureData, "icon"> & {
  icon: React.ElementType;
};

export function useFeatures(): Feature[] {
  return features.map((feature) => ({
    ...feature,
    icon: iconMap[feature.icon],
  }));
}