import { Box, IconButton } from "@material-ui/core";
import { LensBlur } from "@mui/icons-material";
import BrushIcon from "@mui/icons-material/Brush";

import * as React from "react";
import { useEffect, useState } from "react";
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
  const [color, setColor] = useState("#6794D8");
  const centerShadowText: object = {
    position: "absolute",
    left: "14%",
    top: "-15px",
    fontStyle: "italic",
    fontSize: "15vw",
    color: color,
    filter: "blur(2px)",
    opacity: 0.4,
  };

  const centerText: object = {
    position: "absolute",
    left: "11%",
    top: "10px",
    fontStyle: "italic",
    fontSize: "15vw",
    color: color,
    opacity: 0.9,
    animation: "3s ease-in 1s infinite reverse both running slidein",
  };

  const [text, setText] = useState<string>("");
  const welcome = "Welcome!";

  const animationText = () => {
    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        setTimeout(() => setText(welcome[0]), 600);
      }
      setTimeout(() => setText(welcome.slice(0, i + 1)), 600 + i * 300);
    }
  };

  useEffect(() => {
    animationText();
  }, []);

  console.log(text);

  return (
    <Layout color={color}>
      <div>
        <p style={centerShadowText}>{text}</p>
        <p style={centerText}>{text}</p>
        <p style={helpText}>
          This is my portfolio site! © 2021, Keisuke Tokunaga
        </p>
        <Box
          style={{
            position: "absolute",
            left: "0%",
            top: "0%",
            width: "100%",
            height: "100%",
            backgroundColor: color,
            opacity: 0.2,
            textAlign: "center",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        {paintColors.map((paintColor, i) => (
          <IconButton
            style={{ color: paintColor }}
            onClick={() => {
              setColor(paintColor);
            }}
            key={i}
          >
            <LensBlur />
          </IconButton>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
