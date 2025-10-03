import React from 'react';
import clsx from 'clsx';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Unique identifier used for the input and its label's htmlFor. */
  id: string;
}

/**
 * A controlled or uncontrolled input field. Always include a label for
 * accessibility; use `sr-only` class if you want it visually hidden.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={clsx(
            'rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
