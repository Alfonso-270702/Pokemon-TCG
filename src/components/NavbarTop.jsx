import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavbarTop() {
  const history = useHistory();

  const toPage = (detail) => {
    if (detail === "home") {
      history.push("/");
    } else {
      history.push(`/${detail}`);
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Poke Poke</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => toPage("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => toPage("pokemon")}>Pokemon</Nav.Link>
            <Nav.Link onClick={() => toPage("trainer")}>Trainer</Nav.Link>
            <Nav.Link onClick={() => toPage("energy")}>Energy</Nav.Link>
            <Nav.Link onClick={() => toPage("fav")}>Favourite</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarTop;
