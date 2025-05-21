/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"VT323"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
