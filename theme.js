import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    brown: "#4F474E",
    brownFade: "#E8E2E2",
    yellow: "#EFC862",
    white: "#fff",
    textShadow: "rgba(0, 0, 0, 0.5)",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    body: `inter, sans-serif`,
  },
});
export default theme;
