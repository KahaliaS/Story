import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

const LevelTwo = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="flex-column">
          <GameNavbar />
        </div>
        <div className="interactive-container">Level 2</div>
      </div>
    </div>
  );
};

export default LevelTwo;
