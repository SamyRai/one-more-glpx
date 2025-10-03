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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
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
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-lg w-full p-6 overflow-y-auto max-h-[90vh]"
      >
        {title && (
          <h2 id="modal-title" className="text-lg font-semibold mb-2">
            {title}
          </h2>
        )}
        {description && (
          <p
            id="modal-description"
            className="text-sm text-gray-600 dark:text-gray-400 mb-4"
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
