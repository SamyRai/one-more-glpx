import React from 'react';
import clsx from 'clsx';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

/**
 * A multi‑line text area with an associated label. Provides consistent
 * styling and focus management across browsers.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, className, rows = 4, ...props }, ref) => {
    return (
      <div className="form-group">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          className={clsx('resize-y', className)}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;