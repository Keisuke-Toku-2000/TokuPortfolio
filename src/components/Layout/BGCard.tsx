import React, { ReactNode } from "react";

export const BGCard: React.VFC<{ children?: ReactNode }> = ({ children }) => {
  let card: object = {
    textAlign: "center",
    backgroundColor: "#00CCFF",
    paddingTop: "2%",
    paddingBottom: "3%",
    margin: "0 auto",
    marginTop: 10,
    width: "80%",
  };
  return <div style={card}>{children}</div>;
};
