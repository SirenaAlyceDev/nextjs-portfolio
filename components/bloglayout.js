import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./footer";
import Header from "./header";
import { Grid, Typography, Container } from "@material-ui/core";

const blogTitle = "Techincolr.";

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

export default function BlogLayout({ children }) {
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
                {blogTitle}
              </Typography>
              <Typography
                variant="body1"
                className={classes.jumbotronsub}
                gutterBottom
              >
                Techincolr is a blog to encourage and empower women of color
                interested in a STEM career.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container maxWidth={false} className={classes.content}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap"
            rel="stylesheet"
          ></link>
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
