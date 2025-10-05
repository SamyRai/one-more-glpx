import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface CaseStudyTeaserProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const CaseStudyTeaser = React.forwardRef<
  HTMLDivElement,
  CaseStudyTeaserProps
>(({ image, title, description, href, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("overflow-hidden rounded-lg shadow-lg", className)}
      {...props}
    >
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <a href={href}>
          <Button variant="outline" asChild>
            <span>
              Read Case Study <ArrowRight className="w-4 h-4 ml-2 inline" />
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
});

CaseStudyTeaser.displayName = "CaseStudyTeaser";