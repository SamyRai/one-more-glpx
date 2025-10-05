import React from "react";
import { cn } from "@/lib/utils";

interface RoadmapStep {
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

interface RoadmapProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: RoadmapStep[];
}

const statusClasses = {
  completed: "border-green-500 bg-green-500",
  current: "border-blue-500 bg-blue-500",
  upcoming: "border-gray-300 bg-gray-300",
};

export const Roadmap = React.forwardRef<HTMLDivElement, RoadmapProps>(
  ({ steps, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div
          className="absolute left-1/2 w-0.5 h-full -translate-x-1/2 bg-gray-200"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center w-full">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full border-2",
                  statusClasses[step.status],
                  "z-10"
                )}
              >
                {step.status === "completed" && (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <div
                className={cn(
                  "w-1/2 p-4 rounded-lg",
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                )}
              >
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Roadmap.displayName = "Roadmap";