import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Reservations from "./Reservation";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
