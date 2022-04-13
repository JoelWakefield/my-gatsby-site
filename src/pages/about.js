import React from "react";
import { Link } from "gatsby";

const AboutPage = (props) => {
  return (
    <main>
      <title>About Me</title>
      <h1>ME</h1>
      <p>Hi there! I'm a maker!</p>
      <Link to="/">Home</Link>
    </main>
  );
};

export default AboutPage;
