import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      keyframes: {
        "dot-blink": {
          "0%, 80%, 100%": { opacity: "0" },
          "40%": { opacity: "1" },
        },
      },
      animation: {
        "dot-blink-1": "dot-blink 1.4s infinite both",
        "dot-blink-2": "dot-blink 1.4s infinite both 0.2s",
        "dot-blink-3": "dot-blink 1.4s infinite both 0.4s",
      },
    },
  },
  plugins: [],
};
export default config;
