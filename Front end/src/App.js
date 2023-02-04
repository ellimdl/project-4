import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import SingleCondo from "./pages/SingleCondo";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="about" element={<About />} />
        <Route path="condo/:project" element={<SingleCondo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
