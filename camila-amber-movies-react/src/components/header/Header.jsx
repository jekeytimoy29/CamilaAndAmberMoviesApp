import "./Header.css";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Image
        src="../images/banner.jpeg"
        className="banner-style"
        alt="Frozen Movie Banner"
      />
      <Navbar bg="dark" variant="dark" size="lg">
        <Container fluid>
          <Navbar.Brand>Camila and Amber Movies</Navbar.Brand>
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
            <Button
              variant="outline-info"
              className="me-2"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="outline-info"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
