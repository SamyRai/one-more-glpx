import { render, screen } from "@testing-library/react";
import { CaseStudyTeaser } from "./CaseStudyTeaser";
import React from "react";

// Mock lucide-react icon
jest.mock("lucide-react", () => ({
  ...jest.requireActual("lucide-react"),
  ArrowRight: (props: any) => <svg {...props} data-testid="arrow-right-icon" />,
}));

describe("CaseStudyTeaser", () => {
  it("renders the case study teaser with correct content and link", () => {
    const image = "https://via.placeholder.com/400x200";
    const title = "Customer Success Story";
    const description = "How our product helped a customer achieve their goals.";
    const href = "/case-studies/customer-x";

    render(
      <CaseStudyTeaser
        image={image}
        title={title}
        description={description}
        href={href}
      />
    );

    // Check for image
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", image);
    expect(img).toHaveAttribute("alt", title);

    // Check for text content
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();

    // Check for link
    const link = screen.getByRole("link", { name: /read case study/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", href);

    // Check for icon
    expect(screen.getByTestId("arrow-right-icon")).toBeInTheDocument();
  });
});