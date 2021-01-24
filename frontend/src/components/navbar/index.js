import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";
import "./style.css";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <GiBilledCap />
      <Navbar.Brand href="">CmAP</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/review">Add Review</Nav.Link>
        <Nav.Link href="/map">View Map</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
