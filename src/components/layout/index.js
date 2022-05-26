import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Index = (props) => {
  return (
    <>
      <Navbar />
      <div {...props} />
      <Footer />
    </>
  );
};

export default Index;
