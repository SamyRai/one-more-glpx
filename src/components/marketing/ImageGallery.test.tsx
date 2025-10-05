import { render, screen } from "@testing-library/react";
import { ImageGallery } from "./ImageGallery";

const testImages = [
  {
    src: "https://via.placeholder.com/300",
    alt: "Placeholder Image 1",
  },
  {
    src: "https://via.placeholder.com/300",
    alt: "Placeholder Image 2",
  },
  {
    src: "https://via.placeholder.com/300",
    alt: "Placeholder Image 3",
  },
];

describe("ImageGallery", () => {
  it("renders the image gallery with all images", () => {
    render(<ImageGallery images={testImages} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(testImages.length);

    images.forEach((img, index) => {
      expect(img).toHaveAttribute("src", testImages[index].src);
      expect(img).toHaveAttribute("alt", testImages[index].alt);
    });
  });
});