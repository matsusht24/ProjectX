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
        'neo-light': '-4px -4px 10px rgba(255, 255, 255, 0.7)', // Highlight
        'neo-dark': '4px 4px 10px rgba(0, 0, 0, 0.5)',          // Shadow
        'green-grid': '11px 11px 22px #02935e, -11px 11px 22px #02dd8c',
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
    },
  },
  plugins: [],
} satisfies Config;
