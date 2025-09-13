import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Direct brand colors for easy access
        'primary-green': "#22d3a6", // Teal accent (primary)
        'secondary-olive': "#223300", // Legacy deep olive (kept for compatibility)
        'brand-navy': "#0b1220", // Dark navy base
        'neutral-black': "#000000", // Black
        'neutral-lightGray': "#F5F5F5", // Light gray
        
        // Brand color variations for better design flexibility
        brand: {
          // Teal scale for accents
          green: {
            50: "#ecfffb",
            100: "#cffcf2",
            200: "#a5f6e5",
            300: "#6ee7d5",
            400: "#34d3bf",
            500: "#22d3a6", // Primary teal
            600: "#16b89a",
            700: "#0f9a86",
            800: "#0b7c6f",
            900: "#075f57",
          },
          // Navy scale for backgrounds
          navy: {
            50: "#0f1a2e",
            100: "#0d1728",
            200: "#0c1626",
            300: "#0b1423",
            400: "#0b1422",
            500: "#0a1321",
            600: "#0a1320",
            700: "#0a1220",
            800: "#0b1424",
            900: "#0b1220",
          },
          olive: {
            50: "#f7f8f4",
            100: "#eef0e7",
            200: "#dde2d0",
            300: "#c4ccb0",
            400: "#a8b38a",
            500: "#8d9d6b",
            600: "#6f8151",
            700: "#556641",
            800: "#445136",
            900: "#223300", // Deep olive
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'bounce-subtle': 'bounce 1s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;