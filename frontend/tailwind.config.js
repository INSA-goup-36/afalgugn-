// tailwind.config.js
export default{
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: '1' },   // visible
          '25%, 75%': { opacity: '0' },        // invisible
        },
      },
      animation: {
        blink: 'blink 1s infinite', // 1s cycle, repeats forever
      },
    },
  },
  plugins: [],
};
