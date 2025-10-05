import { render, screen } from "@testing-library/react";
import { VideoPlayer } from "./VideoPlayer";

describe("VideoPlayer", () => {
  it("renders the video player with the correct src and title", () => {
    const src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    const title = "Test Video";

    render(<VideoPlayer src={src} title={title} />);

    const iframe = screen.getByTitle(title);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", src);
  });
});