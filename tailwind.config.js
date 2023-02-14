require('dotenv').config();
/** @type {import('tailwindcss').Config} */
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  important: true,
  content: [],
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
