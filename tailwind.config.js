/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#00A3FF',
        secondary: '#7C3AED',
        neutral: '#F8FAFC',
        muted: '#64748B',
        success: '#06D6A0',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
        'pill': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 163, 255, 0.1), 0 2px 4px -1px rgba(0, 163, 255, 0.06)',
        'card': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
}
