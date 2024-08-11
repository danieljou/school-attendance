/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Blue
          light: '#3B82F6',   // Light Blue
          dark: '#1E40AF',    // Dark Blue
        },
        secondary: {
          DEFAULT: '#F97316', // Orange
          light: '#FB923C',   // Light Orange
          dark: '#C2410C',    // Dark Orange
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.input-container': {
          '@apply mb-6': {

          },
          '& label': {
            '@apply block mb-2 text-sm font-medium text-gray-900': {},
          },
          '& input': {
            '@apply block w-full p-2 text-gray-900 border border-blue-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500': {},
          },
          
        },
        '.centered-container': {
          '@apply flex justify-center items-center h-screen': {},
        },
        '.centered-flex': {
          '@apply flex justify-between items-center h-screen': {},
        },
        '.btn-blue': {
          '@apply inline-flex items-center justify-center px-4 py-2 text-white bg-primary rounded-md shadow hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50': {},
        },
         '.input-error': {
          '@apply mb-6': {},
          '& label': {
            '@apply block mb-2 text-sm font-medium text-gray-900': {},
          },
          '& input': {
            '@apply block w-full p-2.5 border rounded-lg border-error focus:ring-error focus:border-error': {},
          },
          '& .error-message': {
            '@apply mt-2 text-sm text-error': {},
          },
        },
      });
    }),
  ],
}