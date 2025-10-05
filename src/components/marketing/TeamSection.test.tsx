import { render, screen } from "@testing-library/react";
import { TeamSection } from "./TeamSection";
import React from "react";

// Mock the Avatar component
jest.mock("../ui/Avatar", () => {
  const React = require("react");
  return {
    Avatar: React.forwardRef<HTMLSpanElement, { children: React.ReactNode }>(
      ({ children, ...props }, ref) => (
        <span ref={ref} {...props}>
          {children}
        </span>
      )
    ),
    AvatarImage: React.forwardRef<
      HTMLImageElement,
      { src: string; alt: string }
    >(({ src, alt, ...props }, ref) => (
      <img ref={ref} src={src} alt={alt} {...props} />
    )),
    AvatarFallback: React.forwardRef<
      HTMLSpanElement,
      { children: React.ReactNode }
    >(({ children, ...props }, ref) => (
      <span ref={ref} {...props}>
        {children}
      </span>
    )),
  };
});

describe("TeamSection", () => {
  it("renders the team section with all team members", () => {
    render(<TeamSection />);

    expect(screen.getByText("Our Team")).toBeInTheDocument();
    expect(
      screen.getByText("Meet the talented people behind our success.")
    ).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO & Founder")).toBeInTheDocument();
    expect(images[0]).toHaveAttribute(
      "src",
      "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    );

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Chief Technology Officer")).toBeInTheDocument();
    expect(images[1]).toHaveAttribute(
      "src",
      "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    );

    expect(screen.getByText("Sam Wilson")).toBeInTheDocument();
    expect(screen.getByText("Lead Designer")).toBeInTheDocument();
    expect(images[2]).toHaveAttribute(
      "src",
      "https://i.pravatar.cc/150?u=a04258114e29026702d"
    );

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.getByText("Head of Marketing")).toBeInTheDocument();
    expect(images[3]).toHaveAttribute(
      "src",
      "https://i.pravatar.cc/150?u=a042581f4e29026704e"
    );
  });
});