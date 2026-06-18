/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0D1B2A',
          800: '#1E2D3D',
          700: '#2A3F54',
        },
        amber: {
          accent: '#F5A623',
        },
        slate: {
          text: '#A8B8C8',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        fadeUp: { 'from': { opacity: '0', transform: 'translateY(24px)' }, 'to': { opacity: '1', transform: 'translateY(0)' } },
        slideIn: { 'from': { opacity: '0', transform: 'translateX(-20px)' }, 'to': { opacity: '1', transform: 'translateX(0)' } },
      }
    },
  },
  plugins: [],
}
