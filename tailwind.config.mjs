/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #FF6F61, #D7E3FC)',
        'gradient-2': 'linear-gradient(135deg, #FFB74D, #8E44AD)',
        'gradient-3': 'linear-gradient(135deg, #6A1B9A, #FFC107)',
        'gradient-4': 'linear-gradient(135deg, #00C6FF, #FFDEE9)',
        'gradient-5': 'linear-gradient(135deg, #76B852, #8DC26F)',
      }
		},
	},
	plugins: [],
}
