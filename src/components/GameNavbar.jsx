import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const GameNavbar = () => {
  return (
    <Navbar className="flex-column" bg="light">
      <Navbar.Brand href="/">Story Coders</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      {/* <Nav className="mr-auto"> */}
      <LinkContainer to="/inventory">
        <Nav.Link>Inventory</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/map">
        <Nav.Link>Map</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/notebook">
        <Nav.Link>Notebook</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/player-stats">
        <Nav.Link>Player Stats</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/settings">
        <Nav.Link>Settings</Nav.Link>
      </LinkContainer>
      {/* </Nav> */}
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default GameNavbar;
