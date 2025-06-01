export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
        fadeInUp: "fadeInUp 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
      'fade-in': 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(8px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      }
    }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
