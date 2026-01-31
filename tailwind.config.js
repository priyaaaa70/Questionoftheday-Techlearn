/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // blue-600
        secondary: "#1E40AF", // blue-800
        surface: "#0F172A",   // slate-900
        card: "#020617",      // slate-950
        muted: "#94A3B8",     // slate-400
        border: "#1E293B",    // slate-800
      },
    },
  },
  plugins: [],
};
