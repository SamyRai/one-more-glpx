import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

describe("Alert", () => {
  it("should render a default alert with title and description", () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("bg-background text-foreground");

    expect(
      screen.getByRole("heading", { name: /alert title/i, level: 5 }),
    ).toBeInTheDocument();
    expect(screen.getByText("Alert Description")).toBeInTheDocument();
  });

  it("should render a destructive alert", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>This is a destructive alert.</AlertDescription>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("border-destructive/50 text-destructive");
  });
});
