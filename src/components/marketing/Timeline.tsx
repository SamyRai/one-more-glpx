import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div
          className="absolute left-4 top-0 w-0.5 h-full bg-border -ml-px"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              </div>
              <div className="ml-8">
                <p className="font-semibold text-primary">{item.date}</p>
                <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Timeline.displayName = "Timeline";