import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
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
        <Card>
          <Card.Img variant="top" src={course_img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {course_details.length > 150 ? (
                <span>
                  {course_details.slice(0, 150) + "...."}
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
