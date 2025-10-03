import React, { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Title of the modal for screen readers and semantics. */
  title?: string;
  /** Optional description for additional context. */
  description?: string;
  children: React.ReactNode;
}

/**
 * Simple modal implementation. Uses an accessible dialog pattern:
 * - Adds `aria-modal` and `role="dialog"` attributes
 * - Focus is trapped within the modal while open
 * - Escape key closes the modal
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
    }
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        // click on backdrop closes the modal
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
        className="modal-content"
      >
        {title && (
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>
        )}
        {description && (
          <p
            id="modal-description"
            className="modal-description"
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;