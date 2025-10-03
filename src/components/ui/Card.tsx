import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Adds a subtle border and padding around the card. By default a card has
   * no elevation; pass `shadow` to get a drop shadow.
   */
  shadow?: boolean;
}

/**
 * A simple container used to group related content. Cards adopt the
 * surrounding theme colors and adjust styling on dark mode automatically.
 */
export const Card: React.FC<CardProps> = ({
  className,
  children,
  shadow = false,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6',
        shadow && 'shadow-md dark:shadow-black/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
