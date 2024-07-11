import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";
import InteractiveContainer from "./InteractiveContainer";

//Opening page has a hover hamburger with the options: username, map/levels, inventory, notebook, settings, and logout
//additionally, there is an image/opening quote welcoming players back
//the next adventure you have is...
//one parent container
///container for all of the options
///
const OpeningPage = () => {
  return (
    <div className="parent-container">
      <div className="flex-column">
        <GameNavbar />
      </div>
      <div className="interactive-container">
        <InteractiveContainer />
      </div>
    </div>
  );
};

export default OpeningPage;
