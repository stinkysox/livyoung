import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Testimonials from "./components/Testimonials/Testimonials";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
};

export default App;
