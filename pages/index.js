import React from "react";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
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
  Hidden,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Header from "../components/header";
import Footer from "../components/footer";

const useStyles = makeStyles((theme) => ({
  /* background by https://loading.io/background/m-wave/ */
  root: {
    // padding: "80px",
    backgroundImage: "url(images/Wave-100s-1447px.png)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  hero: {
    paddingRight: "80px",
    paddingLeft: "80px",
    paddingTop: "80px",
    marginBottom: "40px",
  },
  heroimg: {
    filter: "drop-shadow(5px 5px 5px #666666)",
  },
  avatar: {
    marginBottom: "10px",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  headline: {
    fontWeight: "bolder",
    marginBottom: "10px",
    color: "#2126b2",
  },
  subheadline: {
    marginBottom: "10px",
  },
  icons: {
    // marginRight: "5px",
    fontSize: "16px",
    color: "#2126b2",
  },
  button: {
    backgroundColor: "#2126B2",
    color: "#fff",
    borderRadius: "10px",
  },
  projects: {
    paddingRight: "80px",
    paddingLeft: "80px",
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
    boxShadow: "0 8px 32px 0 rgba( 33,38,178, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    padding: "10px",
  },
  image: {
    maxWidth: "100%",
    display: "block",
  },
  emphasis: {
    fontWeight: "bold",
    color: "#2126B2",
    textShadow: "2px 2px 5px #f64c71",
  },
  blog: {
    paddingRight: "80px",
    paddingLeft: "80px",
  },
  posts: {
    marginBottom: "10px",
  },
  cardlink: {
    color: "#f64c71",
  },
  bloglink: {
    color: "#2126B2",
  },
}));

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// getStaticProps()

export default function HomePage({ allPostsData }) {
  console.log(allPostsData);

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
      <Container disableGutters maxWidth={false} className={classes.root} home>
        <Header />
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
                I am a full-stack web developer. I build unique, purpose driven,
                functional web and mobile apps.
              </Typography>
              <Typography
                variant="body2"
                className={classes.subheadline}
                gutterBottom
              >
                Lover of all things{" "}
                <strong className={classes.emphasis}>
                  data and development
                </strong>
                , <strong className={classes.emphasis}>tech</strong> enthusiast,
                self-proclaimed{" "}
                <strong className={classes.emphasis}>forever learner</strong>,{" "}
                <strong className={classes.emphasis}>
                  problem solver and goal-setter
                </strong>
                , dog lover,{" "}
                <strong className={classes.emphasis}>Black Woman</strong>,
                curiosity is my middle name.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                href="/contact"
              >
                Work With Me!
              </Button>
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
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={5}
                  m={5}
                >
                  <img
                    className={classes.heroimg}
                    src="/images/example-3.png"
                    alt="illustration by IRA Design"
                  />
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </div>
        <div className={classes.projects}>
          <Typography variant="h4" gutterBottom>
            My Projects
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <Grid container display="flex" alignItems="center" spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia>
                      <img
                        height="auto"
                        alt="bword"
                        src="/images/sirenaalyce.png"
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
                              <a className={classes.cardlink}>GitHub Repo</a>
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
                <Grid container display="flex" alignItems="center" spacing={2}>
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
                              <a className={classes.cardlink}>GitHub Repo</a>
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
                <Grid container display="flex" alignItems="center" spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia>
                      <img
                        alt="bword"
                        src="/images/seekaty.png"
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
                              <a className={classes.cardlink}>Website</a>
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
        <Box className={classes.blog}>
          <Grid container display="flex" alignItems="center" spacing={1}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" gutterBottom>
                What's New?
                <br />
                Blog and News
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              {allPostsData
                .slice(0, 2)
                .map(({ id, date, title, image, extra }) => (
                  <Grid item xs={12} className={classes.posts}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h5">
                          <Link href={`/posts/${id}`}>
                            <a className={classes.bloglink}>{title}</a>
                          </Link>
                        </Typography>
                        <br />
                        <small>
                          <Date dateString={date} />
                        </small>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
