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
import LevelOne from "./components/LevelOne.jsx";
import LevelTwo from "./components/LevelTwo.jsx";
import LevelThree from "./components/LevelThree.jsx";
import LevelFive from "./components/LevelFive.jsx";
import LevelFour from "./components/LevelFour.jsx";
import LevelSix from "./components/LevelSix.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

///Testing
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/player-stats" element={<PlayerStats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/map" element={<Map />} />
        <Route path="/opening-page" element={<OpeningPage />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/level-three" element={<LevelThree />} />
        <Route path="/level-four" element={<LevelFour />} />
        <Route path="/level-five" element={<LevelFive />} />
        <Route path="/level-six" element={<LevelSix />} />
      </Routes>
    </div>
  );
}

export default App;
