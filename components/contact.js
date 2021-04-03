import React from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Row, Col, Form} from "reactstrap";

export default function ContactForm() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <TextField
              required
              id="firstname"
              label="First Name"
              variant="outlined"
              className="my-2"
            />{" "}
            <TextField
              required
              id="lastname"
              label="Last Name"
              variant="outlined"
              className="my-2"
            />{" "}
            <br />
            <TextField required id="email" label="Email" variant="outlined" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
