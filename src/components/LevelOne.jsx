import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

const LevelOne = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="flex-column">
          <GameNavbar />
        </div>
        <div className="interactive-container">Level 1</div>
      </div>
    </div>
  );
};

export default LevelOne;
