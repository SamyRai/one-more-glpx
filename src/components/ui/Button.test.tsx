import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render a default button", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary text-primary-foreground");
  });

  it("should render a destructive button", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button", { name: /delete/i });
    expect(button).toHaveClass("bg-destructive text-destructive-foreground");
  });

  it("should render an outline button", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole("button", { name: /outline/i });
    expect(button).toHaveClass("border border-input bg-background");
  });

  it("should render a secondary button", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: /secondary/i });
    expect(button).toHaveClass("bg-secondary text-secondary-foreground");
  });

  it("should render a ghost button", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByRole("button", { name: /ghost/i });
    expect(button).toHaveClass("hover:bg-accent hover:text-accent-foreground");
  });

  it("should render a link button", () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByRole("button", { name: /link/i });
    expect(button).toHaveClass(
      "text-primary underline-offset-4 hover:underline",
    );
  });

  it("should render a small button", () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByRole("button", { name: /small/i });
    expect(button).toHaveClass("h-9 rounded-md px-3");
  });

  it("should render a large button", () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByRole("button", { name: /large/i });
    expect(button).toHaveClass("h-11 rounded-md px-8");
  });

  it("should render an icon button", () => {
    render(<Button size="icon">Icon</Button>);
    const button = screen.getByRole("button", { name: /icon/i });
    expect(button).toHaveClass("h-10 w-10");
  });

  it("should render as a child component with button classes", () => {
    render(
      <Button asChild>
        <a href="/">Go home</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: /go home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("bg-primary text-primary-foreground");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
