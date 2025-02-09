module.exports = {
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html",
    "./assets/**/*.js",
    "./themes/digitalgarden/content/**/*.md",
    "./themes/digitalgarden/content/**/*.html",
    "./themes/digitalgarden/layouts/**/*.html",
    "./themes/digitalgarden/assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bgbeige: "#F9EFDC",
        keenanpurple: {
          dark: "#2AAA8A",
          light: "#9FE2BF",
        },
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1", // Primary indigo
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.blogtext"),
            maxWidth: "900px", // Adjust width of prose
            marginLeft: "0px", // Remove default auto margin
            marginRight: "0px",
            paddingLeft: theme("spacing.4"), // Adjust left padding
            paddingRight: theme("spacing.4"), // Adjust right padding
          },
        },
      }),
      fontFamily: {
        blogtext: ["Linux Libertine", "serif"],
        serif: ["Linux Libertine", "serif"],
        sans: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
