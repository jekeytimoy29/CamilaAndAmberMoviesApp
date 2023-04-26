import "./Header.css";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, useAuthDispatch } from "../../contexts/AuthContext";
import { useEffect } from "react";
import localforage from "localforage";

export default function Header() {
  const navigate = useNavigate();
  const auth = useAuth();
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    setLastLoginUser(authDispatch);
  }, []);

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
              {auth.user && auth.isAuthorized && (
                <>
                  <NavLink className="nav-link" to="/movies">
                    Movies
                  </NavLink>
                  <NavLink className="nav-link" to="/users">
                    Users
                  </NavLink>
                </>
              )}
            </Nav>
            {auth.user ? (
              <>
                <Navbar.Text className="signed-in-style">
                  Signed in as: <strong>{auth.user.email}</strong>
                </Navbar.Text>
                <Button
                  variant="outline-info"
                  className="me-2"
                  onClick={() => {
                    authDispatch({ type: "LOGOUT" });
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
                <Button
                  variant="outline-info"
                  onClick={() => navigate(`/my_profile/${auth.user._id}`)}
                >
                  My Profile
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const setLastLoginUser = async (authDispatch) => {
  const user = await localforage.getItem("loggedInUser");
  if (user) authDispatch({ type: "LOGIN", user: user });
};
