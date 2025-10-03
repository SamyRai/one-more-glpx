import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShieldCheck, Palette, Moon, Sun, Github, Linkedin, Calendar, TerminalSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import Container from '@/components/ui/Container';

function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[var(--surface)]/75 border-b border-[var(--divider)]">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6" />
            <span className="font-semibold">Week‑to‑Ready</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/posts" className={({ isActive }) => `hover:underline ${isActive ? 'text-[var(--accent-700)] font-medium' : ''}`}>Articles</NavLink>
            <NavLink to="/starter-pack" className={({ isActive }) => `hover:underline ${isActive ? 'text-[var(--accent-700)] font-medium' : ''}`}>Starter Pack</NavLink>
            <NavLink to="/book" className={({ isActive }) => `hover:underline ${isActive ? 'text-[var(--accent-700)] font-medium' : ''}`}>Book a call</NavLink>
            <button onClick={() => theme?.setOpen(true)} className="inline-flex items-center gap-2 rounded-full ring-1 ring-[var(--ring)] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-300)] focus-visible:ring-offset-2">
              <Palette className="h-4 w-4" />
              Theme
            </button>
            <button onClick={() => theme?.setMode(theme?.mode === 'dark' ? 'light' : 'dark')} className="inline-flex items-center gap-2 rounded-full ring-1 ring-[var(--ring)] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-300)] focus-visible:ring-offset-2">
              {theme?.mode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden lg:inline">{theme?.mode === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1"><Github className="h-4 w-4" /> Code</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-600)] hover:bg-[var(--accent-700)] text-white px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-300)] focus-visible:ring-offset-2">
              <Calendar className="h-4 w-4" />
              Get slot
            </Link>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button className="p-2" onClick={() => theme?.setOpen(true)} aria-label="Theme">
              <Palette className="h-6 w-6" />
            </button>
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <TerminalSquare className="h-6 w-6" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="md:hidden pb-4 flex flex-col gap-3 text-sm">
              <Link to="/posts" onClick={() => setOpen(false)}>Articles</Link>
              <Link to="/starter-pack" onClick={() => setOpen(false)}>Starter Pack</Link>
              <Link to="/book" onClick={() => setOpen(false)}>Book a call</Link>
              <button onClick={() => { theme?.setOpen(true); setOpen(false); }} className="text-left">Theme</button>
              <a href="https://github.com" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Code</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>LinkedIn</a>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}

export default Header;