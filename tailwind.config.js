/** @type {import('tailwindcss').Config} config */
const config = {
  content: ['./app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      colors: {
        'Mint' 			  :'#86C8BC',
        'Gray' 			  :'#63666A',
        'Dark Blue'		:'#005587',
        'Green' 	  	:'#6FA287',
        'Teal' 			  :'#00B2A9',
        'Brown' 		  :'#6B4C4C',
        'Light Blue' 	:'#6CACE4',
        'Tan' 			  :'#B7A99A',
        'Medium Blue'	:'#4E87A0',
        'Orange' 		  :'#E04E39',
        'White' 		  :'#FFFFFF'
      }, // Extend Tailwind's default colors
    },
  },
  plugins: [],
};

export default config;
