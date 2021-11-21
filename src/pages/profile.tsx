import Avatar from "@mui/material/Avatar";
import * as React from "react";
//@ts-ignore
import avater from "../images/face.jpg";
import { Layout } from "../components/Layout/Layout";
import { deepOrange } from "@material-ui/core/colors";
import { Stack } from "@mui/material";
import { Typography } from "@material-ui/core";

const Profile: React.VFC = () => {
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
    <Layout>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          marginTop: "13%",
          textAlign: "center",
        }}
      >
        <Avatar
          alt="keisuke"
          src={avater}
          sx={{
            width: "24%",
            height: "24%",
          }}
        />
        <div style={{}}>
          <Typography
            variant="h2"
            style={{ fontStyle: "italic", marginTop: "-15%" }}
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
            <p>{`名前：　徳永 圭佑（${getAge()}）`}</p>
            <p>{`大学：　会津大学（${isOverGraduate()}）`}</p>
            <p>趣味：　ポーカー、サウナ、ディスカバリーチャンネルを見る</p>
            <p>
              メール：　
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto:keisuke20000923@gmail.com"
              >
                keisuke20000923@gmail.com
              </a>
            </p>
          </Stack>
        </div>
      </Stack>
    </Layout>
  );
};

export default Profile;
