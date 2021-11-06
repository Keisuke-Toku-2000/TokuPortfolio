import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import { Header } from "../header";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00CED1",
    },
    secondary: {
      main: "#00bcd4",
    },
  },
});

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};
