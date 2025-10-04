import { ThemePreset } from "@/types";

export const THEME_PRESETS: ThemePreset[] = [
  {
    name: "Emerald",
    vars: {
      "--accent-50": "#ECFDF5",
      "--accent-100": "#D1FAE5",
      "--accent-200": "#A7F3D0",
      "--accent-300": "#6EE7B7",
      "--accent-600": "#059669",
      "--accent-700": "#047857",
    },
  },
  {
    name: "Indigo",
    vars: {
      "--accent-50": "#EEF2FF",
      "--accent-100": "#E0E7FF",
      "--accent-200": "#C7D2FE",
      "--accent-300": "#A5B4FC",
      "--accent-600": "#4F46E5",
      "--accent-700": "#4338CA",
    },
  },
  {
    name: "Violet",
    vars: {
      "--accent-50": "#F5F3FF",
      "--accent-100": "#EDE9FE",
      "--accent-200": "#DDD6FE",
      "--accent-300": "#C4B5FD",
      "--accent-600": "#7C3AED",
      "--accent-700": "#6D28D9",
    },
  },
  {
    name: "Cyan",
    vars: {
      "--accent-50": "#ECFEFF",
      "--accent-100": "#CFFAFE",
      "--accent-200": "#A5F3FC",
      "--accent-300": "#67E8F9",
      "--accent-600": "#0891B2",
      "--accent-700": "#0E7490",
    },
  },
  {
    name: "Amber",
    vars: {
      "--accent-50": "#FFFBEB",
      "--accent-100": "#FEF3C7",
      "--accent-200": "#FDE68A",
      "--accent-300": "#FCD34D",
      "--accent-600": "#D97706",
      "--accent-700": "#B45309",
    },
  },
  {
    name: "Rose",
    vars: {
      "--accent-50": "#FFF1F2",
      "--accent-100": "#FFE4E6",
      "--accent-200": "#FECDD3",
      "--accent-300": "#FDA4AF",
      "--accent-600": "#E11D48",
      "--accent-700": "#BE123C",
    },
  },
];

export const NEUTRALS: Record<string, Record<string, string>> = {
  light: {
    "--bg": "#ffffff",
    "--bg-soft": "#f8fafc",
    "--surface": "#ffffff",
    "--text": "#0f172a",
    "--muted": "#64748b",
    "--muted-2": "#94a3b8",
    "--ring": "rgba(2,6,23,0.08)",
    "--divider": "#e5e7eb",
    "--code-bg": "#0b1020",
  },
  dark: {
    "--bg": "#0b1220",
    "--bg-soft": "#0b1220",
    "--surface": "#0f172a",
    "--text": "#e5e7eb",
    "--muted": "#9aa6b2",
    "--muted-2": "#7c8aa0",
    "--ring": "rgba(255,255,255,0.10)",
    "--divider": "#243244",
    "--code-bg": "#0b1220",
  },
};
