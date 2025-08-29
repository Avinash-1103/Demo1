/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: {
          blue: '#0ea5e9' /* tailwind sky-500 */,
          dark: '#0b132b',
          gray: '#1f2937'
        }
      },
      boxShadow: {
        'glow': '0 0 25px rgba(14, 165, 233, 0.3)'
      },
      backgroundImage: {
        'electric-gradient': 'radial-gradient(60% 60% at 50% 40%, rgba(14,165,233,0.25) 0%, rgba(14,165,233,0) 60%), radial-gradient(40% 40% at 80% 10%, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0) 60%)'
      }
    }
  },
  plugins: []
}
