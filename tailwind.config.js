/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes:{
      'trans-right':{
        '0% , 100%':{transform: 'translateX(10px)'},
        '50%' : {transform:'translateX(0)'}
      },
      'trans-left':{
        '0% , 100%':{transform: 'translateX(-10px) rotate(12deg)'},
        '50%' : {transform:'translateX(0) rotate(12deg)'}
      }
    },
    animation:{
       'trans-right':'trans-right 1.5s ease-in-out infinite',
       'trans-left' : 'trans-left 1.5s ease-in-out infinite'
    }
  },
},
  plugins: [
    require('flowbite/plugin')
  ],
}

