import { splitVendorChunk } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        default: 'var(--default)',
        scuro: 'var(--darker)',
        bordo: 'var(--border)',
        hover_primary: 'var(--hover-primary)',
        hover_default: 'var(--hover-default)',
        testo: 'var(--testo)',
      }
    }
  },
plugins: [
  require('tailwindcss-debug-screens'),
]
}



