import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import image from "./images/sliit.png";
import "./App.css";

function Header() {
  return (
    <div className="nav-section">
      <Navbar className="container-fluid" bg="dark" variant="dark">
        <Navbar.Brand style={{ fontSize: "25px" }} href="#home">
          <img className="img-responsive" src={image} />
          SLIIT Research Project Management Tool
        </Navbar.Brand>
        <Nav
          className="ms-auto"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/adminLogin">ADMIN</Nav.Link>
          <Nav.Link href="/staffLogin">STAFF</Nav.Link>
          <Nav.Link href="/studentLogin">STUDENT</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
