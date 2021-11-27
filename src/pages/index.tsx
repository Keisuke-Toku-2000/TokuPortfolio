import { Box, IconButton } from "@material-ui/core";
import { LensBlur, Margin } from "@mui/icons-material";
import BrushIcon from "@mui/icons-material/Brush";
import { graphql } from "gatsby";

import * as React from "react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";

const helpText: object = {
  fontFamily: "Roboto",
  fontSze: "5%",
  lineHeight: "28px",
  marginTop: "75vh",
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
  const [color, setColor] = useState(paintColors[7]);
  const [secondColor, setSecondColor] = useState(paintColors[11]);
  const centerShadowText: object = {
    position: "absolute",
    left: "18%",
    top: "-15px",
    fontStyle: "italic",
    fontSize: "15vw",
    color: secondColor,
    filter: "blur(2px)",
    opacity: 0.4,
    fontFamily: "Impact",
  };

  const centerText: object = {
    position: "absolute",
    left: "15%",
    top: "10px",
    fontStyle: "italic",
    fontSize: "15vw",
    color: color,
    opacity: 0.9,
    fontFamily: "Impact",
  };

  const [text, setText] = useState<string>("");
  const welcome = "Welcome!";

  const animationText = () => {
    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        setTimeout(() => setText(welcome[0]), 600);
      }
      setTimeout(() => setText(welcome.slice(0, i + 1)), 500 + i * 240);
    }
  };
  const thisYear = new Date().getFullYear();

  useEffect(() => {
    animationText();
  }, [color]);

  return (
    <Layout color={color} secondColor={secondColor}>
      <div>
        <p style={centerShadowText}>{text}</p>
        <p style={centerText}>{text}</p>
        <p style={helpText}>
          {`This is my portfolio site. © ${thisYear} Keisuke Tokunaga`}
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        {paintColors.map((paintColor, i) => (
          <IconButton
            style={{ color: paintColor }}
            onClick={() => {
              setColor(paintColor);
              setSecondColor(paintColors[i + 4 > 11 ? -(11 - i - 4) : i + 4]);
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
