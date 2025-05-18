import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import Packages from "./components/Packages/Packages";
import LatestWork from "./components/LatestWork/LatestWork";
import TeasersSection from "./components/TeasersSection/TeasersSection";
import FormSection from "./components/FormSection/FormSection";
import OurServices from "./components/OurServices/OurServices";
import ScrollButton from "./components/ScrollButton/ScrollButton";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<LatestWork />} />
        <Route path="/teasers" element={<TeasersSection />} />
        <Route path="/booknow" element={<FormSection />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>

      <ScrollButton />
    </>
  );
};

export default App;
