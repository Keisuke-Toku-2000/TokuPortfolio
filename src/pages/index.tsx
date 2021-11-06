import { Box, createMuiTheme, IconButton } from "@material-ui/core";
import BrushIcon from "@mui/icons-material/Brush";

import * as React from "react";
import { useState } from "react";
import { Layout } from "../components/Layout/Layout";

const helpText: object = {
  fontFamily: "Roboto",
  fontSze: "5%",
  lineHeight: "28px",
  marginTop: "65vh",
  textAlign: "center",
  opacity: 0.8,
  color: "#667979",
};

const paintColors = [
  "#A35656",
  "#C26936",
  "#CBAB57",
  "#9ED963",
  "#48A75D",
  "#85DDA8",
  "#5CD5DD",
  "#6794D8",
  "#5641D9",
  "#AA41A6",
  "#DE5B9A",
  "#DB1A1A",
];

const IndexPage: React.VFC = () => {
  const [color, setColor] = useState("#00CED1");

  const centerShadowText: object = {
    position: "absolute",
    left: "180px",
    top: "-15px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "15vw",
    color: color,
    filter: "blur(2px)",
    opacity: 0.7,
  };

  const centerText: object = {
    position: "absolute",
    left: "160px",
    top: "10px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "15vw",
    color: color,
    opacity: 0.8,
  };

  return (
    <Layout color={color}>
      <Box component="div">
        <p style={centerShadowText}>Welcome!</p>
        <p style={centerText}>Welcome!</p>
        <p style={helpText}>
          こちらはポートフォリオサイトです。ボタンを押してテーマ色を選ぼう。
        </p>
      </Box>
      <Box textAlign="center" mt={15}>
        {paintColors.map((paintColor, i) => (
          <IconButton
            style={{ color: paintColor }}
            onClick={() => {
              setColor(paintColor);
            }}
            key={i}
          >
            <BrushIcon />
          </IconButton>
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;
