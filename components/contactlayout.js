import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
} from "reactstrap";
import Footer from "./footer";
import Header from "./header";

export default function ContactLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Header />
      <Jumbotron className="px-5" fluid>
        <Row>
          <Col className="align-self-center">
            <h1 className="display-3">Let's Connect!</h1>
            <p className="lead">
              I want to work with you. Tell me more about your project.
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
          />
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
