import React, { useState } from "react";
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
  Nav
} from "reactstrap";
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
        <Row>
          <Col>{children}</Col>
        </Row>
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
