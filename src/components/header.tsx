import React, { useEffect, useState, VFC } from "react";
import { AppBar, Box, BoxProps, Toolbar } from "@material-ui/core";
import { Link } from "gatsby";

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
  const [now, setNow] = useState<Date>(new Date());

  const getNow = (): string => {
    useEffect(() => {
      const timer = setInterval(() => {
        setNow(new Date());
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, [setNow]);

    return `${now.getFullYear()}/${
      now.getMonth() + 1
    }/${now.getDate()}　${now?.toLocaleTimeString()}`;
  };

  return (
    <AppBar color="primary">
      <Toolbar>
        <p style={{ fontStyle: "italic", color: "black" }}>{getNow()}</p>
        <div style={{ marginLeft: "auto", fontStyle: "italic" }}>
          {menuItem.map((item, i) => {
            let page_link = "";
            if (item === "TOP") {
              page_link = "/";
            } else page_link = "/" + item.toLowerCase() + "/";
            return (
              <Link
                activeStyle={activeText}
                style={nonActiveText}
                to={page_link}
                key={i}
              >
                <Box
                  style={{
                    display: "inline",
                    marginRight: "15px",
                    color: "black",
                  }}
                >
                  {item}
                </Box>
              </Link>
            );
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
};
