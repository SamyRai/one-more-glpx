import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Unique anchor id for section. */
  id?: string;
}

/**
 * Provides consistent vertical spacing between page sections. Uses responsive
 * padding to adapt spacing across breakpoints.
 */
export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${className ?? ''}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
