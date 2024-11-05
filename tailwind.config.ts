import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF9959",
          "primary-content": "#FFFFFF",
          secondary: "#323232",
          "secondary-content": "#A8A8A8",
          accent: "#CAB3F5",
          "accent-content": "#E9FBFF",
          neutral: "#088484",
          "neutral-content": "#F0FCFF",
          "base-100": "#F0FCFF",
          "base-200": "#E1FAFF",
          "base-300": "#C8F5FF",
          "base-content": "#fff",
          info: "#026262",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#FF9959",
          "primary-content": "#FFFFFF",
          secondary: "#323232",
          "secondary-content": "#A8A8A8",
          accent: "#CAB3F5",
          "accent-content": "#088484",
          neutral: "#E9FBFF",
          "neutral-content": "#11ACAC",
          "base-100": "#11ACAC",
          "base-200": "#088484",
          "base-300": "#026262",
          "base-content": "#E9FBFF",
          info: "#C8F5FF",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
        spot: "0px 0px 250px 105px #4d3ba9a8;",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "rotate-slow": "rotate 30s linear infinite",
        "rotate-fast": "rotate 5s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: " translate(-50%, -50%) rotate(360deg)" },
        },
      },
      borderColor: {
        "gradien-to-t": "",
      },
      backgroundImage: {
        "radial-orange-to-transparent": "radial-gradient(circle, rgba(255, 166, 0, 0.5) 0%, rgba(255, 165, 0, 0) 70%)",
        "gradient-base": "bg-gradient-to-r from-[#161623] via-[#0A0B16] to-[#161623]",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
