import React, { useState } from "react";
import {
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
    nav: {
      backgroundColor:"transparent",
    },
    link: {
      color: "#2126B2",
      '&:hover': {
        color: "#2126B2",
        textShadow: "0 0 3px #F64C71",
        textDecoration: "none", 
        fontWeight: "600"     
      }
    }

  }));

  export default function Header() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar light className="bg-transparent" expand="md" >
          <NavbarBrand href="/">SirenaAlyce</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink href="/">
                  <a className={classes.link}>Home</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">
                <a className={classes.link}>Blog</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">
                <a className={classes.link}>Contact</a>
                </NavLink>
              </NavItem>
              {/* <Link>Shop</Link> */}
              <NavItem>
                <NavLink href="https://www.buymeacoffee.com/sirenaalyce">
                <a className={classes.link}>Buy Me a Coffee!</a>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }