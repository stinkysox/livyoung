import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Stats from "../components/Stats/Stats";
import MarqueeImages from "../components/MarqueeImages/MarqueeImages.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Stats />
      <MarqueeImages />
      <Footer />
    </div>
  );
};

export default Home;
