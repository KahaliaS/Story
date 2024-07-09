import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";

//Opening page has a hover hamburger with the options: username, map/levels, inventory, notebook, settings, and logout
//additionally, there is an image/opening quote welcoming players back
//the next adventure you have is...
//one parent container
///container for all of the options
///
const OpeningPage = () => {
  return (
    <div>
      <GameNavbar />
      <h1>Opening Page</h1>
    </div>
  );
};

export default OpeningPage;
