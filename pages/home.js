import Image from "next/image"
import Head from "next/head"
import HomeLayout from "../components/homelayout"
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Container, Button } from "reactstrap"

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
          {console.log(allPostsData)}
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
