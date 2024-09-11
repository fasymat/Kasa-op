import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="content">
      <Navigation />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
