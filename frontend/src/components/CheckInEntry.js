import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const CheckInEntry = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="mx-auto w-100">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="(###) ###-####" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom05">
            <Form.Label>Reason For Visit:</Form.Label>
            <Form.Select aria-label="--"></Form.Select>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default CheckInEntry;

/*

TODO: Map enum options to dropdown menu.
TODO: Figure out a way to make the form appear when selecting "Check In" button on home page.

*/