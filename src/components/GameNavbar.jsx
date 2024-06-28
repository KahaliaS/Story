import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const GameNavbar = () => {
  return (
    //contains links (navbar?) to the other components.
    //navbar will contain inventory, map, notebook, playerstats (the players icon will lead them to the playerstats page), and settings
    <>
      <Navbar>
        <Nav>
          <LinkContainer to="/inventory">
            <Nav.Link>Inventory</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/map">
            <Nav.Link>Map</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/notebook">
            <Nav.Link>Playground</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/settings">
            <Nav.Link>Settings</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </>
  );
};

export default GameNavbar;
