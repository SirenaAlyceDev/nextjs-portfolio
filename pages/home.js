import React, { useState } from "react";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Card,
  Typography,
  Grid,
  Avatar,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  Box,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Header from "../components/header";
import Footer from "../components/footer";

const useStyles = makeStyles((theme) => ({
  /* background by SVGBackgrounds.com */
  root: {
    padding: "80px",
  },
  hero: {
    marginBottom: "40px",
  },
  avatar: {
    marginBottom: "10px",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  headline: {
    fontWeight: "bolder",
    marginBottom: "10px",
  },
  subheadline: {
    marginBottom: "10px",
  },
  icons: {
    marginRight: "10px",
    fontSize: "16px",
  },
  projecs: {
    marginBottom: "50px",
  },
  toolsdiv: {
    marginTop: "15px",
  },
  tools: {
    marginRight: "5px",
    fontSize: "10px",
    borderRadius: "15px",
    marginBottom: "5px",
  },
  card: {
    height: "100%",
    background: "rgba( 255, 255, 255, 0.35 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    padding: "10px",
  },
  image: {
    maxWidth: "100%",
    display: "block",
  },
}));

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  };
}

// getStaticProps()


export default function Home({ allPostsData }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>
          Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container disableGutters maxWidth={false} className={classes.root}>
        <div className={classes.hero}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Avatar
                alt="Sirena Alyce"
                src="images/profile.jpg"
                className={classes.avatar}
              />{" "}
              <Typography variant="subtitle2" gutterBottom>
                SIRENA ALYCE
              </Typography>
              <Typography
                variant="h5"
                className={classes.headline}
                gutterBottom
              >
                I am a freelance full-stack web developer. I build unique,
                purpose driven, functional web and mobile apps.
              </Typography>
              <Typography
                variant="body2"
                className={classes.subheadline}
                gutterBottom
              >
                Lover of all things <strong>data and development</strong>,{" "}
                <strong>tech</strong> enthusiast, self-proclaimed{" "}
                <strong>forever learner</strong>,{" "}
                <strong>problem solver and goal-setter</strong>, dog lover,{" "}
                <strong>Black Woman</strong>, curiosity is my middle name.
              </Typography>
              <Typography variant="body2" gutterBottom>
                <IconButton>
                  <Link href="https://twitter/sirenaalyce">
                    <TwitterIcon className={classes.icons} />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link href="https://instagram.com/sirenaalyce.io">
                    <InstagramIcon className={classes.icons} />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link href="https://github.com/SirenaAlyceDev/react-budget">
                    <GitHubIcon className={classes.icons} />
                  </Link>
                </IconButton>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={5}
                m={5}
              >
                <img
                  src="/images/example-3.png"
                  alt="illustration by IRA Design"
                />
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.projecs}>
          <Typography variant="h4" gutterBottom>
            My Projects
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia>
                      <img
                        alt="bword"
                        src="/images/BWordLogo.png"
                        className={classes.image}
                      />
                    </CardMedia>
                  </Grid>
                  <Grid item xs={7} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <CardContent>
                        <Typography component="h6" variant="h5">
                          SirenaAlyce.com
                        </Typography>
                        <div className={classes.toolsdiv}>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            NextJs
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Boostrap
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Reactstrap
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Material UI
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Netlify
                          </Button>
                        </div>

                        <CardActions>
                          <Button size="small" color="primary" disabled>
                            In Progress
                          </Button>
                          <Button>
                            <Link href="https://github.com/SirenaAlyceDev/">
                              <a className="project-link">GitHub Repo</a>
                            </Link>
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia>
                      <img
                        alt="bword"
                        src="/images/BWordLogo.png"
                        className={classes.image}
                      />
                    </CardMedia>
                  </Grid>
                  <Grid item xs={7} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <CardContent>
                        <Typography component="h6" variant="h5">
                          The B-Word (Web & Mobile App)
                        </Typography>
                        <div className={classes.toolsdiv}>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            React Native
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Boostrap
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Reactstrap
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Material UI
                          </Button>
                        </div>
                        <CardActions>
                          <Button size="small" color="primary" disabled>
                            In Progress
                          </Button>
                          <Button>
                            <Link href="https://github.com/SirenaAlyceDev/react-budget">
                              <a className="project-link">GitHub Repo</a>
                            </Link>
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia>
                      <img
                        alt="bword"
                        src="/images/BWordLogo.png"
                        className={classes.image}
                      />
                    </CardMedia>
                  </Grid>
                  <Grid item xs={7} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <CardContent>
                        <Typography component="h5" variant="h5">
                          Seekaty Job Board App
                        </Typography>
                        <div className={classes.toolsdiv}>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            React
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Reactstrap
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Material UI
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            MongoDB
                          </Button>{" "}
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Express
                          </Button>{" "}
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Node
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Heroku
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.tools}
                          >
                            Netlify
                          </Button>
                        </div>

                        <CardActions>
                          <Button size="small" color="primary" disabled>
                            In Progress
                          </Button>
                          <Button>
                            <Link href="https://affectionate-shirley-7cd6bb.netlify.app/">
                              <a className="project-link">Website</a>
                            </Link>
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div>
          <Typography variant="h4" gutterBottom>
            What's New? Blog and News
          </Typography>
          <section>
            <h2>Blog</h2>

            {/* {allPostsData
              .filter((posts) => posts["featured"] === true)
              .map(({ id, date, title, image, extra }) => (
                <>
                  <Col>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />
                    <small>
                      <Date dateString={date} />
                    </small>
                  </Col>
                  <Col>image goes here</Col>
                </>
              ))} */}
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}
