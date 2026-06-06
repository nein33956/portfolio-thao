/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Soft Pink: font bo tròn mềm mại
        sans: ['"Nunito"', '"Segoe UI"', "system-ui", "sans-serif"],
        display: ['"Quicksand"', '"Nunito"', "sans-serif"],
      },
      colors: {
        // brand = HỒNG (rose/fuchsia)
        brand: {
          50: "#fff1f7",
          100: "#ffe3ef",
          200: "#ffc7df",
          300: "#ff9cc4",
          400: "#fb6aa6",
          500: "#f43f8a",
          600: "#e01e74",
          700: "#bd1360",
          800: "#9c1352",
          900: "#821547",
          950: "#500626",
        },
        // accent phụ: tím lavender
        grape: {
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
        },
        // accent phụ: cam đào
        peach: {
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
        },
        ink: {
          DEFAULT: "#3a1f30",
          soft: "#5b3a4d",
          muted: "#9b7888",
        },
        cream: "#fff7fb",
      },
      boxShadow: {
        glow: "0 10px 30px -8px rgba(244,63,138,0.45)",
        card: "0 16px 40px -16px rgba(189,19,96,0.22)",
        soft: "0 8px 24px -10px rgba(189,19,96,0.18)",
      },
      backgroundImage: {
        "candy": "linear-gradient(135deg, #fb6aa6 0%, #c084fc 60%, #fdba74 120%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blob: {
          "0%,100%": { borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" },
          "50%": { borderRadius: "58% 42% 37% 63% / 56% 59% 41% 44%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        blob: "blob 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
