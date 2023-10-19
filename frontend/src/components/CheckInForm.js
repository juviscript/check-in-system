import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import checkInController from "../api/checkInController";
import { useNavigate, useParams } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";


const CheckInForm = () => {
  /* On render, verify if theres an (id) paramater passed in the url. If so, then do this: */

  useEffect(() => {
    if (id) {
      checkInController
        .getEntryById(id)
        .then((entry) => {
          setFirstName(entry.data.firstName);
          setLastName(entry.data.lastName);
          setEmail(entry.data.email);
          setPhoneNumber(entry.data.phoneNumber);
          setReasonForVisit(entry.data.reasonForVisit);
          console.log(checkInController.getEntryById(id));
        })

        .catch((error) => {
          console.log(
            "Employee unable to be saved in the database. What are we gonna do!?!?!",
            error
          );
        });
    }
  }, []);

  /* Form validation after submitting. */
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
  const history = useNavigate();
  const { id } = useParams();

  /* Save after submit function. */
  const saveEntry = (e) => {
    e.preventDefault();

    const entry = {
      firstName,
      lastName,
      email,
      phoneNumber,
      reasonForVisit,
      id,
    };

    if (id) {
      checkInController
        .updateEntry(entry)
        .then((response) => {
          console.log("New check-in entry added successfully!", response.data);
          history("/");
        })
        .catch((error) => {
          console.log("Something went horribly wrong! Don't panic!", error);
        });
    } else {
      checkInController
        .createNewEntry(entry)
        .then((response) => {
          console.log("New check-in entry added successfully!", response.data);
          history("/");
        })
        .catch((error) => {
          console.log("Something went horribly wrong! Don't panic!", error);
        });
    }
  };

  return (
    <div>
      <Container
        fluid
        className="my-5 py-3 w-75 rounded bs-light-text-emphasis"
      >
        <h2>Welcome to Checkr</h2>
        <h5 className="mt-4">
          <BiDownArrowAlt /> Get started below <BiDownArrowAlt />
        </h5>
      </Container>
      <Form noValidate validated={validated} onSubmit={validation}>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={firstName}
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
              value={lastName}
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
              value={email}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Form.Control.Feedback type="invalid" value={reasonForVisit}>
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
              required
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
