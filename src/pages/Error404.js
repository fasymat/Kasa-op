import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Error from "../components/Error";
const Error404 = () => {
  return (
    <div className="content">
      <Navigation />
      <Error />
      <Footer />
    </div>
  );
};

export default Error404;
