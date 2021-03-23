import React, { useState } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron,   Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav } from "reactstrap";
import utilStyles from "../styles/utils.module.css";


const blogTitle = "Techincolr.";
export const siteTitle =
  "Sirena Alyce | Data Analyst | FullStack Developer | Atlanta";

export default function Layout({ children, home }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">SirenaAlyce</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            {/* <Link>Shop</Link> */}
            <Link href="https://www.buymeacoffee.com/sirenaalyce">
              <a>Buy Me a Coffee!</a>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{blogTitle}</h1>
          <p className="lead">
            Techincolr is a blog to encourage and empower women of color
            interested in a STEM career.
          </p>
        </Container>
      </Jumbotron>
      <Row>
        <Col>
          <p>Women of color continue to be underrepresented in STEM careers</p>
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
      <Row>
        <Col>
          <h3>FEATURED BLOG TITLE</h3>
          <Date />
        </Col>
        <Col>
          <p>
            Croissant marshmallow bear claw jelly beans chocolate liquorice
            pastry marshmallow. Bonbon toffee biscuit croissant cake jujubes
            dessert pudding. Danish chocolate cake cotton candy. Toffee carrot
            cake gummi bears gummies croissant carrot cake.
          </p>
        </Col>
      </Row>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
    <Container>
      <Row>
          <Col>
          logo
          </Col>
          <Col>
          link
          </Col>
          <Col>
          social icons
          </Col>
      </Row>
      </Container>
</>
  );
}
