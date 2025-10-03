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
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">
          © {currentYear} Week‑to‑Ready. All rights reserved.
        </p>
        <a
          href="#contact"
          className="footer-link"
        >
          {t('nav.contact')}
        </a>
      </div>
    </footer>
  );
};

export default Footer;