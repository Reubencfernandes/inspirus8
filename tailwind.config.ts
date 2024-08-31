import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    fontFamily:{
      'bebas':["Bebas Neue"],
      'inter':["Inter"],
      'retro':["Honk"],
      'bunge':["Bungee Spice"],
      'ps2':["Press Start 2P"],
      'poppins':["Poppins"]
    },
    extend: {
      colors:{
        'background':"#191A20",
        'cardcor':"#151414",
        'cardborder':"#726969",
        "cardborder1":"#4C4B4B"
      },
      animation: {
        'gradient-x': 'gradient-x 8s linear infinite',
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        'gradient-x': {'0%, 100%': { 'background-position': '0% 50%' },'50%': { 'background-position': '100% 50%' }},
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
    },
  }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config