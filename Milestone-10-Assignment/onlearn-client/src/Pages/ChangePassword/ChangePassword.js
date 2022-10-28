import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Form } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ChangePassword = () => {
  const { changePassword } = useContext(AuthContext);
  const handleChangePass = (event) => {
    event.preventDefault();
    const form = event.target;
    const mail = form.email.value;
    changePassword(mail)
      .then(() => {
        toast("Check Your Email");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Row>
        <Col lg="6" className="mx-auto">
          <Form>
            <div>
              <label htmlFor="Email">Email</label>
              <br />
              <input
                className="w-100 border-rounded p-2 my-2"
                type="email"
                name="email"
                id="mail"
              />
            </div>
            <Button onClick={handleChangePass} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ChangePassword;
