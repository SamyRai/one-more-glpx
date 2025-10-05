export type RoadmapStep = {
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
};

export const productRoadmapSteps: RoadmapStep[] = [
  { title: "Q3 2024 - Expanded Compliance Packs", description: "Adding support for HIPAA and SOC 2 compliance standards.", status: "completed" },
  { title: "Q4 2024 - Public API Launch", description: "Enabling programmatic access to automate security workflows.", status: "current" },
  { title: "Q1 2025 - Advanced Threat Intelligence", description: "Integrating with leading threat intelligence feeds for proactive defense.", status: "upcoming" },
  { title: "Q2 2025 - Serverless Security Module", description: "Extending our security coverage to serverless environments.", status: "upcoming" },
];