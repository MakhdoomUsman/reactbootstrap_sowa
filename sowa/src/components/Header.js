import React from "react";
import Sowa from "./Sowa.png";
import NewCatalogue from "./slider/New-Catalogue.jpg";
import NewStmHolders from "./slider/NEW-STM-Holders.jpg";
import WereHiring from "./slider/Were-Hiring.jpg";
import Drilling from "./tools/Drilling-L1.jpg";
import Indexable from "./tools/Indexable-L1.jpg";
import Measuring from "./tools/Measuring-L1.jpg";
import Milling from "./tools/Milling-L1.jpg";
import Threading from "./tools/Threading-L1.jpg";
import ToolHolding from "./tools/ToolHolding-L1.jpg";
import graytool from "./contributer/Gray_Tools-BW.png";
import guehringDLogo from "./contributer/GuehringDLogo_1_2-BW.png";
import Mitutoyo from "./contributer/mitutoyo-BW.png";
import Seco from "./contributer/Seco_web300-BW.png";
import Starret from "./contributer/Starrett-BW.png";
import SowaGs from "./card/Sowa-to-GS-Post.jpg";
import WebsiteLauncher from "./card/Website-Launch-Post.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap-icons/font/bootstrap-icons.css";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      {/* start header  */}
      {/* <div className="max-width"> */}
      <Container fluid className="header-color sticky-top">
        
        <Row >
          <Col lg={5} md={6} sm={6}className="logo">
            <Image src={Sowa} alt="Sowa" fluid></Image>
            <span className="bold-header"> Tooling to World</span>
          </Col>
          {/* <Col></Col> */}
          <Col lg={4} md={2} sm={6}>
            <div className="border-box">
              <input
                type="text"
                name="input"
                className="search-tab"
                placeholder=""
              />
              <button
                className="btn-search btn btn-primary"
                type="submit"
                name="search"
                title="Start search"
              >
                <span>
                  <i className="bi bi-search"></i>
                </span>
              </button>
            </div>
          </Col>
        <Col lg={3} md={4} sm={12}>
          <Row>
            <Col lg={2} md={0}></Col>
            <Col lg={10} md={12}><div className="icon-box">
              <button type="submit" className="btn btn-primary btn-login">
                <i className="bi bi-people-fill"></i> Login
              </button>
              <div className="header-icons">
                <i className="bi bi-sliders2-vertical icons">&#178;</i>
                <i className="bi bi-heart icons"></i>
                <i className="bi bi-bag icons"> 0</i>
                <i className="bi bi-justify-right icons"></i>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col> <span className="header-contact-number ">
                {/* <br /> <br /> <br /> */}
                1-800-265-8221
              </span>
              <span className="header-contact-email">sales@sowatool.com</span></Col>
          </Row>
            
          </Col>
        </Row>
      </Container>

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

      {/* navbar ends here  */}

      {/* crousel slider starts here  */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={NewCatalogue}
            alt="New Catalogue"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={NewStmHolders}
            alt="New Stm Holders"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={WereHiring} alt="We're Hiring" />
        </Carousel.Item>
      </Carousel>

      {/* crousel slider ends  here  */}

      {/* Image gallery start from here  */}

      <Container>
        <p className="after-slide">Top Product Categories</p>
      </Container>
      <Container>
        <Row>
          <Col lg={2} md={2} sm={3} xs={4} className="image-size">
            <Image src={Drilling} alt="Drilling and Holemaking" fluid />
            <a href="#">Drilling & Holemaking</a>
          </Col>
          <Col lg={2} md={2} sm={3} xs={4} className="image-size">
            <Image src={Indexable} alt="Indexable Cutting Tools" fluid />
            <a href="#">Indexable Cutting Tools</a>
          </Col>
          <Col lg={2} md={2} sm={3} xs={4} className="image-size">
            <Image src={Measuring} alt="Drilling and Holemaking" fluid />
            <a href="#">Measuring & Inspection</a>
          </Col>
          <Col lg={2} md={2} sm={3} xs={4} className="image-size">
            <Image src={Milling} alt="Drilling and Holemaking" fluid />
            <a href="#">Milling</a>
          </Col>
          <Col lg={2} md={2} sm={3} xs={4} className="image-size">
            <Image src={Threading} alt="Drilling and Holemaking" fluid />
            <a href="#">Threading & Tapping</a>
          </Col>
          <Col lg={2} md={2} sm={3} xs={4} className="image-size">
            <Image src={ToolHolding} alt="Drilling and Holemaking" fluid />
            <a href="#">Tool Holding</a>
          </Col>
        </Row>
      </Container>
      {/* Image gallery end here  */}

      {/* Card starts from here  */}
      <Container fluid>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <Card className="mt-5" border="light">
              <Card.Body>
                <Image src={SowaGs} alt="" fluid></Image>
                <Card.Title className="mt-3">
                  Welcome to the New SowaTool.com!
                </Card.Title>
                <Card.Text>
                  <p>
                    Before you can get online there are a couple of steps you
                    need to take. <br /> <br />
                    Click on the link below to setup your account now.
                  </p>
                </Card.Text>
                <Button variant="secondary" size="lg" className="color">
                  <p>Setup Account</p>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={6} xs={6}>
            <Card className="mt-5" border="light">
              <Card.Body>
                <Image
                  src={WebsiteLauncher}
                  alt="Website Laoncher"
                  fluid
                ></Image>
                <Card.Title className="mt-5">
                  Sowa To GS Tooling Endmill Rebrand
                </Card.Title>
                <Card.Text>
                  <p>
                    Our premium carbide end mills will now be sold under the GS
                    Tooling brand. But rest assured, these are still the same
                    product you know and love.
                    <br /> <br />
                    For more information you can read more at the link below.
                  </p>
                </Card.Text>
                <Button variant="secondary" size="lg" className="color">
                  <p>Learn More</p>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Card starts ends here  */}

      {/* distributer section starts here  */}
      <Container fluid>
        <h2>Authorized Distributors</h2>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <Image src={graytool} alt="" fluid></Image>
            </Col>
            <Col>
              <Image src={guehringDLogo} alt="" fluid></Image>
            </Col>
            <Col>
              <Image src={Mitutoyo} alt="" fluid></Image>
            </Col>
            <Col>
              <Image src={Seco} alt="" fluid></Image>
            </Col>
            <Col>
              <Image src={Starret} alt="" fluid></Image>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* distributer section ends here  */}

      {/* in between seaction starts here  */}

      <Container fluid className="inbetween">
        <Row>
          <Col className="in-between" md={12} sm={12} xs={12}>
            <p>1-800-265-8221 </p>
            <h6>Monday - Friday, 8:00 am - 6:00 pm EST</h6>
          </Col>
          <Col className="in-between"></Col>
        </Row>
      </Container>
      {/* in between seaction ends here  */}
      {/* footer starts here  */}
      <Container fluid className="footer-color">
        <Row>
          <Col className="color-footer mb-3 mt-5" lg={6} md={6} sm={6}>
            <Row>
              <Col className="color-footer mb-3 " lg={4} md={6}>
                <ul>
                  <h4>Account</h4>
                </ul>
                <ul>
                  <a href="#">Customer Login</a>
                </ul>
                <ul>
                  <a href="#">Order History</a>
                </ul>
                <ul>
                  <a href="#">Returns</a>
                </ul>
                <ul>
                  <a href="#">Ordering, Shipping & Payment</a>
                </ul>
                <ul>
                  <a href="#">Help & Support</a>
                </ul>
              </Col>
              <Col className="color-footer mb-3" lg={4} md={6}>
                <ul>
                  <h4>Account</h4>
                </ul>
                <ul>
                  <a href="#">Customer Login</a>
                </ul>
                <ul>
                  <a href="#">Order History</a>
                </ul>
                <ul>
                  <a href="#">Returns</a>
                </ul>
                <ul>
                  <a href="#">Ordering, Shipping & Payment</a>
                </ul>
                <ul>
                  <a href="#">Help & Support</a>
                </ul>
              </Col>
              <Col className="color-footer mb-3 " lg={4}>
                <ul>
                  <h4>Account</h4>
                </ul>
                <ul>
                  <a href="#">Customer Login</a>
                </ul>
                <ul>
                  <a href="#">Order History</a>
                </ul>
                <ul>
                  <a href="#">Returns</a>
                </ul>
                <ul>
                  <a href="#">Ordering, Shipping & Payment</a>
                </ul>
                <ul>
                  <a href="#">Help & Support</a>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col className="color-footer mb-3 mt-5" lg={6} md={6} sm={6}>
            <Row>
              <Col className="color-footer mb-3" lg={6}>
                <ul>
                  <h4>FIND A DISTRIBUTOR</h4>
                </ul>
              </Col>
              <Col className="color-footer mb-3" lg={6}>
                <h4>We're Social</h4>
                <h2 className="d-inline-block mr-3">
                  <i className="bi bi-facebook"></i>
                </h2>
                <h2 className="d-inline-block">
                  <i className="bi bi-instagram"></i>
                </h2>
                <h2 className="d-inline-block">
                  <i className="bi bi-youtube"></i>
                </h2>
                <h2 className="d-inline-block">
                  <i className="bi bi-linkedin"></i>
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="footer-bottom">
          <div className="text-xs-center">
            &copy;{new Date().getFullYear()} Muhammad Usman
          </div>
        </div>
      </Container>

      {/* footer ends here  */}
    </>
  );
};

export default Header;
