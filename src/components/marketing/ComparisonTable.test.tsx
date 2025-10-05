import { render, screen } from "@testing-library/react";
import { ComparisonTable } from "./ComparisonTable";
import React from "react";

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  Check: (props: any) => <svg {...props} data-testid="check-icon" />,
  X: (props: any) => <svg {...props} data-testid="x-icon" />,
}));

const testFeatures = [
  {
    feature: "User Accounts",
    plans: { Basic: "1", Pro: "10", Enterprise: "Unlimited" },
  },
  {
    feature: "Project Creation",
    plans: { Basic: true, Pro: true, Enterprise: true },
  },
  {
    feature: "24/7 Support",
    plans: { Basic: false, Pro: true, Enterprise: true },
  },
];

const testPlanNames = ["Basic", "Pro", "Enterprise"];

describe("ComparisonTable", () => {
  it("renders the comparison table with features, plans, and correct icons", () => {
    render(
      <ComparisonTable features={testFeatures} planNames={testPlanNames} />
    );

    // Check for headers
    expect(screen.getByText("Feature")).toBeInTheDocument();
    testPlanNames.forEach((planName) => {
      expect(screen.getByText(planName)).toBeInTheDocument();
    });

    // Check for feature rows and text values
    expect(screen.getByText("User Accounts")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Unlimited")).toBeInTheDocument();

    expect(screen.getByText("Project Creation")).toBeInTheDocument();
    expect(screen.getByText("24/7 Support")).toBeInTheDocument();

    // Check for correct number of icons
    const checkIcons = screen.getAllByTestId("check-icon");
    const xIcons = screen.getAllByTestId("x-icon");

    // 3 for "Project Creation" + 2 for "24/7 Support"
    expect(checkIcons).toHaveLength(5);
    // 1 for "24/7 Support"
    expect(xIcons).toHaveLength(1);
  });
});