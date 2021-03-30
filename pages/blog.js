import Head from "next/head";
import BlogLayout, { siteTitle } from "../components/bloglayout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const heroPost = allPostsData[0]
  const morePosts = allPostsData.slice(1)
  return (
    <BlogLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Row>
          <Col>
            <p>
              Women of color continue to be underrepresented in STEM careers
            </p>
            <ul>
              <p>This blog has 2 main purposes:</p>
              <li>
                provided resources to help guide learning on data analytics,
                coding, professional and personal development, and freelancing
              </li>
              <li>
                create a community of support for like-minded individuals and
                encourage women of color to pursue careers in STEM
              </li>
            </ul>
            <p>
              From this platform I want women of color to feel inspired,
              encouraged, supported, and confident in pursuing a STEM career.{" "}
            </p>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col>
          {heroPost.id} <br />
          {heroPost.title} <br />
          {heroPost.date} <br />
          </Col>
          <Col>
          image goes here
          </Col>
        </Row>
      </section>
      {/* the layout stuff is populating here from the layout component */}
      <section>
        <h2>MORE STORIES</h2>
        <Container>
          {/* {allPostsData.map(({ id, date, title, image }) => (
            <Row key={id}>
              <Col xs="6">
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
            <img src={image} />
              </Col>
              <Col xs="6">
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
            <img src={image} />
              </Col>
          </Row>
          ))} */}
        </Container>
      </section>
      <section>add subscription form</section>
      <div>add footer component</div>
    </BlogLayout>
  );
}
