import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const blogTitle = "Techincolr.";
export const siteTitle =
  "Sirena Alyce | Data Analyst | FullStack Developer | Atlanta";

export default function BlogLayout({ children, home }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md">
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
      <Jumbotron fluid className="px-5">
          <Row>
            <Col>
              <h1 className="display-3">{blogTitle}</h1>
              <p className="lead">
                Techincolr is a blog to encourage and empower women of color
                interested in a STEM career.
              </p>
            </Col>
          </Row>
        </Jumbotron>
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
      
        <main>{children}</main>

      </Container>
      <Container>
        <Row>
          <Col>logo</Col>
          <Col>link</Col>
          <Col>social icons</Col>
        </Row>
      </Container>
    </>
  );
}
