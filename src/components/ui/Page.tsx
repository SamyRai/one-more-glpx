import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Page = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.22,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    />
  );
});

Page.displayName = 'Page';

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-8 text-center', className)}
    {...props}
  />
));
PageHeader.displayName = 'PageHeader';

const PageTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn('text-3xl font-semibold tracking-tight', className)}
    {...props}
  />
));
PageTitle.displayName = 'PageTitle';

const PageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('mt-2 text-muted-foreground', className)}
    {...props}
  />
));
PageDescription.displayName = 'PageDescription';

Page.Header = PageHeader;
Page.Title = PageTitle;
Page.Description = PageDescription;

export { Page };