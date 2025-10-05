import React from "react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: {
    src: string;
    alt: string;
  }[];
}

export const ImageGallery = React.forwardRef<
  HTMLDivElement,
  ImageGalleryProps
>(({ images, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4", className)}
      {...props}
    >
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
});

ImageGallery.displayName = "ImageGallery";