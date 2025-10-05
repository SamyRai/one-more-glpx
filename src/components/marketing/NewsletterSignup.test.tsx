import { render, screen } from "@testing-library/react";
import { NewsletterSignup } from "./NewsletterSignup";

describe("NewsletterSignup", () => {
  it("renders the newsletter signup form", () => {
    render(<NewsletterSignup />);

    expect(
      screen.getByText("Subscribe to our newsletter")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Get the latest news and updates from our team.")
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });
});