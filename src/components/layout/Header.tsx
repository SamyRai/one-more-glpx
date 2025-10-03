import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ShieldCheck,
  Palette,
  Moon,
  Sun,
  Github,
  Linkedin,
  Calendar,
  TerminalSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

function Header() {
  const [open, setOpen] = useState(false);
  const { mode, setMode, setOpen: setThemeOpen } = useTheme();

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'hover:underline',
      isActive ? 'font-semibold text-primary' : 'text-muted-foreground'
    );

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6" />
            <span className="font-semibold">Week-to-Ready</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/posts" className={navLinkClasses}>
              Articles
            </NavLink>
            <NavLink to="/starter-pack" className={navLinkClasses}>
              Starter Pack
            </NavLink>
            <NavLink to="/book" className={navLinkClasses}>
              Book a call
            </NavLink>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setThemeOpen(true)}
            >
              <Palette className="h-4 w-4 mr-2" />
              Theme
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            >
              {mode === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild>
              <Link to="/book">
                <Calendar className="h-4 w-4 mr-2" />
                Get slot
              </Link>
            </Button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setThemeOpen(true)}
              aria-label="Theme"
            >
              <Palette className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <TerminalSquare className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="md:hidden pb-4 flex flex-col gap-1 text-sm"
            >
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/posts" onClick={closeMenu}>
                  Articles
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/starter-pack" onClick={closeMenu}>
                  Starter Pack
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/book" onClick={closeMenu}>
                  Book a call
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => {
                  setThemeOpen(true);
                  closeMenu();
                }}
              >
                Theme
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  Code
                </a>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}

export default Header;