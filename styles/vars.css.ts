import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    blue: "blue",
    lightblue: "lightblue",
    red: "red",
  },
  gap: {
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
  },
});
