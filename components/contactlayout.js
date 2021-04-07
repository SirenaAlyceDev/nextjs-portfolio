import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "./homelayout.module.css";
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

const siteTitle = "Sirena Alyce | Data Analyst | FullStack Developer | Atlanta";

export default function ContactLayout({ children }) {
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
