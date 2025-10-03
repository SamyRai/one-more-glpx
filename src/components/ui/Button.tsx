import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button. Use `primary` for the main call‑to‑action,
   * `secondary` for less prominent actions and `ghost` for subtle links.
   */
  variant?: ButtonVariant;
  /**
   * Size of the button. Adjusts padding and font size.
   */
  size?: ButtonSize;
}

/**
 * Generic button component used throughout the application. Handles
 * consistent styling and allows overriding of button attributes.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', className, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'btn',
          `btn-${variant}`,
          `btn-${size}`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;