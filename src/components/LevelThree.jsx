import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

const LevelThree = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="flex-column">
          <GameNavbar />
        </div>
        <div className="interactive-container">Level 3</div>
      </div>
    </div>
  );
};

export default LevelThree;
