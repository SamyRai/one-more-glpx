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
      <div className="form-group">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={className}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;