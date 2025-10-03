import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from '@/hooks/useTranslation';
import clsx from 'clsx';

/**
 * Header component containing navigation links, theme toggle and language
 * selector. Adapts to mobile with a hamburger menu.
 */
export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/#features', label: t('nav.features') },
    { to: '/#pricing', label: t('nav.pricing') },
    { to: '/#contact', label: t('nav.contact') },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="header-logo">
          Week‑to‑Ready
        </NavLink>
        {/* Desktop nav */}
        <nav className="header-nav">
          {navItems.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="header-nav-link"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="sm"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🌞' : '🌜'}
          </Button>
          {/* Language select */}
          <select
            aria-label="Select language"
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="select-transparent"
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="mobile-menu-button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            ☰
          </Button>
        </div>
      </div>
      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className={clsx("mobile-nav", "md:hidden")}>
          <ul className="mobile-nav-list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <a
                  href={to}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;