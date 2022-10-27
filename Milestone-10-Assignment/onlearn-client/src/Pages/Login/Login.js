import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <Row>
      <Col lg="8" md="10" className="mx-auto">
        <Card>
          <Card.Title>
            <h2 className="p-2 text-center">Please Log in</h2>
          </Card.Title>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button
                size="md"
                className="btn d-block text-center mx-auto"
                type="submit"
              >
                Login
              </Button>
              <p className="text-center">or</p>
              <div className="btn d-block btn-outline-success text-center mx-auto my-2">
                <FaGoogle /> Sign in with Google
              </div>
              <div className="btn d-block btn-outline-primary text-center mx-auto my-2">
                <FaFacebook /> Sign in with Facebook
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
