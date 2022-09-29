import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  errorMsg: "#FC0C0C",
  lightblue: "#08B9C5",

  white: "#fff",

  black: "#020202",

  gray: "#777777",

  lightGray: "#F5F6FB",

  transparentBlack1: "rgba(2, 2, 2, 0.15)",
  transparentBlack3: "rgba(2, 2, 2, 0.35)",
  transparentBlack5: "rgba(2, 2, 2, 0.5)",
  transparentBlack7: "rgba(2, 2, 2, 0.7)",
  transparentBlack9: "rgba(2, 2, 2, 0.9)",

  transparentGray: "rgba(77,77,77, 0.8)",
  transparentDarkGray: "rgba(20,20,20, 0.9)",

  transparentWhite: "rgba(255,255,255, 0.9)",

  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 24,
  h3: 18,
  body1: 30,
  body2: 22,
  body3: 15,
  body4: 13,
  body5: 12,

  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
