/** @type {import('tailwindcss').Config} */
export default {
  important: "#app",
  content: ["./index.html", "./src/**/*.{ts,vue}"],
  theme: {
    textColor: {
      primary: "#111827",
      secondary: "#6B7280"
    },
    colors: {
      primary: "#111827",
      secondary: "#6B7280",
      strong: "#001026",
      outline: "#9CA3AF",
      grey: "#003580",
      attention: "#BDE1FF",
      error: "#F09F9F",
      warning: "#FCCBA3",
      caution: "#FDEFAA"
    },
    extend: {
      fontSize: {
        "2xl": "2rem",
        "3xl": "2.75rem",
        xs: "13px"
      }
    }
  },
  plugins: []
};
