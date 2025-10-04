import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./Card";

describe("Card", () => {
  it("should render a complete card with all sections", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>,
    );

    // Check for the presence of the card and its sections
    const card = screen
      .getByText("Card Title")
      .closest('[class*="rounded-lg"]');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
    );

    // Check for the title and description
    expect(
      screen.getByRole("heading", { name: /card title/i, level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();

    // Check for the content and footer
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });
});
