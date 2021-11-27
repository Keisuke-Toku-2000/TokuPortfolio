import { createTheme, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import { Header } from "../header";

type Props = {
  color?: string;
  secondColor?: string;
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ color, secondColor, children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: color ?? "#6794D8",
      },
      secondary: {
        main: secondColor ?? "#00bcd4",
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
