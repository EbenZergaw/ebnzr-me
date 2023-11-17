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
          "primary": "#f97316",
                  
          "secondary": "#3b82f6",
                  
          "accent": "#6d28d9",
                  
          "neutral": "#4b5563",
                  
          "base-100": "#1f2937",
                  
          "info": "#38bdf8",
                  
          "success": "#4ade80",
                  
          "warning": "#e11d48",
                  
          "error": "#dc2626",
        },
      },
    ],
  },
}
export default config
