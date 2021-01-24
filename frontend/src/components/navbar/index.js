import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
import { Navbar, Nav } from 'react-bootstrap';
import { GiBilledCap } from "react-icons/gi";
// import FormControl from 'react-bootstrap/lib/FormControl';
import "./style.css";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <GiBilledCap />
      <Navbar.Brand href="">CmAP</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/review">Add Review</Nav.Link>
        <Nav.Link href="/map">View Map</Nav.Link>
        <Nav.Link href="/info">Info</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
