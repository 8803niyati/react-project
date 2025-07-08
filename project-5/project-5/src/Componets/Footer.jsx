
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import footer from '../assets/header-logo.png';
import { Container } from 'react-bootstrap';
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
     
       className="footer text-white pt-5 mt-0"
  style={{
    backgroundColor: "#111",
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    marginBottom: "0px",      
    paddingBottom: "0px"   
  }}
    >
      <Container style={{ maxWidth: '1200px' }}>
        {/* Top Footer */}
        <div className="footer-container d-flex flex-wrap justify-content-between">
          {/* Column 1 */}
          <div className="footer-col mb-4">
            <div className="footer-logo mb-3">
              <img src={footer} alt="footer logo" style={{ height: "50px" }} />
            </div>
            <p>20 Carrochan Rd, Balloch, Alexandria G83 8EG,UK<br />
              69QJ+2F Alexandria, United Kingdom</p>
            <p>PHONE<span>+91 123 456 789 0</span>, <span>+91 123 456 789 0</span></p>
            <p>EMAIL-<span>info@gmail.com</span></p>
          </div>

          {/* Column 2 */}
          <div className="footer-col mb-4">
            <h5 className="mb-5">OPENING HOURS</h5>
            <p>Mon - Tues : <span>6.00 am - 10.00 pm</span></p>
            <p>Wednes - Thurs : <span>6.00 am - 10.00 pm</span></p>
            <p>Launch : <span>Everyday</span></p>
              <p> Sunday : <span className="footer-closed-badge">Closed</span></p>
          </div> 
            

          {/* Column 3 */}
          <div className="footer-col mb-4">
            <h5 className="mb-3">USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li className="mt-0">Privacy Policy</li>
              <li>Order Tracking</li>
              <li>Warranty and Services</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Wishlist</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center pt-4 border-top border-secondary mt-4">
          <p className="mb-5">© Pizzon all Rights Reserved. Designed by <span className="text-warning">TemplatesCoder</span></p>
          <div className="social-icons d-flex gap-3 mb-5">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

      
      </Container>
    </footer>
  );
};

export default Footer;

