import Head from "next/head"
import BlogLayout from "../components/bloglayout"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, List } from "reactstrap"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <BlogLayout home>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>
          Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
        </title>
      </Head>
      <section>
        <Row>
          <Col>
            <p>
              Women of color continue to be underrepresented in STEM careers
            </p>
            <p>This blog has two main purposes:</p>
            <List>
              <li>
                provided resources to help guide learning on data analytics,
                coding, professional and personal development, and freelancing
              </li>
              <li>
                create a community of support for like-minded individuals and
                encourage women of color to pursue careers in STEM
              </li>
            </List>
            <p>
              From this platform I want women of color to feel{" "}
              <strong>inspired</strong>,<strong>encouraged</strong>,{" "}
              <strong>supported</strong>, and <strong>confident</strong> in
              pursuing a STEM career.{" "}
            </p>
          </Col>
        </Row>
      </section>
      <section className="my-3">
        <h2>FEATURED STORIES</h2>
        <Container>
          <Row>
            {allPostsData
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
              ))}
          </Row>
        </Container>
      </section>
      {/* the layout stuff is populating here from the layout component */}
      <section className="my-3">
        <h2>MORE STORIES</h2>
        <Container>
          <Row>
            {allPostsData
              .slice(0, 2)
              .map(({ id, date, title, image, extra }) => (
                <Col xs="6">
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </BlogLayout>
  );
}
