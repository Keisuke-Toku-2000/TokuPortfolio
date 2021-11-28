import Avatar from "@mui/material/Avatar";
import * as React from "react";
//@ts-ignore
import avater from "../../images/face.jpg";
import { IconButton } from "@material-ui/core";
import { Stack } from "@mui/material";
import { Typography } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { VFC } from "react";
import { BGCard } from "../Layout/BGCard";

export const Aboutme: VFC = () => {
  const getAge = () => {
    const birthday = {
      year: 2000,
      month: 9,
      date: 23,
    };
    var today = new Date();
    var thisYearsBirthday = new Date(
      today.getFullYear(),
      birthday.month - 1,
      birthday.date
    );
    var age = today.getFullYear() - birthday.year;
    if (today < thisYearsBirthday) {
      age--;
    }
    return age;
  };

  const isOverGraduate = (): string => {
    const willGraduate = new Date(2023, 3, 31);
    const today = new Date();
    if (willGraduate.getTime() > today.getTime()) {
      return "2023年3月卒業予定";
    } else {
      return "2023年3月卒";
    }
  };
  return (
    <div style={{ marginTop: 80 }}>
      <BGCard>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ paddingTop: "6%" }}
        >
          <Avatar
            alt="keisuke"
            src={avater}
            sx={{
              width: "24%",
              height: "24%",
              marginRight: "2%",
            }}
          />
          <div style={{ color: "#1f3134" }}>
            <Typography
              variant="h2"
              style={{
                marginTop: "-15%",
                fontFamily: "arial",
                color: "#FFFFFF",
                textDecoration: "underline",
              }}
            >
              About me
            </Typography>
            <Stack
              spacing={1}
              justifyContent="flex-start"
              sx={{
                textAlign: "left",
                fontStyle: "italic",
              }}
            >
              <br />
              <div>
                <p style={{ fontWeight: "bold", display: "inline" }}>名前：</p>
                {`　徳永 圭佑（${getAge()}）`}
              </div>
              <div>
                <p style={{ fontWeight: "bold", display: "inline" }}>大学：</p>
                {`　会津大学（${isOverGraduate()}）`}
              </div>
              <div>
                <p style={{ fontWeight: "bold", display: "inline" }}>趣味：</p>
                　ポーカー、サウナ、ディスカバリーチャンネルを見る
              </div>
              <div>
                <p style={{ fontWeight: "bold", display: "inline" }}>特技：</p>
                　出川English、テスラのモノマネ
              </div>
              <div>
                <p style={{ fontWeight: "bold", display: "inline" }}>
                  メール：
                </p>
                　
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="mailto:keisuke20000923@gmail.com"
                >
                  keisuke20000923@gmail.com
                </a>
              </div>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ marginTop: "6%" }}
              justifyContent="right"
            >
              <IconButton
                href="https://twitter.com/keisuke2000_"
                style={{ color: "#FFFFFF" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/kei_toku0923/"
                style={{ color: "#FFFFFF" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://github.com/Keisuke-Toku-2000"
                style={{ color: "#FFFFFF" }}
              >
                <GitHubIcon />
              </IconButton>
            </Stack>
          </div>
        </Stack>
      </BGCard>
    </div>
  );
};
