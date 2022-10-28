import React, { useContext } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <Row>
      <Col lg="4" className="mx-auto">
        <Card>
          <Image
            src={user?.photoURL}
            className="rounded-circle mx-auto py-2"
            style={{ height: "200px", width: "200px" }}
          />
          <Card.Body className="text-center">
            <h4>{user?.displayName}</h4>
            <p>Email address: {user.email}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
