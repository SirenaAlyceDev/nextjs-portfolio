import React, { useState } from "react";
import Image from "next/image"
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
  Jumbotron
} from "reactstrap";
import Footer from "./footer";
export default function SecondaryLayout({ children }) {
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
            </Col>
          </Row>
        </Jumbotron>
      <Container >{children}</Container>
<Footer />
    </>
  );
}
