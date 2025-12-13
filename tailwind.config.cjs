import { defineConfig } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0f1115',
        'bg-surface': '#151821',
        'text-primary': '#e6e6e6',
        'text-secondary': '#9ca3af',
        'text-muted': '#6b7280',
        'accent': '#007ba7',
        'border': '#1f2937',
      },
      maxWidth: { content: '65ch' },
      lineHeight: { relaxed: '1.75' },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text-primary'),
            a: {
              color: theme('colors.accent'),
              textDecoration: 'none',
              '&:hover': { opacity: '0.8' },
            },
            h1: { color: theme('colors.text-primary') },
            h2: { color: theme('colors.text-primary') },
            h3: { color: theme('colors.text-primary') },
            code: { color: theme('colors.text-primary') },
            blockquote: {
              color: theme('colors.text-secondary'),
              borderLeftColor: theme('colors.border'),
            },
          },
        },
        invert: { css: { color: theme('colors.text-primary') } },
      }),
    },
  },
  plugins: [typography],
});
