import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/Card";

const pricingVariants = cva("flex flex-col", {
  variants: {
    variant: {
      default: "border-border",
      primary: "border-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface PricingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingVariants> {
  title: string;
  price: string;
  period: string;
  features: string[];
  action: React.ReactNode;
}

const Pricing = React.forwardRef<HTMLDivElement, PricingProps>(
  ({ className, variant, title, price, period, features, action, ...props }, ref) => {
    return (
      <Card
        className={cn(pricingVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-4">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground">/{period}</span>
          </div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          {action}
        </CardFooter>
      </Card>
    );
  }
);

Pricing.displayName = "Pricing";

export { Pricing };