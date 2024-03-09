/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      
    },
    fontFamily: {
      'sans': ["'Roboto-Regular'", "sans-serif"],
      'sans-bold': ["Roboto-Bold", "sans-serif"],
      'mono': ['ui-sans-serif', 'system-ui'],
    },
    colors: {
      'tomato': 'hsl(4, 100%, 67%)',
      'dark-grey': 'hsl(234, 29%, 20%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': '#000',
      'pink' : '#fe5477',
      'peach' : '#fee8e7',
    },
    height: {
      'mh': '460px',
      'ph': '200px',
      'bh': '10px',
    },
    width: {
      'mw': '654px',
      'pw': '300px',
      'bw': '10px',
    },
    screens: {
      'md': '800px',
      'xs': '378px',
    },
  },
  plugins: [],
}

