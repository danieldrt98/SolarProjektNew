import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: "450px",
    md: "736px",
    lg: "1100px",
    xl: "1337px",
    xxl: "1600px",
    xxxl: "2000px",
  },
});

export default theme;
