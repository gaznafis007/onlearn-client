import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../../context/AuthProvider";
import { Button, Image } from "react-bootstrap";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="text-decoration-none text-white"
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
                className="me-2 text-white text-decoration-none"
                to="/courses"
              >
                Courses
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="me-2 text-white text-decoration-none" to="/blog">
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="me-2 text-white text-decoration-none" to="/faq">
                FAQ
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            {user?.uid ? (
              <>
                <Nav.Item className="text-white me-2">
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
                  <Button onClick={handleLogOut} variant="outline-light">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
