import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar.jsx";

const Map = () => {
  return (
    <div className="parent-container">
      <div className="flex-column">
        <GameNavbar />
      </div>
      <div className="interactive-container" data-testid="map">
        <ul>
          <li>
            <a href="level-one">1</a>
          </li>
          <li>
            <a href="level-two">2</a>
          </li>
          <li>
            <a href="level-three">3</a>
          </li>
          <li>
            <a href="level-four">4</a>
          </li>
          <li>
            <a href="level-five">5</a>
          </li>
          <li>
            <a href="level-six">6</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Map;
