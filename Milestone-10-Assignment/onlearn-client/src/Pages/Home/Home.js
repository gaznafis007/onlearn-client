import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import responsiveCode from "./responsiveCode.json";
import reactAndNodeAnimattion from "./react-and-node-development-mobile-first.json";
import SideNav from "../Shared/SideNav/SideNav";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  const navigate = useNavigate();
  const { dark } = useContext(AuthContext);
  useTitle("");
  return (
    <>
      <Row
        className={`mx-auto ${
          dark ? "bg-dark text-white" : "bg-light text-daek"
        }`}
      >
        <Col lg="4" md="6" className="mx-auto mt-5">
          <h2>Build Your Next Level Career with</h2>
          <h1 className="text-primary">onLearn</h1>
          <p className="mt-2">
            onLearn is a platform which gives you a window where you can explore
            the most technology trend with one of the best mentor's
          </p>
          <Button onClick={() => navigate("/courses")}>
            Explore our courses
          </Button>
        </Col>
        <Col lg="6" className="mx-auto">
          <Lottie animationData={reactAndNodeAnimattion}></Lottie>
        </Col>
      </Row>
    </>
  );
};

export default Home;
