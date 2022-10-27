import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const CourseCard = ({ course }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const {
    id,
    category,
    name,
    course_img,
    duration,
    total_enroll,
    mentor,
    course_details,
  } = course;
  return (
    <>
      <Col lg="3" md="6" className="my-2">
        <Card data-aos="zoom-in">
          <Card.Img variant="top" src={course_img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {course_details.length > 100 ? (
                <span>
                  {course_details.slice(0, 100) + "...."}
                  <Link to={`/courses/${id}`}>Read more</Link>
                </span>
              ) : (
                course_details
              )}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CourseCard;
