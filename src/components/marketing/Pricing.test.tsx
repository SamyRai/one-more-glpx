import { render, screen } from "@testing-library/react";
import { Pricing } from "./Pricing";
import { Button } from "../ui/Button";

describe("Pricing", () => {
  it("renders the pricing plan with the correct title, price, period, features, and action", () => {
    const title = "Test Plan";
    const price = "$99";
    const period = "month";
    const features = ["Feature 1", "Feature 2", "Feature 3"];
    const action = <Button>Choose Plan</Button>;

    render(
      <Pricing
        title={title}
        price={price}
        period={period}
        features={features}
        action={action}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByText(`/${period}`)).toBeInTheDocument();
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: /choose plan/i })).toBeInTheDocument();
  });
});