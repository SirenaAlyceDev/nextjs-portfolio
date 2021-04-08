import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import { Container, Row, Col, Form } from "reactstrap";
import { Input } from "@material-ui/core";

export default function ContactForm() {
  return (
    <Container fluid>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
      >
        <Row>
          <Col>
            <Input
              type="hidden"
              name="form-name"
              value="contact"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              required
              name="firstname"
              id="firstname"
              label="First Name"
              variant="outlined"
              className="my-2"
              fullWidth
            />{" "}
            <TextField
              required
              name="lastname"
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
              name="email"
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
              name="message"
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
        <div data-netlify-recaptcha="true"></div>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<Send />}
        className="contact-button"
      >
        Send
      </Button>
      </Form>
    </Container>
  );
}
