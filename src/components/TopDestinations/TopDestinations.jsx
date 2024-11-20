import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import topDestinations from "./TopDestinations.json";
import "./TopDestinations.css";
import { NavLink } from "react-router-dom";

const TopDestinations = () => {
  return (
    <Container className="mt-5">
      <h2 className=" title mb-4 mt-4">Top Destinations For Your Next Vacation</h2>
      <Row>
        {topDestinations.map((destination) => (
          <Col md={6} lg={4} key={destination.id} className="mb-4">
            <Card className="shadow-sm h-100">
              
              <Card.Img
                variant="top"
                src={destination.image}
                alt={destination.name}
                className="destinationImage"
                loading="lazy"
              />
              
              <Card.Title className="card-title">
                {destination.name}
              </Card.Title>
              <Card.Body>
                <Card.Text>{destination.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopDestinations;
