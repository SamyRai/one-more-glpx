import { render, screen } from "@testing-library/react";
import { CallToAction } from "./CallToAction";
import { Button } from "../ui/Button";

describe("CallToAction", () => {
  it("renders the call to action with the correct title, description, and action", () => {
    const title = "Ready to get started?";
    const description = "Sign up now and get 20% off.";
    const action = <Button>Sign Up</Button>;

    render(
      <CallToAction title={title} description={description} action={action} />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument();
  });
});