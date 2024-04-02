import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Register from "./Register/register";
import Mindmate from "./Mindmate/Mindmate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register></Register>} />
        <Route path="/Mindmate" element={<Mindmate></Mindmate>} />
      </Routes>
    </Router>
  );
}
