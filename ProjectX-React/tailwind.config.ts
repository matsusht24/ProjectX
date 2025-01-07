import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: { 
        'neo-dark': '11px 11px 22px #d5d5d5, -11px 11px 22px #ffffff',          // Shadow
        'back-grid': 'inset 20px 20px 60px #138b3f, inset -20px -20px 60px #19bb55',
        'inset-grid': 'inset 11px 11px 22px #e6e6e6, inset -11px 11px 22px #ffffff',
        'glow': '0 0 10px rgba(0, 255, 0, 0.6)',         // Green glow effect
        'neo-inset': 'inset 4px 4px 10px rgba(0, 0, 0, 0.2), inset -4px -4px 10px rgba(255, 255, 255, 0.7)', // Pressed effect

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          background: "#87af7d",
          healthy: "#02B875"
        },  
        yellow: {
          foreground: "#FFEB3B", //sunny yellow
        },
        beige: {
          foreground: "#E8E5CD",
        },
        white: {
          100: "#F2F2F2",
          200: "#FAFAFA",
          300: "#E8E8E8",
        },
      },
      backgroundImage: {
        healthy: "linear-gradient(145deg, #02c57d, #02a669)", 
        ok: "linear-gradient(145deg, #fff849, #d6d13d)",
        bad: "linear-gradient(145deg, #f02c2c, #ca2525)",
        main: "linear-gradient(135deg, #E3F9E5, #A4D4AE, #B8E4F9)",
      },
    },
  },
  plugins: [],
} satisfies Config;
