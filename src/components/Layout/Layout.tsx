import { createTheme, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import { Header } from "../header";

type Props = {
  color?: string;
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ color, children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: color ?? "#00CED1",
      },
      secondary: {
        main: "#00bcd4",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};
