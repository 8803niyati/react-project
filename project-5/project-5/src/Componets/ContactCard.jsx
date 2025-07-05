import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaHome, FaEnvelope, FaRegClock } from "react-icons/fa";

import { IoCall } from "react-icons/io5";

const ContactCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
     <>

     

  {/* === Banner Section === */}
     <div className="contact-banner text-white text-center d-flex flex-column justify-content-center align-items-center" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <h1 className="display-4 fw-bold">Contact Us</h1>
      <p className="lead">Home / Contact Us</p>
     
 
     </div>
     {/* contact section */}
      <Row className="justify-content-center align-items-start">

        <h5 className="get-in-touch-text mt-5">Get in touch</h5>
        <h1 className="fw-bold display-5 text-uppercase mb-5">Contact Us</h1>


{/* Left: Contact Details */}
        <Col md={5} className="mb-5  slide-in-left">
         <h5 className="contact-heading mb-3">Contact Details</h5>

     <p className="text-muted mb-4">
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
  </p>

  <div className="d-flex align-items-start mb-3">
    <FaHome className="me-3 mt-1 icon-style" />
    <div>55 Drumduan Ave, Carlisle CA5 0PD, UK</div>
  </div>

  <div className="d-flex align-items-start mb-3">
    <IoCall className="me-3 mt-1 icon-style" />
    <div>+91 123 456 7890 , +91 123 456 789</div>
  </div>

  <div className="d-flex align-items-start mb-3">
    <FaEnvelope className="me-3 mt-1 icon-style" />
    <div>info@gmail.com</div>
  </div>

  <div className="d-flex align-items-start mb-3">
    <FaRegClock className="me-3 mt-1 icon-style" />
    <div>
      Monday – Friday: 10 am – 10 pm<br />
      Sunday: 11 am – 9 pm
    </div>
  </div>
</Col>


        {/* Right: Form */}
        <Col md={7}className="slide-in-right">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12} className="mb-3 mt-5">
                <Form.Control type="email" placeholder="Email" className="rounded-0" required />
              </Col>

              <Col md={12} className="mb-3">
                <Form.Control type="text" placeholder="Subject" className="rounded-0" required />
              </Col>

              <Col md={12} className="mb-3">
                <Form.Control type="text" placeholder="Phone" className="rounded-0" required />
              </Col>

              <Col md={12} className="mb-3">
                <Form.Control type="text" placeholder="Name" className="rounded-0" required />
              </Col>

              <Col md={12} className="mb-4">
                <Form.Control as="textarea" rows={5} placeholder="Message" className="rounded-0" required />
              </Col>

              <Col md={12}>
               
                <Button type="submit"className="send-button w-100 rounded-pill px-2 py-2">SEND MESSAGE</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
 
     {/* map */}
    <div
  style={{  width: "100vw", marginLeft: "calc(-50vw + 50%)" }} className="my-5 mt-5" >
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

