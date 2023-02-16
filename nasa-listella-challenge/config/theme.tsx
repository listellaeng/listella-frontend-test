import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 24,
    allVariants: {
      fontFamily: "Noto Sans",
    },
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
    body1:{
      fontWeight: 400,
      color: "#000"
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: "33px",
      color: "#4D54FF",
    },
    button: {
      fontWeight: 700,
    },
  },

});
export default theme;
