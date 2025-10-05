import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Card, CardContent } from "../ui/Card";

const testimonialVariants = cva("flex flex-col items-center text-center", {
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

export interface TestimonialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof testimonialVariants> {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ className, variant, image, name, title, quote, ...props }, ref) => {
    return (
      <Card
        className={cn(testimonialVariants({ variant, className }), "p-6")}
        ref={ref}
        {...props}
      >
        <CardContent>
          <Avatar className="mb-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="mb-4 text-lg italic">"{quote}"</p>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </CardContent>
      </Card>
    );
  }
);

Testimonial.displayName = "Testimonial";

export { Testimonial };