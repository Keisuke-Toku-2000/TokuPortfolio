import React, { VFC } from "react";
import { AppBar, Box, BoxProps, Toolbar } from "@material-ui/core";
import { Link } from "gatsby";

//style
const headerLine: BoxProps = {
  display: "inline",
  marginX: 3,
};

const activeText: object = {
  color: "white",
  opacity: 1,
  textDecoration: "none",
  fontWeight: "bold",
};

const nonActiveText: object = {
  color: "white",
  opacity: 0.8,
  textDecoration: "none",
  fontWeight: "nomal",
};

const menuItem = ["TOP", "PROFILE", "BLOG"];

export const Header: VFC = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Box marginLeft="auto">
          {menuItem.map((item) => {
            let page_link = "";
            if (item === "TOP") {
              page_link = "/";
            } else page_link = "/" + item.toLowerCase() + "/";
            return (
              <Link
                activeStyle={activeText}
                style={nonActiveText}
                to={page_link}
              >
                <Box sx={headerLine}>{item}</Box>
              </Link>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
