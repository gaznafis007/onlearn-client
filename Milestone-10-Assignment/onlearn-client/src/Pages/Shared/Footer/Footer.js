import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaLinkedinIn,
  FaSnapchat,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";

const Footer = () => {
  const { dark } = useContext(AuthContext);
  return (
    <div className={`static-bottom ${dark ? "bg-dark" : "bg-light"}`}>
      <Row
        className={`p-4  justify-content-around ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        <Col lg="2">
          <h1>onLearn</h1>
          <small>A place where you can change your journey</small>
        </Col>
        <Col lg="2">
          <p>Teams</p>
          <p>Mentors</p>
          <p>Products</p>
          <p>Projects</p>
        </Col>
        <Col lg="2">
          <h4>Our Location</h4>
          <p>22/3 Green View Residential Area, Chattogram Bangladesh</p>
        </Col>
        <Col lg="2">
          <h4>Find us on</h4>
          <FaFacebook className="me-2"></FaFacebook>
          <FaTwitter className="me-2" />
          <FaTwitch className="me-2" />
          <FaLinkedinIn className="me-2" />
          <FaSnapchat className="me-2" />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
