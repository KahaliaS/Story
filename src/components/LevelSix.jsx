import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

const LevelSix = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="flex-column">
          <GameNavbar />
        </div>
        <div className="interactive-container">Level 6</div>
      </div>
    </div>
  );
};

export default LevelSix;
