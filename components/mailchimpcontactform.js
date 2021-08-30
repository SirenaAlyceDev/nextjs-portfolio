import React from "react";
import Send from "@material-ui/icons/Send";
import { Form } from "reactstrap";
import {
  Container,
  Input,
  TextField,
  Button,
  Grid,
  Card,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "40px",
    marginTop: "40px",
    marginBottom: "10px",
    background: "rgba( 255, 255, 255, 0.35 )",
    boxShadow: "0 8px 32px 0 rgba( 33,38,178, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  button: {
    backgroundColor: "#2126B2",
    color: "#fff",
    borderRadius: "10px",
  },
  subscribe: {
      color: "#2126B2"
  }
}));

export default function MailChimpContactForm() {
  const classes = useStyles();

  return (
    <Container>
      <Form
        name="newsletter subscription"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/subscriptionsuccess"
      >
        <Card className={classes.card}>
          <Grid container spacing={2}>
            <Input type="hidden" name="form-name" value="contact" />
            <Grid item xs={12}>
                <Typography variant="h2" align="center" className={classes.subscribe}>Join Techincolr!</Typography>
            </Grid>
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
                name="email"
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Card>
        <div data-netlify-recaptcha="true"></div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<Send />}
          className={classes.button}
        >
          Send
        </Button>
      </Form>
    </Container>
  );
}
