import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#ff5a21",
                  
          "secondary": "#9554FF",
                  
          "accent": "#5E9EFF",
                  
          "neutral": "#6C83A2",
                  
          "base-100": "#1f2937",
                  
          "info": "#38bdf8",
                  
          "success": "#4ade80",
                  
          "warning": "#e11d48",
                  
          "error": "#dc2626",
        },
        light: {
          "primary": "#ff5a21", // Peach
          "secondary": "#003459", // Periwinkle
          "accent": "#9554FF", // Bright light blue
          "neutral": "#2C3849", // Off-white
          "base-100": "#FBECD7", // Pure white
          "info": "#7DD3FC", // Pale cyan
          "success": "#68D391", // Soft emerald
          "warning": "#F6E05E", // Soft yellow
          "error": "#FEB2B2", // Blush pink
        }
      },
    ],
  },
}
export default config
