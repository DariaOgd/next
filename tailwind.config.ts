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
        matcha: '#8ba888',
        darkmatcha: '#44624a',
        lightmatcha:'#c0cfb2',
      },
      fontSize: {
        'xxs': '0.7rem',
        'xxxs': '0.6rem',
      },
      height:{
        '120':'40rem',
        '110':'27rem',
        '104':'25rem',
        '100':'15rem',
        '98':'14rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
