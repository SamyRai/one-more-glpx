import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const featureVariants = cva("flex flex-col items-center text-center", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FeatureProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureVariants> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = React.forwardRef<HTMLDivElement, FeatureProps>(
  ({ className, variant, icon, title, description, ...props }, ref) => {
    return (
      <div
        className={cn(featureVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <div className="mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    );
  }
);

Feature.displayName = "Feature";

export { Feature };