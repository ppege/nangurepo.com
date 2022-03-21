module.exports = {
  mode: 'jit',
  dark: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}