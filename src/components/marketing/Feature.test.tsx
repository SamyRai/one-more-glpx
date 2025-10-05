import { render, screen } from "@testing-library/react";
import { Feature } from "./Feature";

describe("Feature", () => {
  it("renders the feature with the correct title, description, and icon", () => {
    const icon = <span>Icon</span>;
    const title = "Test Feature";
    const description = "This is a test feature.";

    render(<Feature icon={icon} title={title} description={description} />);

    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});