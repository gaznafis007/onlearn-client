import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../../context/AuthProvider";
import { Button, Image } from "react-bootstrap";
import { useContext } from "react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { user, dark, logOut, setDark } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleMode = () => {
    setDark(!dark);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={dark ? "dark" : "light"}
      variant={dark ? "dark" : "light"}
    >
      <Container className={dark ? "text-white" : "text-dark"}>
        <Navbar.Brand>
          <Link
            to="/"
            className={
              dark
                ? " text-white text-decoration-none"
                : " text-dark text-decoration-none"
            }
            to="/courses"
            style={{ fontSize: "20px" }}
          >
            onLearn
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link
                className={
                  dark
                    ? "me-2 text-white text-decoration-none"
                    : "me-2 text-dark text-decoration-none"
                }
                to="/courses"
              >
                Courses
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={
                  dark
                    ? "me-2 text-white text-decoration-none"
                    : "me-2 text-dark text-decoration-none"
                }
                to="/blog"
              >
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={
                  dark
                    ? "me-2 text-white text-decoration-none"
                    : "me-2 text-dark text-decoration-none"
                }
                to="/faq"
              >
                FAQ
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            {user?.uid ? (
              <>
                <Nav.Item
                  className={dark ? "me-2 text-white " : "me-2 text-dark"}
                >
                  {user?.displayName}
                </Nav.Item>
                <Nav.Item>
                  <Image
                    src={user?.photoURL}
                    className="rounded-circle"
                    style={{ height: "30px" }}
                  />
                </Nav.Item>
                <Nav.Item className="text-white ms-2">
                  <Button
                    onClick={handleLogOut}
                    variant={dark ? "outline-light" : "outline-dark"}
                  >
                    Sign out
                  </Button>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Link
                    className="text-white me-2 text-decoration-none"
                    to="/login"
                  >
                    Login
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className="text-white ms-2 text-decoration-none"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </Nav.Item>
              </>
            )}

            <Nav.Item
              onClick={handleMode}
              className="text-white ms-2"
              style={{ fontSize: "20px" }}
            >
              {dark ? <FaSun></FaSun> : <FaMoon></FaMoon>}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
