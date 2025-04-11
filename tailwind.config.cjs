module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
      },
      backgroundImage: {
        'dark-radial':
          'radial-gradient(circle at center, var(--dark-gradient-inner) 0%, var(--dark-gradient-middle) 0%, var(--dark-gradient-outer) 60%)',
        'card-gradient':
          'linear-gradient(to bottom, var(--card-gradient-start) 0%, var(--card-gradient-end) 100%)',
      },
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
