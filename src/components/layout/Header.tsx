import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from '@/hooks/useTranslation';

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
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">
          Week‑to‑Ready
        </NavLink>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="text-sm font-medium hover:text-primary-dark focus:outline-none focus:underline"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
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
            className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
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
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col gap-2 px-4 py-4">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <a
                  href={to}
                  className="block py-2 text-sm font-medium hover:text-primary-dark"
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
