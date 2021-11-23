import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { Aboutme } from "../components/Profile/Aboutme";
import { Experience } from "../components/Profile/Experience";

export const card: object = {
  textAlign: "center",
  backgroundColor: "#D7EEFF",
  paddingTop: "3%",
  paddingBottom: "3%",
  marginLeft: "20%",
  marginRight: "20%",
  borderRadius: "100px",
};

const Profile: React.VFC = () => {
  return (
    <Layout>
      <Aboutme />
      <Experience />
      <div style={{ margin: 50 }}></div>
    </Layout>
  );
};

export default Profile;
