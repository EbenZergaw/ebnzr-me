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
                  
          "error": "#FF5B5B",
        },
        light: {
          "primary": "#ff5a21", 
          "secondary": "#003459", 
          "accent": "#9554FF", 
          "neutral": "#2C3849",
          "base-100": "#FBECD7",
          "info": "#7DD3FC", 
          "success": "#68D391", 
          "warning": "#F6E05E",
          "error": "#FF4949",
        }
      },
    ],
  },
}
export default config
