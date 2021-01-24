import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import "./style.css";

function Navigation() {
    return (
      <Navbar bg="light" variant="light">
      <Navbar.Brand>CmAP</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/review">Review</Nav.Link>
        <Nav.Link href="/map">Map</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form> */}
    </Navbar>
    );
}

export default Navigation