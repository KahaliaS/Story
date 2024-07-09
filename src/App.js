import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Inventory from "./components/Inventory.jsx";
import Notebook from "./components/Notebook.jsx";
import PlayerStats from "./components/PlayerStats.jsx";
import Settings from "./components/Settings.jsx";
import Map from "./components/Map.jsx";
import OpeningPage from "./components/OpeningPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

///Testing
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/player-stats" element={<PlayerStats />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/map" element={<Map />} />
          <Route path="/opening-page" element={<OpeningPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
