import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Home = () => {
  return (
    //contains links (navbar?) to the other components.
    //navbar will contain inventory, map, notebook, playerstats (the players icon will lead them to the playerstats page), and settings
    <div id="main-home-container">
      <div id="log-in">
        <SignIn />
        <SignUp />
      </div>
      <div id="sign-up"></div>
    </div>
  );
};

export default Home;
