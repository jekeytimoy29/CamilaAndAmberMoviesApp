import "./Header.css";
import { Component } from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Image src="../images/banner.jpeg" className="banner-style" />
        <Navbar bg="dark" variant="dark" size="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Camila and Amber Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              </Nav>
              <Button variant="outline-info" className="me-2">
                Login
              </Button>
              <Button variant="outline-info">Register</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
