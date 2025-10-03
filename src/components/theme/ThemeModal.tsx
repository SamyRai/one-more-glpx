import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import AdvancedThemeEditor from './AdvancedThemeEditor';

function ThemeModal() {
  const { open, setOpen, setTheme, theme, presets } = useTheme();
  const prefersReduced = useReducedMotion();

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.18 }}
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: prefersReduced ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl rounded-2xl bg-[var(--surface)] text-[var(--text)] shadow-xl ring-1 ring-[var(--ring)] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg inline-flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Theme settings
                </div>
                <button className="text-sm underline" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
              <p className="text-sm text-[var(--muted)] mt-1">
                Pick a preset or fine-tune the accent. Changes persist to localStorage.
              </p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => {
                      setTheme({ name: p.name, vars: p.vars });
                      setOpen(false);
                    }}
                    className={`rounded-2xl ring-1 ring-[var(--ring)] p-3 text-left hover:bg-[var(--bg-soft)] ${
                      theme?.name === p.name ? 'ring-2 ring-[var(--accent-300)]' : ''
                    }`}
                  >
                    <div className="font-medium">{p.name}</div>
                    <div className="mt-2 flex items-center gap-1">
                      <span className="h-5 w-5 rounded bg-[var(--accent-50)] ring-1 ring-[var(--ring)]" style={p.vars}></span>
                      <span className="h-5 w-5 rounded bg-[var(--accent-100)] ring-1 ring-[var(--ring)]" style={p.vars}></span>
                      <span className="h-5 w-5 rounded bg-[var(--accent-200)] ring-1 ring-[var(--ring)]" style={p.vars}></span>
                      <span className="h-5 w-5 rounded bg-[var(--accent-300)] ring-1 ring-[var(--ring)]" style={p.vars}></span>
                      <span className="h-5 w-5 rounded bg-[var(--accent-600)] ring-1 ring-[var(--ring)]" style={p.vars}></span>
                      <span className="h-5 w-5 rounded bg-[var(--accent-700)] ring-1 ring-[var(--ring)]" style={p.vars}></span>
                    </div>
                  </button>
                ))}
              </div>
              <AdvancedThemeEditor />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ThemeModal;