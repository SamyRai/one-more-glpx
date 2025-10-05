export type RoadmapStep = {
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
};

export const marketingRoadmapSteps: RoadmapStep[] = [
  { title: "Q1 - Planning", description: "Initial project planning and research.", status: "completed" },
  { title: "Q2 - Development", description: "Core feature development.", status: "current" },
  { title: "Q3 - Beta Launch", description: "Limited release for beta testers.", status: "upcoming" },
  { title: "Q4 - Public Launch", description: "Full public release.", status: "upcoming" },
];