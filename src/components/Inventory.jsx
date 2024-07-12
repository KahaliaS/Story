import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

const Inventory = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="flex-column">
          <GameNavbar />
        </div>
        <div className="interactive-container" data-testid="inventory">
          inventory
        </div>
      </div>
    </div>
  );
};

export default Inventory;
