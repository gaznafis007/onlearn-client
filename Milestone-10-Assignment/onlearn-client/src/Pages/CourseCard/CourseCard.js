import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CourseCard = ({ course }) => {
  const { dark } = useContext(AuthContext);
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const {
    id,
    category,
    name,
    course_img,
    duration,
    total_enroll,
    mentor,
    price,
    course_details,
  } = course;
  const handleEnroll = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <>
      <Col lg="3" md="6" className="my-2">
        <Card data-aos="zoom-in" data-aos-duration="1500">
          <Card.Img variant="top" src={course_img} />
          <Card.Body
            className={dark ? "bg-dark text-white" : "bg-white text-dark"}
          >
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="text-primary">
              <span className="me-2">Mentor: {mentor}</span>
              <span>Price: {price}$</span>
            </Card.Subtitle>
            <Card.Text className="mt-3">
              {course_details.length > 100 ? (
                <span>
                  {course_details.slice(0, 100) + "...."}
                  <Link to={`/courses/${id}`}>Read more</Link>
                </span>
              ) : (
                course_details
              )}
            </Card.Text>
            <Button variant="primary" onClick={handleEnroll}>
              Enroll Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CourseCard;
