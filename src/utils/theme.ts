import { extendTheme, theme } from "@chakra-ui/react";

const appTheme = extendTheme({
  colors: {
    ...theme.colors,
    primaryBackground: "#E36B37",
  },
});

export default appTheme;
