import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#4D54FF",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Noto Sans",
  },
});
theme = createTheme(theme, {
  typography: {
    fontSize: "24px",
    h1: {
      fontWeight: 300,
      fontSize: "64px",
      lineHeight: "87px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "43.58px",
    },
    body1: {
      fontWeight: 400,
      color: "#000",
    },
    subtitle1: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "33px",
      color: theme.palette.secondary.main,
    },
    button: {
      fontWeight: 700,
    },
  },
});
export default theme;
