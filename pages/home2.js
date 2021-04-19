import React, { useState } from "react";
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
  CardActionArea,
  List,
  ListItem,
  ListItemText,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Paper,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import BackgroundImg from '/images/Rose-Petals.svg'

const useStyles = makeStyles({
  /* background by SVGBackgrounds.com */
  root: {
    backgroundColor: "#f64c71",
    backgroundImage: 'url("/images/Rose-Petals.svg")',
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backdropFilter: "blur( 4px )",
    padding: "20px",
  },
  card: {
    background: "rgba( 255, 255, 255, 0.75 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  fullHeightCard: {
    height: "100%",
    background: "rgba( 255, 255, 255, 0.75 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
});

export default function HomePage2() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <Navbar color="dark" expand="md">
        <NavbarBrand href="/home">SirenaAlyce</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="/">
                <a>Home</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">
                <a>Blog</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                <a>Contact</a>
              </NavLink>
            </NavItem>
            {/* <Link>Shop</Link> */}
            <NavItem>
              <NavLink href="https://www.buymeacoffee.com/sirenaalyce">
                <a>Buy Me a Coffee!</a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Avatar alt="Sirena Alyce" src="images/profile.jpg" />{" "}
            <Typography variant="subtitle2" gutterBottom>
              Sirena Alyce
            </Typography>
            <Typography variant="h5" gutterBottom>
              Freelance Full-Stack Web Developer & Data Analyst
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lover of all things <strong>data and development</strong>,{" "}
              <strong>tech</strong> enthusiast, self-proclaimed{" "}
              <strong>forever learner</strong>,{" "}
              <strong>problem solver and goal-setter</strong>, dog lover,{" "}
              <strong>Black Woman</strong>, curiosity is my middle name.
            </Typography>
            <Typography variant="body2" gutterBottom>
              <TwitterIcon />
              <InstagramIcon />
              <GitHubIcon />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>some image will go here</h1>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography variant="h2" gutterBottom>
          Specializing In
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.fullHeightCard}>
              <CardActionArea>
                <CardMedia
                  image="images/development.svg"
                  title="Full Stack Development"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Full Stack Development
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I enjoy creating and bringing ideas to life.
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Languages:{" "}
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    HTML, CSS, JS, Sass, Python, SQL
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Dev Tools:{" "}
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <List>
                      <ListItem>
                        <ListItemText primary="Bootstrap" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Reactstrap" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Material UI" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="NextJs" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="ReactJS" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="React Native" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Node" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Express" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="MongoDB" />
                      </ListItem>
                    </List>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.fullHeightCard}>
              <CardActionArea>
                <CardMedia
                  image="images/development.svg"
                  title="Full Stack Development"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Data Management
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Data tells a story and can create change.
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Analytic Tools:{" "}
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    SAS & Python
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Dev Tools:{" "}
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <List>
                      <ListItem>
                        <ListItemText primary="5+ years of experience in Public Health" />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="4+ years of experience in statistical programming &
                            data management"
                        />
                      </ListItem>
                    </List>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>{" "}
          </Grid>
        </Grid>
      </div>
      <Typography variant="h2" gutterBottom>
        My Work
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia>
                  <img alt="bword" src="/images/BWordLogo.png" />
                </CardMedia>
              </Grid>
              <Grid item xs={7} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                    <Button size="small" color="primary" disabled>
                      In Progress
                    </Button>
                    <Button>
                      <Link href="https://github.com/SirenaAlyceDev/react-budget">
                        <a className="project-link">GitHub Repo</a>
                      </Link>
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia>
                  <img alt="bword" src="/images/BWordLogo.png" />
                </CardMedia>
              </Grid>
              <Grid item xs={7} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                    <Button size="small" color="primary" disabled>
                      In Progress
                    </Button>
                    <Button>
                      <Link href="https://github.com/SirenaAlyceDev/react-budget">
                        <a className="project-link">GitHub Repo</a>
                      </Link>
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia>
                  <img alt="bword" src="/images/BWordLogo.png" />
                </CardMedia>
              </Grid>
              <Grid item xs={7} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                    <Button size="small" color="primary" disabled>
                      In Progress
                    </Button>
                    <Button>
                      <Link href="https://github.com/SirenaAlyceDev/react-budget">
                        <a className="project-link">GitHub Repo</a>
                      </Link>
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
