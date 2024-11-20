import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; 
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h2>SANDARSAKA</h2>
            
          </Col>
          <Col md={4} className="footer-section">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><NavLink to="/aboutus">AboutUs</NavLink></li>
              <li><a href="#">Services</a></li>
              
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: sandarsaka@gmail.com</p>
            <p>Phone: +917032786479</p>
            <div className="social-icons">
              <FaInstagram className="social-icon"/>
              <FaXTwitter className="social-icon"/>
              <FaFacebook className="social-iocn"/>
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
