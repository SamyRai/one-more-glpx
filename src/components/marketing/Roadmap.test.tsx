import { render, screen } from "@testing-library/react";
import { Roadmap } from "./Roadmap";

const testSteps = [
  {
    title: "Phase 1: Research",
    description: "Completed research and planning.",
    status: "completed" as const,
  },
  {
    title: "Phase 2: Development",
    description: "Currently in the development phase.",
    status: "current" as const,
  },
  {
    title: "Phase 3: Launch",
    description: "Planning the official launch.",
    status: "upcoming" as const,
  },
];

describe("Roadmap", () => {
  it("renders the roadmap with all steps and their statuses", () => {
    render(<Roadmap steps={testSteps} />);

    // Check for step titles and descriptions
    testSteps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    });

    // Check for completed icon
    const completedStep = screen.getByText("Phase 1: Research").closest("div.flex.items-center");
    expect(completedStep?.querySelector("svg")).toBeInTheDocument();

    // Check for current and upcoming steps not having the completed icon
    const currentStep = screen.getByText("Phase 2: Development").closest("div.flex.items-center");
    const upcomingStep = screen.getByText("Phase 3: Launch").closest("div.flex.items-center");
    expect(currentStep?.querySelector("svg")).not.toBeInTheDocument();
    expect(upcomingStep?.querySelector("svg")).not.toBeInTheDocument();
  });
});