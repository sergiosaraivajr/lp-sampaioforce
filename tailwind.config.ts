import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsansregular: ["DmSansRegular", "sans-serif"],
        dmsansbold: ["DmSansBold", "sans-serif"],
      },

      colors: {
        brandGreenLight: "#AAD813",
        brandGreenHover: "#97c00d",
        black: "#000000",
        blackHeadLine: "#111111",
        White: "#FFFFFF",
        whiteParagraph: "#F2F2F2",
        gray1: "#333333",
        gray2: "#4F4F4F",
        Gray3: "#828282",
        gray5: "#E0E0E0",
        gray6: "#F2F2F2",
      },
    },
  },
  plugins: [],
} satisfies Config;
