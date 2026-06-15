/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        terracotta: '#C4622D',
        charcoal: '#1A1A1A',
        border: "#E5E5E5",
        input: "#E5E5E5",
        ring: "#C4622D",
        background: "#F5F0EB",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#C4622D",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F0EB",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F0EB",
          foreground: "#6B6B6B",
        },
        accent: {
          DEFAULT: "#C4622D",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
