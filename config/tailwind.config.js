const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.html.erb',
    './app/views/**/*.html.haml',
    './app/views/**/*.html.slim',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

