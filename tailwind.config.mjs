/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      boxShadow: {
        'inner-custom': 'inset 0 0 10px #252525', // Sombra interna personalizada
      },
      textFillColor: {
        'autofill-custom-dark': {
          '-webkit-text-fill-color': '#8d8d8d', 
          '-webkit-box-shadow': '0 0 0px 1000px #181818 inset',
        },
        'autofill-custom-light': {
          '-webkit-text-fill-color': '#999999', 
          '-webkit-box-shadow': '0 0 0px 1000px #F1F5F9 inset',
        },
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #00C6FF, #0072FF, #00C6FF, #1DE9B6, #1DE9B6)',
        'gradient-sunset': 'linear-gradient(135deg, #FF4E50, #F9D423, #FC913A, #F94E6D, #FB3B00)',
        'gradient-neon': 'linear-gradient(135deg, #00F260, #0575E6, #00F260, #FF5F6D, #FFC371)',
        'gradient-purple-haze': 'linear-gradient(135deg, #9D50BB, #6E48AA, #B06AB3, #8E44AD, #8E44AD)',
        'gradient-cyber-glow': 'linear-gradient(135deg, #00F0FF, #0072FF, #FF8C00, #FF3CAC, #8938F6)',
				'gradient-velvet-night': 'linear-gradient(135deg, #2C3E50, #4CA1AF, #2C3E50)',
        'gradient-solar-flare': 'linear-gradient(135deg, #FF7E5F, #FEB47B)',
        'gradient-ocean-breeze': 'linear-gradient(135deg, #00B4DB, #0083B0, #00B4DB)',
        'gradient-mystic-dawn': 'linear-gradient(135deg, #DAE2F8, #D6A4A4)',
        'gradient-midnight-city': 'linear-gradient(135deg, #232526, #414345)',
				'gradient-tropical-sunset': 'linear-gradient(135deg, #FF7E5F, #FD5E53, #FFC371, #FF9A9E)',
        'gradient-arctic-aurora': 'linear-gradient(135deg, #00C6FF, #0072FF, #1CEFFF, #5B86E5)',
        'gradient-cosmic-dust': 'linear-gradient(135deg, #2C3E50, #4CA1AF, #2E3A59, #3A6073)',
        'gradient-sunrise-glow': 'linear-gradient(135deg, #F3904F, #FFD194, #FF9A9E, #FECF71)',
        'gradient-deep-sea': 'linear-gradient(135deg, #2B5876, #4ECDC4, #1A2980, #26D0CE)',
				'gradient-flamingo-beach': 'linear-gradient(135deg, #FF9A9E, #FF6A88, #FF856B, #FFD1C1)',
        'gradient-electric-violet': 'linear-gradient(135deg, #4776E6, #8E54E9, #7F00FF, #E100FF)',
        'gradient-desert-mirage': 'linear-gradient(135deg, #F7971E, #FFD200, #FF512F, #F09819)',
        'gradient-mystic-forest': 'linear-gradient(135deg, #2E8B57, #3CB371, #20B2AA, #008080)',
        'gradient-sunset-boulevard': 'linear-gradient(135deg, #FC5C7D, #6A82FB, #FC466B, #3F5EFB)',
      },
      animation: {
        "slide-logos": "slide-logos 60s linear infinite",
        'custom-pulse': 'custom-pulse 1.2s infinite',
        'ripple': 'ripple-effect 1.2s infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        'custom-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.6' },
        },
        'ripple-effect': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        "slide-logos": {
          to: { transform: "translateX(calc(-50% - 2rem))" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
		},
	},
	plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.autofill-custom-dark': {
          '-webkit-text-fill-color': '#8d8d8d',
          '-webkit-box-shadow': '0 0 0px 1000px #181818 inset',
        },
        '.autofill-custom-light': {
          '-webkit-text-fill-color': '#999999',
          '-webkit-box-shadow': '0 0 0px 1000px #F1F5F9 inset',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
