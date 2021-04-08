import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import { Container, Row, Col, Form } from "reactstrap";

export default function ContactForm() {
  return (
    <Container fluid>
      <Form name="contact" method="POST" data-netlify="true">
      <Row>
          <Col>
            <TextField
            type="hidden"
            name="contact"
            value="contact"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              required
              id="firstname"
              label="First Name"
              variant="outlined"
              className="my-2"
              fullWidth
            />{" "}
            <TextField
              required
              id="lastname"
              label="Last Name"
              variant="outlined"
              className="my-2"
              fullWidth
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              required
              id="message"
              label="Message"
              rows={5}
              variant="outlined"
              multiline
              className="my-2"
              fullWidth
            />
          </Col>
        </Row>
      </Form>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<Send />}
        className="contact-button"
      >
        Send
      </Button>
    </Container>
  );
}
