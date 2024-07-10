import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

const Notebook = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="flex-column">
          <GameNavbar />
        </div>
        <div className="interactive-container">map</div>
      </div>
    </div>
  );
};

export default Notebook;
