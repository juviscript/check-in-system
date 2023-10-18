import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import checkInService from "../service/checkInService";

const CheckInForm = () => {
  /* Form validation */
  const [showIt, setShowIt] = useState(true);
  const [validated, setValidated] = useState(false);

  const validation = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }
    setValidated(true);
  };

  /* Adding new Check-In entry logic */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");

  const saveEntry = (e) => {
    // e.preventDefault();

    const entry = { firstName, lastName, email, phoneNumber, reasonForVisit };
    checkInService
      .createNewEntry(entry)
      .then((response) => {
        console.log("New check-in entry added successfully!", response.data);
      })
      .catch((error) => {
        console.log("Something went horribly wrong! Don't panic!", error);
      });
  };

  return (
    <div>
      <Button
        onClick={() => setShowIt(!showIt)}
        style={{ display: showIt ? "" : "none" }}
      >
        Check-In
      </Button>
      <Form
        noValidate
        validated={validated}
        onSubmit={validation}
        style={{ display: showIt ? "none" : "block" }}
      >
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="(###) ###-####"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom05">
            <Form.Label>Reason For Visit:</Form.Label>
            <Form.Select
              aria-label="--"
              onChange={(e) => setReasonForVisit(e.target.value)}
            >
              <option>--</option>
              <option value="SLEEPY">Sleepy</option>
              <option value="HUNGRY">Hungry</option>
              <option value="TIRED">Tired</option>
              <option value="ITCHY">Itchy</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button type="submit" onClick={(e) => saveEntry(e)}>
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default CheckInForm;

/*

TODO: Figure out a way to make the form appear when selecting "Check In" button on home page.

*/
