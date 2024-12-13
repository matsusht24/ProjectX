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
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          background: "#87af7d",
        },
        yellow: {
          foreground: "#FFEB3B", //sunny yellow
        },
        beige: {
          foreground: "#E8E5CD",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
