import { render, screen } from "@testing-library/react";
import { StatsSection } from "./StatsSection";

describe("StatsSection", () => {
  it("renders the stats section with all stats", () => {
    render(<StatsSection />);

    expect(screen.getByText("Trusted by Thousands")).toBeInTheDocument();
    expect(
      screen.getByText("We're proud to have the trust of thousands of users and companies.")
    ).toBeInTheDocument();

    expect(screen.getByText("10,000+")).toBeInTheDocument();
    expect(screen.getByText("Active Users")).toBeInTheDocument();

    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("Integrations")).toBeInTheDocument();

    expect(screen.getByText("99.9%")).toBeInTheDocument();
    expect(screen.getByText("Uptime")).toBeInTheDocument();

    expect(screen.getByText("24/7")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
  });
});