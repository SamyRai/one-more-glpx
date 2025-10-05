import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const callToActionVariants = cva(
  "flex flex-col items-center justify-center space-y-4 text-center",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        primary: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CallToActionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof callToActionVariants> {
  title: string;
  description: string;
  action: React.ReactNode;
}

const CallToAction = React.forwardRef<HTMLDivElement, CallToActionProps>(
  ({ className, variant, title, description, action, ...props }, ref) => {
    return (
      <Container
        className={cn(callToActionVariants({ variant, className }), "py-12")}
        ref={ref}
        {...props}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          {description}
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          {action}
        </div>
      </Container>
    );
  }
);

CallToAction.displayName = "CallToAction";

export { CallToAction };