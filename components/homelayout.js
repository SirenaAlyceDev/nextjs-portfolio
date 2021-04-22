import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
export default function HomeLayout({ children }) {
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
      <Jumbotron className="text-left px-5" fluid>
        <Row>
          <Col className="align-self-center">
            <h1 className="display-3">Sirena Alyce.</h1>
            <p className="font-weight-bold">
              Freelance Full-Stack Web Developer & Data Analyst
            </p>
            <p>
              Lover of all things <strong>data and development</strong>,{" "}
              <strong>tech</strong> enthusiast, self-proclaimed{" "}
              <strong>forever learner</strong>,{" "}
              <strong>problem solver and goal-setter</strong>, dog lover,{" "}
              <strong>Black Woman</strong>, curiosity is my middle name.
            </p>
          </Col>
          <Col xs="4" className="align-self-center">
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
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
