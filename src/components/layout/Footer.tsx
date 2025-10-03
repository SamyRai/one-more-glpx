import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Footer component. Displays a minimal copyright notice and anchors back
 * to the contact section.
 */
export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Week‑to‑Ready. All rights reserved.
        </p>
        <a
          href="#contact"
          className="text-sm font-medium text-primary hover:underline focus:outline-none focus:underline"
        >
          {t('nav.contact')}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
