import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic accent colors (blue-forward silver)
        accent: {
          primary: "#1f3b63",
          secondary: "#355b8a",
          muted: "#93a9c1",
        },
        // Legacy bullion colors mapped to blue-silver palette for backward compatibility
        bullion: {
          dark: "#f6f9fc",      // Light background (inverted for light mode)
          darker: "#ffffff",    // White background
          gold: "#1f3b63",      // Blue-silver primary
          goldLight: "#93a9c1", // Muted blue-silver
          accent: "#0f2a4a",    // Deep blue for emphasis
        },
        // Legacy gold colors mapped to slate for backward compatibility
        gold: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
