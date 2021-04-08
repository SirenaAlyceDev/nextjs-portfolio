import React from "react";
import Image from "next/image";
import Head from "next/head";
import HomeLayout from "../components/homelayout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  CardImg,
  CardSubtitle,
  CardTitle,
  CardText,
  CardBody,
  List,
} from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function HomePage({ allPostsData }) {
  return (
    <>
      <HomeLayout>
        <Head>
          <title>
            Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Row className="my-3">
            <Col>
              <h2 className="text-center">What I Enjoy</h2>
              <Row className="text-center">
                <Grid container spacing={2}>
                  <Grid className="m-3 text-center" item component={Card} md>
                    <CardImg
                      src="images/development.svg"
                      height={64}
                      width={64}
                      alt="Full Stack Developer"
                    />
                    <CardBody>
                      <CardTitle>
                        <h4>Full Stack Developer</h4>
                      </CardTitle>
                      <CardText>
                        I enjoy creating and bringing ideas to life.
                      </CardText>
                      <CardSubtitle>
                        <h6>Languages:</h6>
                      </CardSubtitle>
                      <CardText>HTML, CSS, JS, Sass, Python, SQL</CardText>
                      <CardSubtitle>
                        <h6>Dev Tools:</h6>
                      </CardSubtitle>
                      <CardText>
                        <List type="unstyled">
                          <li className="my-1">Bootstrap</li>
                          <li className="my-1">Reactstrap</li>
                          <li className="my-1">Material UI</li>
                          <li className="my-1">ReactJS</li>
                          <li className="my-1">React Native</li>
                          <li className="my-1">Node</li>
                          <li className="my-1">Express</li>
                          <li className="my-1">MongoDB</li>
                        </List>
                      </CardText>
                    </CardBody>
                  </Grid>
                  <Grid className="m-3 text-center" item component={Card} md>
                    <CardImg
                      src="/images/dashboard.svg"
                      height={64}
                      width={64}
                      alt="Data Analyst"
                    />
                    <CardBody>
                      <CardTitle>
                        <h4>Data Analyst</h4>
                      </CardTitle>
                      <CardText>
                        <p>Data tells a story and can create change.</p>
                      </CardText>
                      <CardSubtitle>
                        <h6>Analytic Tools:</h6>
                      </CardSubtitle>
                      <CardText>
                        <p>SAS & Python</p>
                      </CardText>
                      <CardSubtitle>
                        <h6>Experience:</h6>
                      </CardSubtitle>
                      <CardText>
                        <List type="unstyled">
                          <li className="my-1">
                            5+ years of experience in Public Health
                          </li>
                          <li className="my-1">
                            4+ years of experience in statistical programming &
                            data management
                          </li>
                        </List>
                      </CardText>
                    </CardBody>
                  </Grid>
                </Grid>
              </Row>
            </Col>
          </Row>
          <Row className="my-3 text-center">
            <Col>
              <h2 className="text-center">My Projects</h2>
              <p>Here are a few projects that I have designed and built</p>
              <Row>
                <Grid container spacing={2}>
                <Grid item component={Card} className="project-card m-3 " md>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image="/images/BWordLogo.png"
                        title="The B Word"
                      />{" "}
                      <CardContent>
                        <h4>The B-Word (Web App)</h4>
                        <p>
                          A simple budgeting tool to help you determine your
                          long-term financial goals, save money, and eliminate
                          debt.
                        </p>
                        <h6>Tools:</h6>
                        <p>ReactJS, Bootstrap, Reactstrap, Material UI</p>{" "}
                      </CardContent>
                    </CardActionArea>
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
                  </Grid>
                  <Grid item component={Card} className="project-card m-3" md>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image="/images/BWordLogo.png"
                        title="The B Word"
                      />
                      <CardContent>
                        <h4>The B-Word (Mobile App)</h4>
                        <p>
                          A simple budgeting tool to help you determine your
                          long-term financial goals, save money, and eliminate
                          debt.
                        </p>
                        <h6>Tools:</h6>
                        <p>React Native, Bootstrap, Reactstrap, Material UI</p>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" disabled>
                        In Progress
                      </Button>
                      <Button>
                        <Link href="https://github.com/SirenaAlyceDev/react-native">
                          <a className="project-link">GitHub Repo</a>
                        </Link>
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Row>
            </Col>
          </Row>
          <Card className="my-5 w-100 p-3 work-with-me">
            <Col>
              <Row>
                <Col>
                  <h2 className="work-with-me-header text-center">
                    Work With Me
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>Interested in working together? We should chat.</p>
                  <Link href="/contact" className="btn home-button">
                    <a className="btn" role="button">
                      Let's Connect!
                    </a>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Card>
        </Container>
      </HomeLayout>
    </>
  );
}
