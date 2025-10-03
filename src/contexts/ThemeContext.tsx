import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { ls } from '@/lib/localStorage';
import { THEME_PRESETS, NEUTRALS } from '@/styles/theme';
import { ThemeContextType, Theme, ThemeProviderProps, ThemeMode } from '@/types';

const ThemeContext = createContext<ThemeContextType | null>(null);

function applyThemeVars(vars: Record<string, string>) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const defaultTheme: Theme = ls.get("theme", { name: THEME_PRESETS[0].name, vars: THEME_PRESETS[0].vars });
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ThemeMode>(ls.get("mode", "light"));

  useEffect(() => {
    const radius = theme?.vars?.["--radius"] || "14px";
    applyThemeVars({ ...NEUTRALS[mode], ...theme.vars, "--radius": radius });
    ls.set("theme", theme);
    ls.set("mode", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [theme, mode]);

  const value = useMemo(() => ({
    theme,
    setTheme,
    open,
    setOpen,
    presets: THEME_PRESETS,
    mode,
    setMode
  }), [theme, open, mode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}