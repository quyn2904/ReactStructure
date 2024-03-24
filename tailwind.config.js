/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: 'var(--body)',
        'body-text': 'var(--text)',
        border: 'var(--border)'
      }
    }
  },
  plugins: []
}
