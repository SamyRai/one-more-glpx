import React from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  title: string;
}

export const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  ({ src, title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", "aspect-video", className)}
        {...props}
      >
        <iframe
          src={src}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";