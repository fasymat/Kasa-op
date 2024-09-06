import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
