import logo from "./logo.svg";
import "./App.css";
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
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/playerstats" element={<PlayerStats />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/map" element={<Map />} />
          <Route path="/openingpage" element={<OpeningPage />} />
        </Routes>
      </Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
