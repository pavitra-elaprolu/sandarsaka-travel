import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import flightsData from "../flights.json"; 
import Header from "../components/common/Header/Header.jsx";
import "../components/common/Header/Header.css"
import Footer from "../components/common/Footer/Footer.jsx";
import "../components/common/Footer/Footer.css"

const FlightBookingPage = () => {
  const navigate = useNavigate();
  const [flights] = useState(flightsData);
  const [searchCriteria, setSearchCriteria] = useState({
    departure: "",
    destination: "",
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  const filteredFlights = flights.filter((flight) =>
    flight.departure.toLowerCase().includes(searchCriteria.departure.toLowerCase()) &&
    flight.destination.toLowerCase().includes(searchCriteria.destination.toLowerCase())
  );

  const proceedToPayment = (flight) => {
    navigate("/payment", { state: { flight } });
  };

  return (
    <>
    <Header/>
    <Container className="mt-5">
      <h2 className="text-center mb-4">Available Flights</h2>
      
      {/* Search Form */}
      <Form className="mb-4">
        <Row>
          <Col md={6}>
            <Form.Group controlId="formDeparture">
              <Form.Label>Departure</Form.Label>
              <Form.Control
                type="text"
                name="departure"
                placeholder="Enter departure city"
                value={searchCriteria.departure}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDestination">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                name="destination"
                placeholder="Enter destination city"
                value={searchCriteria.destination}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Flight Cards */}
      <Row>
        {filteredFlights.map((flight) => (
          <Col md={6} lg={4} key={flight.id} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Header className="bg-primary text-white text-center">
                <h5 className="mb-0">{flight.flightName}</h5>
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <p className="mb-1"><strong>Departure:</strong> {flight.departure}</p>
                  <p className="mb-1"><strong>Destination:</strong> {flight.destination}</p>
                  <p className="mb-1"><strong>Departure Time:</strong> {flight.departureTime}</p>
                  <p className="mb-1"><strong>Arrival Time:</strong> {flight.arrivalTime}</p>
                </div>
                <div className="mt-auto">
                  <h5 className="text-center text-danger mb-3">Amount:{flight.amount} INR</h5>
                  <Button 
                    variant="primary" 
                    onClick={() => proceedToPayment(flight)} 
                    className="w-50">
                    Book Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default FlightBookingPage;
