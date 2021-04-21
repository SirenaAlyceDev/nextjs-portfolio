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
import Footer from "./footer";
import Header from './header'

const blogTitle = "Techincolr.";
const siteTitle = "Sirena Alyce | Data Analyst | FullStack Developer | Atlanta";

export default function BlogLayout({ children, home }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
   <Header />
      <Jumbotron fluid className="text-left px-5">
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
          <title>
            Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
          </title>
        </Head>
      
        <main>{children}</main>

      </Container>
<Footer />
    </>
  );
}
