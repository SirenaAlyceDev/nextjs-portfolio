import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import HomeLayout from "../components/homelayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Row, Col, Container, Button } from "reactstrap";

export default function HomePage() {
  return (
    <>
      <HomeLayout>
        <Head>
          <title>
            Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Jumbotron className="text-left" fluid>
          <Row>
            <Col xs="1" className="align-self-center">
              {/* <VerticalNav /> */}
            </Col>
            <Col className="align-self-center">
              <h1 className="display-3">Hi, I'm Sirena Alyce.</h1>
              <p className="font-weight-bold">
                Freelance Full-Stack Web Developer & Data Analyst
              </p>
              <p>
                Lover of all things <strong>data and development</strong>,{" "}
                <strong>tech</strong>
                enthusiast, self-proclaimed <strong>
                  lifeling learner
                </strong>, <strong>problem solver and goal-setter</strong>, dog
                lover, <strong>Black Woman</strong>, curiosity is my middle
                name.
              </p>
            </Col>
            <Col xs="4" className="align-self-end">
              {/* <img src="" className="img-fluid rounded-circle" alt="profile pic" /> */}
              <Image
                src="/images/profile.jpg" // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                className="img-fluid rounded-circle"
                alt="Your Name"
              />
            </Col>
          </Row>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <h2>What I Do</h2>
              <Row>
                <Col>{/* <WhatIDoThumbnail /> */}</Col>
                <Col>{/* <WhatIDoThumbnail /> */}</Col>
              </Row>
              <Button className="home-button" color="primary">
                Timeline
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Projects</h2>
              <Row>
                <Col>
                  {/* <Thumbnail
                  source={budgetweb}
                  alt="budget web app"
                  title="Budget Web App"
                  subtitle="React JS"
                  description="short case study about project"
                /> */}
                  <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    className="img-fluid rounded-circle"
                    alt="Your Name"
                  />
                </Col>
                <Col>
                  {/* <Thumbnail
                  source={budgetmobile}
                  alt="budget mobile app"
                  title="Budget Mobile App"
                  subtitle="React Native"
                  description="short case study about project"
                /> */}
                  <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    className="img-fluid rounded-circle"
                    alt="Your Name"
                  />
                </Col>
              </Row>
              {/* <ProjectsButton /> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Latest On The Blog</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Work With Me</h2>
              <Link href="/contact" className="btn home-button">
              <a class="btn btn-primary" role="button">Let's Get Started!</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </HomeLayout>
    </>
  );
}
