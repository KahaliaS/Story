import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

const Settings = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="flex-column">
          <GameNavbar />
        </div>
        <div className="interactive-container" data-testid="settings">
          map
        </div>
      </div>
    </div>
  );
};

export default Settings;
