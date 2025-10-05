import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  ChevronDown: () => <svg>ChevronDown</svg>,
}));

describe("Accordion", () => {
  it("should open and close the accordion item on click", async () => {
    const user = userEvent.setup();
    const triggerText = "Is it accessible?";
    const contentText = "Yes. It adheres to the WAI-ARIA design pattern.";

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{triggerText}</AccordionTrigger>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByText(triggerText);

    // Initially, the content should not be in the document
    expect(screen.queryByText(contentText)).not.toBeInTheDocument();

    // Click the trigger to open the accordion
    await user.click(trigger);

    // Now, the content should be visible
    const content = screen.getByText(contentText);
    expect(content).toBeVisible();

    // Click the trigger again to close the accordion
    await user.click(trigger);

    // The content should be removed from the document again
    expect(screen.queryByText(contentText)).not.toBeInTheDocument();
  });
});