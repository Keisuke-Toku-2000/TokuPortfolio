import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { Aboutme } from "../components/Profile/Aboutme";
import { Experience } from "../components/Profile/Experience";
import { Projects } from "../components/Profile/Projects";

export const card: object = {
  textAlign: "center",
  backgroundColor: "#D7EEFF",
  paddingTop: "3%",
  paddingBottom: "3%",
  margin: "0 auto",
  marginBottom: "2%",
  width: "90%",
  borderRadius: "100px",
};

const Profile: React.VFC = () => {
  return (
    <Layout>
      <Aboutme />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default Profile;
