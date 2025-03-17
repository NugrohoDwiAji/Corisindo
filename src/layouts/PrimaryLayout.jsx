import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrimaryLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="px-5">{children}</div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
