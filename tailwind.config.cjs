module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '9xl': '9rem',
      },
      fontSize: {
        '12xl': ['10rem', { lineHeight: '1' }],
        '14xl': ['12rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
