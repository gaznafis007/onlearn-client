import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
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
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
