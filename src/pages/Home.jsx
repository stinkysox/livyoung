import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Stats from "../components/Stats/Stats";
import MarqueeImages from "../components/MarqueeImages/MarqueeImages.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Stats />
      <MarqueeImages />
    </div>
  );
};

export default Home;
