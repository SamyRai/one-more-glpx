export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  topic: string;
  body: string;
}

export interface Theme {
  name: string;
  vars: Record<string, string>;
}

export interface ThemePreset {
  name: string;
  vars: Record<string, string>;
}

export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  presets: ThemePreset[];
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
