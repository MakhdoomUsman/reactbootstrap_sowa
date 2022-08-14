import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap-icons/font/bootstrap-icons.css";
const Navbar = () => {
  return (
    <>
    <div classNamee="position-sticky">
      <Navbar className="bg-color" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <NavDropdown title="Shop All Products">
                <NavDropdown.Item href="#" className="bg-color">
                  All Products Details
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Shop By Brand">
                <NavDropdown.Item href="#" className="bg-color">
                  All Brand Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Downlaod Centre</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">Support</Nav.Link>
              <Nav.Link href="#">Quick Order</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </>
  );
};

export default Navbar;
