import React from 'react'
import Image from "next/image"
import Head from "next/head"
import HomeLayout from "../components/homelayout"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardGroup,
  CardTitle,
  CardText,
  CardBody,
  List,
} from "reactstrap"

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
                <CardGroup>
                  <Card className="py-5 px-3 developer">
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
                  </Card>
                  <Card className="py-5 px-3 data">
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
                          <li className="my-1">5+ years of experience in Public Health</li>
                          <li className="my-1">4+ years of experience in statistical programming & data management</li>
                        </List>
                      </CardText>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Row>
            </Col>
          </Row>
          <Row className="my-3 text-center">
              <Col>
              <h2 className="text-center">My Projects</h2>
              <p>Here are a few projects that I have designed and built</p>
              </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <h2 className="text-center">Work With Me</h2>
              <Link href="/contact" className="btn home-button">
                <a className="btn btn-primary" role="button">
                  Let's Connect!
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </HomeLayout>
    </>
  );
}
