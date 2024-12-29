import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        green: {
          900: '#064e3b', 
        },
        graymatcha: '#99b09f',
        matcha: '',
      },
      fontSize: {
        'xxs': '0.7rem',
        'xxxs': '0.6rem',
      },
      height:{
        '104':'25rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
