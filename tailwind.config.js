/**
 * Tailwind CSS configuration for Week‑to‑Ready template.
 *
 * The design leans on a clean, modern aesthetic inspired by
 * popular shadcn/ui templates. Feel free to tweak theme values
 * to match your brand.
 */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5E9BFF',
          DEFAULT: '#3574F2',
          dark: '#2A5DC8',
        },
        secondary: {
          DEFAULT: '#00A676',
        },
        background: {
          light: '#F9FAFB',
          dark: '#0F172A',
        },
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
