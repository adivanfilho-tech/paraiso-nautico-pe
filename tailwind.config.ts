import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B3C5D",
        turquoise: "#00B4D8",
        sand: "#F4EBD0",
        sun: "#FFC857"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11, 60, 93, 0.14)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        reveal: "reveal .8s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
