import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Welcome!</h2>
      <p>This is my website.</p>
      <StaticImage
        alt="He-Man: fabulous powers included ;)"
        src="../images/he-man.webp"
      />
    </Layout>
  );
};

export default IndexPage;
