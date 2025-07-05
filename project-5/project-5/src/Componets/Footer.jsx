import React from "react";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../assets/header-logo.png';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111", color: "#fff", marginTop: "-5px" }}>
      <Container className="py-5 mt-5">
        <Row className="mb-4">
          {/* Address */}
          <Col md={4} className="mb-4">
         <img src={logo} alt="Pizzon Logo" className="mb-3" style={{ height: "40px" }} />
            <p className="mb-3">
              20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK
              <br />
              6902JF Alexandria, United Kingdom
            </p>
            <p className="mb-3">
              <strong>PHONE:</strong>{" "}
              <a href="tel:+911234567890" className="text-white text-decoration-none">
                +91 123 456 7890
              </a>
              ,{" "}
              <a href="tel:+91123456789" className="text-white text-decoration-none">
                +91 123 456 789
              </a>
            </p>
            <p className="mb-0">
              <strong>EMAIL:</strong>{" "}
              <a href="mailto:info@gmail.com" className="text-white text-decoration-none">
                info@gmail.com
              </a>
            </p>
          </Col>

           {/* Opening Hours */}
           <Col md={4} className="mb-4">
                <h5 className="fw-bold mb-3">OPENING HOURS</h5>
                <ul className="list-unstyled">
                    <li className="mb-3">
                        Mon - Tues :
                        <span>  6.00 am - 10.00 pm</span>
                    </li>
                    <li className="mb-3">
                        Wednes - Thurs :
                        <span>  6.00 am - 10.00 pm</span>
                    </li>
                    <li className="mb-3">
                        Lunch :
                        <span>Lunch</span>
                    </li>
                    <li className="mb-3">
                        Sunday :
                        <span className="badge bg-warning text-dark px-2 mx-3">Closed</span>
                    </li>
                </ul>
           </Col>

          {/* Useful Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Order Tracking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Warranty and Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Wishlist
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-secondary" />

        <Row className="justify-content-between align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © Pizzon all Rights Reserved. Designed by{" "}
              <span className="text-warning">TemplatesCoder</span>
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="d-inline-flex gap-3">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
