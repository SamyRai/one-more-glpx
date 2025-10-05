import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";

const testItems = [
  {
    date: "2023-01-15",
    title: "Company Founded",
    description: "Our journey began with a small team and a big idea.",
  },
  {
    date: "2023-08-20",
    title: "First Product Launch",
    description: "We launched our first product to a group of beta testers.",
  },
  {
    date: "2024-03-10",
    title: "1,000 Active Users",
    description: "We celebrated a major milestone of reaching 1,000 active users.",
  },
];

describe("Timeline", () => {
  it("renders the timeline with all items", () => {
    render(<Timeline items={testItems} />);

    testItems.forEach((item) => {
      expect(screen.getByText(item.date)).toBeInTheDocument();
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });
});