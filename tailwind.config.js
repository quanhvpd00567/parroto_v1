/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00288e",
        "on-primary-fixed": "#001453",
        "error-container": "#ffdad6",
        "surface": "#f8f9ff",
        "surface-container-low": "#eef4ff",
        "on-error-container": "#93000a",
        "outline-variant": "#c4c5d5",
        "error": "#ba1a1a",
        "on-tertiary-container": "#3fd298",
        "surface-container-highest": "#dce3f0",
        "on-surface": "#151c25",
        "surface-container-high": "#e2e8f5",
        "primary-fixed": "#dde1ff",
        "inverse-on-surface": "#eaf1fe",
        "on-error": "#ffffff",
        "on-secondary-fixed-variant": "#783200",
        "primary-container": "#1e40af",
        "inverse-surface": "#2a313b",
        "secondary-fixed-dim": "#ffb690",
        "surface-dim": "#d4dae7",
        "on-primary": "#ffffff",
        "inverse-primary": "#b8c4ff",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed": "#002113",
        "tertiary-container": "#00563a",
        "outline": "#757684",
        "surface-container": "#e7eefb",
        "surface-bright": "#f8f9ff",
        "on-background": "#151c25",
        "on-surface-variant": "#444653",
        "tertiary-fixed": "#6ffbbe",
        "on-tertiary-fixed-variant": "#005236",
        "secondary-fixed": "#ffdbca",
        "tertiary-fixed-dim": "#4edea3",
        "secondary-container": "#fd761a",
        "primary-fixed-dim": "#b8c4ff",
        "on-primary-container": "#a8b8ff",
        "tertiary": "#003d27",
        "on-secondary": "#ffffff",
        "background": "#f8f9ff",
        "on-secondary-container": "#5c2400",
        "on-primary-fixed-variant": "#173bab",
        "secondary": "#9d4300",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed": "#341100",
        "surface-variant": "#dce3f0",
        "surface-tint": "#3755c3"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
