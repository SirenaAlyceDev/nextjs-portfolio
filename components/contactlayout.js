import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./footer";
import Header from "./header";
import { Grid, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(images/Wave-100s-1447px.png)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    marginBottom:"20px"

  },
  jumbotron: {
    padding: "50px",
    marginBottom: "20px",
  },
  jumbotronheader: {
    fontWeight: "400",
    textAlign: "left",
  },
  jumbotronsub: {
    color: "#2126B2",
  },
  content: {
    paddingLeft: "80px",
    paddingRight: "80px",
    marginBottom: "40px",
  },
}));

export default function ContactLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Grid container maxWidth={false} className={classes.root}>
      <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={classes.jumbotron}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h2"
                className={classes.jumbotronheader}
                gutterBottom
              >
                Let's Connect!
              </Typography>
              <Typography
                variant="body1"
                className={classes.jumbotronsub}
                gutterBottom
              >
                I want to work with you. Tell me more about your project.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <title>
            Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
          </title>
        </Head>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
