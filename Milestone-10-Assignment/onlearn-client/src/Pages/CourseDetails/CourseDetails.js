import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { FaBeer, FaPeopleCarry } from "react-icons/fa";

const CourseDetails = () => {
  const courseData = useLoaderData();
  const {
    id,
    category,
    name,
    course_img,
    duration,
    total_enroll,
    mentor,
    course_details,
  } = courseData;
  return (
    <div className="mx-auto w-75">
      <Card>
        <Card.Img variant="top" src={course_img} />
        <Card.Title className="ms-2 mt-4">{name}</Card.Title>
        <Card.Subtitle className="ps-2 w-100 d-flex">
          <p className="me-2">Mentor: {mentor}</p>
          <p className="ms-2">
            Total Enroll <FaPeopleCarry></FaPeopleCarry> : {total_enroll}
          </p>
        </Card.Subtitle>
        <Card.Body>
          <Card.Text>{course_details}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-evenly">
          <p className="fw-semibold">Course Category: {category}</p>
          <p className="fw-semibold">Course Duration: {duration}</p>
          <button className="btn btn-primary">Enroll now!</button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
