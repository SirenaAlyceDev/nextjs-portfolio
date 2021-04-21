import React, { useState } from "react";
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
  } from "reactstrap";
  import { makeStyles } from "@material-ui/core/styles";

  const useStyles = makeStyles((theme) => ({


  }));

  export default function Header() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar light  expand="md">
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
    );
  }