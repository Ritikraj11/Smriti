import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; // moved here
import Start from "./Components/Start";
import Join from "./Pages/Join";
import Clubs from "./Components/Clubs";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Committee from "./Components/Committee";
import Event from "./Components/Events";
import Utsav from "./Components/Utsav";
import ScrollToTop from "./Components/ScrollToTop";
export default function App() {
  return (
    <Router>
      {/* Navbar appears once for all pages */}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/join" element={<Join />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/utsav" element={<Utsav />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Committee" element={<Committee/>}/>
        <Route path="/events" element={<Event/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
