import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Reservations from "./Reservation";
import MentionsLegales from "./MentionsLegales";

function App() {
  return (
    <div>
      <NavigationBar />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/Mentionslegales" element={<MentionsLegales />} />
          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
