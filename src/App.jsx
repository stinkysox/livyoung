import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import Packages from "./components/Packages/Packages";
import LatestWork from "./components/LatestWork/LatestWork";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/gallery" element={<LatestWork />} />
    </Routes>
  );
};

export default App;
