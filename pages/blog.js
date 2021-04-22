import React from 'react'
import Head from "next/head";
import BlogLayout from "../components/bloglayout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, List } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const useStyles = makeStyles((theme) => ({
  posttitle: {
    color: "#2126B2",
    fontSize: "32px",
    fontWeight: "bold"
  },
  bloglink: {
    color: "#f64c71"
  },
  emphasis: {
    fontWeight: "bold",
    color: "#2126B2",
    textShadow: "2px 2px 5px #f64c71"
  },
}));

export default function Blog({ allPostsData }) {
  const classes = useStyles();

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
              Women of color continue to be underrepresented in STEM careers.
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
              <strong className={classes.emphasis}>inspired</strong>,<strong className={classes.emphasis}>encouraged</strong>,{" "}
              <strong className={classes.emphasis}>supported</strong>, and <strong className={classes.emphasis}>confident</strong> in
              pursuing a STEM career.{" "}
            </p>
          </Col>
        </Row>
      </section>
      <section className="my-3">
        <Typography variant="h2" component="h2" className={classes.posttitle} gutterBottom>
          FEATURED STORIES
        </Typography>
        <Container>
          <Row>
            {allPostsData
              .filter((posts) => posts["featured"] === true)
              .map(({ id, date, title, image, extra }) => (
                <>
                  <Col>
                    <Link href={`/posts/${id}`}>
                      <a className={classes.bloglink}>{title}</a>
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
      <Typography variant="h2" component="h2" className={classes.posttitle} gutterBottom>
        MORE STORIES
        </Typography>
        <Container>
          <Row>
            {allPostsData
              .slice(0, 2)
              .map(({ id, date, title, image, extra }) => (
                <Col xs="6">
                  <Link href={`/posts/${id}`}>
                    <a className={classes.bloglink}>{title}</a>
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
