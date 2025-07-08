import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaHome, FaEnvelope, FaRegClock } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import banner from "../assets/banner.jpg";
import './ContactCard.css';


const ContactCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* === Hero Banner === */}

      <div
        className="contact-banner text-center text-white mt-0 dark-overlay"
          
        style={{
          backgroundImage:`url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
           backgroundBlendMode: "multiply",
          width: "100vw",
          height: "400px",
          marginLeft: "calc(-50vw + 50%)",
          minHeight: "400px",
          paddingTop: "100px",
          paddingBottom: "100px",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 1,
        }}>
        

<h1 className="banner-title display-3 fw-bold mt-5">Contact Us</h1>
        <p className="lead">Home / Contact</p>
      </div>
          <div style={{
         width: "100vw",
          height: "400px",
          marginLeft: "calc(-50vw + 50%)",
          minHeight: "400px",
          paddingTop: "100px",
          paddingBottom: "100px",
          position:"relative",
          zIndex: 1,
      }}>
 </div>


      {/* === Contact Section === */}
      <Container className="my-5 ">
        <Row className="justify-content-center align-items-start">
          <h5 className="get-in-touch-text mt-3">Get in touch</h5>
          <h1 className="fw-bold display-5 text-uppercase mb-2">Contact Us</h1>
</Row>
</Container>

  
          {/* Left Column */}
          <Container  className="px-5">
            <Row className="gx-5">
           <Col md={5} className="mb-5 slide-in-left">
            <h5 className="contact-heading mb-3 left-shift">Contact Details</h5>
            <p className="text-muted mb-4">
              There are many variations of passages of Lorem Ipsum available, but the<br/>majority have suffered alteration in some form, by injected humour, or<br/> randomised words which don't look even slightly believable.
            </p>

            <div className="d-flex align-items-start mb-3">
              <FaHome className="me-3 mt-1 icon-style" />
              <div>55 Drumduan Ave, Carlisle CA5 0PD, UK</div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <IoCall className="me-3 mt-1 icon-style" />
              <div className="hover-orange">+91 123 456 7890 , +91 123 456 789</div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <FaEnvelope className="me-3 mt-1 icon-style" />
              <div className="hover-orange">info@gmail.com</div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <FaRegClock className="me-3 mt-1 icon-style" />
              <div>
                Monday – Friday: 10 am – 10 pm
                <br />
                Sunday: 11 am – 9 pm
              </div>
            </div>
          </Col>

          {/* Right Column (Form) */}
           <Col md={7} className="slide-in-right ">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={12} className="mb-3 mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="rounded-0"
                    required
                  />
                </Col>

                <Col md={12} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="rounded-0"
                    required
                  />
                </Col>

                <Col md={12} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    className="rounded-0"
                    required
                  />
                </Col>

                <Col md={12} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="rounded-0"
                    required
                  />
                </Col>

                <Col md={12} className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    className="rounded-0"
                    required
                  />
                </Col>

                <Col md={12}>
                  <Button type="submit" className="send-button w-100 rounded-pill px-3 py-3 mb-5"> SEND MESSAGE</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>  
 


      {/* === Map Section === */}
      <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", }} className="contact-map mb-0 pb-0 mt-3">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.434258373593!2d-2.941867384347394!3d54.91103516253668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c88332964ed69%3A0x447aa2a4fd1e55d4!2sEmma%20Ewing%20Estate%20Agency!5e0!3m2!1sen!2sin!4v1720188697234!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactCard;
