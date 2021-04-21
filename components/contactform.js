import React from "react";
import Send from "@material-ui/icons/Send";
import { Form } from "reactstrap";
import { Container, Input, TextField, Button, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "20px",
    marginBottom: "10px"
  }
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <Container fluid>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <Card className={classes.card}>
        <Grid container spacing={2}>
          <Input
              type="hidden"
              name="form-name"
              value="contact"
            />
          <Grid item xs={12}>
          <TextField
              required
              name="firstname"
              id="firstname"
              label="First Name"
              variant="outlined"
              className="my-2"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
              required
              name="lastname"
              id="lastname"
              label="Last Name"
              variant="outlined"
              className="my-2"
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              name="email"
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
        </Grid>
        </Card>

        {/* <Row>
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
        </Row> */}
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
