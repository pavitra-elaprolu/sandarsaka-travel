import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const HotelBookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state || {}; // Get the hotel data from location state

  const [bookingDetails, setBookingDetails] = useState({
    nights: 1,
    guests: 1,
    checkInDate: "",
  });

  const handleChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Redirect to payment page with hotel and booking details
    navigate("/hotel-payment", { state: { hotel, bookingDetails } });
  };

  if (!hotel) {
    return <h2>No hotel selected.</h2>;
  }

  return (
    <Container className="mt-5">
      <h2>Book Hotel: {hotel.name}</h2>
      <Form onSubmit={handleBooking}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formNights">
              <Form.Label>Number of Nights</Form.Label>
              <Form.Control
                type="number"
                name="nights"
                value={bookingDetails.nights}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGuests">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control
                type="number"
                name="guests"
                value={bookingDetails.guests}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formCheckInDate">
          <Form.Label>Check-in Date</Form.Label>
          <Form.Control
            type="date"
            name="checkInDate"
            value={bookingDetails.checkInDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Proceed to Payment
        </Button>
      </Form>
    </Container>
  );
};

export default HotelBookingForm;
