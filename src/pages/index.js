import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Welcome!</h1>
      <Link to="/about">About</Link>
    </main>
  );
};

export default IndexPage;
