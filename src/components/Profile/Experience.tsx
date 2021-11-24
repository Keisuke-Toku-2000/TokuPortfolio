import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { VFC } from "react";
import { card } from "../../pages/profile";
import { Button } from "@material-ui/core";

type Step = {
  label: string;
  description: string;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#6794D8",
    },
    secondary: {
      main: "#00bcd4",
    },
  },
});

export const Experience: VFC = () => {
  const steps: Step[] = [
    {
      label: "会津大学入学(2019年4月)",
      description: `高校を卒業後、IT業界に興味があり、福島県の会津大学（コンピュータ理工学科コンピュータ理工学部）に入学`,
    },
    {
      label: "バスケットボール部に入部(2019年5月)",
      description: `中学校より続けていたバスケットボールを大学でも行うためにバスケットボール部に入部。
      大学生の楽しいは全てここに詰まっていた気がする。`,
    },
    {
      label: "株式会社デザイニウムで長期有給インターン(2020年10月)",
      description: `フロントエンドとして長期有給インターンに参加させていただいた。
        チーム開発を体験し、gitやvue, javascriptなどを中心に学んだ。`,
    },
    {
      label: "株式会社Appify Technologiesのアルバイトを開始(2021年7月)",
      description: `Appifyのアルバイトに参加。フロントとしてReact, TypeScript, GraphQLを使用。夏休みには１ヶ月のインターンにも参加。`,
    },
    {
      label: "~現在",
      description: "",
    },
  ];

  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        style={{ ...card, marginTop: "3%" }}
        alignContent="center"
        direction="column"
      >
        <Typography
          variant="h3"
          style={{
            fontStyle: "italic",
            fontFamily: "arial",
            color: "#1f3134",
          }}
        >
          Experience
        </Typography>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{ ml: "20%", mr: "20%", mt: "2%" }}
        >
          {steps.map((step, index) => (
            <Step key={index} sx={{ fontFamily: "arial" }}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography style={{ textAlign: "left", fontSize: 14 }}>
                  {step.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-end"
                  style={{ marginTop: "2%" }}
                >
                  {index !== 0 && (
                    <Button
                      onClick={handleBack}
                      variant="outlined"
                      color="primary"
                    >
                      戻る
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    color="primary"
                  >
                    {index === steps.length - 1 ? "終了" : "次へ"}
                  </Button>
                </Stack>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Stack
            sx={{ mt: 2, mr: 10 }}
            direction="row"
            spacing={3}
            justifyContent="right"
          >
            <Button onClick={handleBack} variant="outlined">
              一つ戻る
            </Button>
            <Button onClick={() => setActiveStep(0)} variant="outlined">
              初めに戻る
            </Button>
          </Stack>
        )}
      </Stack>
    </ThemeProvider>
  );
};
