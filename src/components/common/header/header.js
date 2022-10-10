import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.scss";
import { Link } from "react-router-dom";
import { settings } from "../../../utils/settings";
import logo from "../../../assets/img/logo/logo.png";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top main-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" title={settings.siteName}>
          <img src={logo} alt={settings.siteName} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Link
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <UserMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
