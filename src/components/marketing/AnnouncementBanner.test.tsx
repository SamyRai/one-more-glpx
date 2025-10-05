import { render, screen, fireEvent } from "@testing-library/react";
import { AnnouncementBanner } from "./AnnouncementBanner";

describe("AnnouncementBanner", () => {
  it("renders the announcement banner with the correct text and handles clicks", () => {
    const onActionClick = jest.fn();
    const text = "New features available now!";
    const actionText = "Learn More";

    render(
      <AnnouncementBanner
        text={text}
        actionText={actionText}
        onActionClick={onActionClick}
      />
    );

    expect(screen.getByText(text)).toBeInTheDocument();
    const button = screen.getByRole("button", { name: actionText });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onActionClick).toHaveBeenCalledTimes(1);
  });
});