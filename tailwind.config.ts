import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";


const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "800px",
      tablet_lg: "1024px",
      desktop: "1280px",
      desktop_lg: "1536px",
    },
    extend: {
      fontFamily: {
        sans:['var(--font-neue-montreal)'],
        serif:['var(--font-baskerville)'],
        display: ['var(--font-krona)'],
      },
      colors: {
        black: {
          DEFAULT: '#131313',
          100: '#2C2C2C'
        },
        white: {
          DEFAULT: '#F1E8DF',
          100: '#F2EFEB',
          200: 'E4D9CF'
        }
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#2C2C2C",
            background: "#F1E8DF",
          },

          
        },
        dark: {

          colors: {
            foreground: "#F1E8DF",
            background: "#131313",
          },
        },
        // ... custom themes
      },
    }),
  ],
};

export default config;
