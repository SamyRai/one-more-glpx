import { render, screen } from "@testing-library/react";
import { Testimonial } from "./Testimonial";

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

describe("Testimonial", () => {
  it("renders the testimonial with the correct image, name, title, and quote", () => {
    const image = "https://example.com/image.jpg";
    const name = "John Doe";
    const title = "CEO, Example Inc.";
    const quote = "This is a great product!";

    render(<Testimonial image={image} name={name} title={title} quote={quote} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", image);
    expect(img).toHaveAttribute("alt", name);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`"${quote}"`)).toBeInTheDocument();
  });
});