import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';
import Header from '../common/Header/Header';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className="about-us-section">
      <Container>
        {/* Hero Section */}
        <Row className="hero-section text-center">
          <Col>
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              Welcome to <strong>Sandarsaka</strong>! 🌍✈️
            </p>
            <p>
              Travel with us to create unforgettable memories and explore the world like never before.
            </p>
          </Col>
        </Row>

        {/* Our Story Section */}
        <Row className="mt-5 story-section">
          <Col>
            <h2 className="text-center section-title">Our Story</h2>
            <p className="text-center story-text">
              Founded in 2024, Sandarsaka was born out of a passion for travel and adventure. Our mission is to make the world more accessible, allowing you to explore new places with ease and confidence. Whether it's a family vacation, solo adventure, or business trip, we're here to help you create unforgettable experiences.
            </p>
          </Col>
        </Row>

        {/* Founder Section */}
        <Row className="mt-5 text-center founder-section">
          <Col>
            <h2 className="text-center section-title">Meet Our Founder</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Founder"
              className="founder-img mb-3"
            />
            <h5 className="founder-name">Vijay Varma</h5>
            <p className="founder-title">Founder</p>
            <p className="founder-text">
              Vijay Varma started Sandarsaka with a simple belief: travel should be seamless and enriching. His dedication to innovation and customer service has shaped the way we approach travel, making Sandarsaka a trusted name in the industry.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default AboutUs;
