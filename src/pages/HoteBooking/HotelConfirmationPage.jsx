import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const HotelConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel, bookingDetails } = location.state || {};

  const handleReturnHome = () => {
    navigate("/");
  };

  if (!hotel || !bookingDetails) {
    return <h2>No booking details available.</h2>;
  }

  return (
    <Container className="mt-5 text-center">
      <h2>Thank you for your booking!</h2>
      <p>Your booking at {hotel.name} has been confirmed.</p>
      <p>
        You booked {bookingDetails.nights} night(s) for {bookingDetails.guests}{" "}
        guest(s).
      </p>
      <Button variant="primary" onClick={handleReturnHome}>
        Return to Home
      </Button>
    </Container>
  );
};

export default HotelConfirmationPage;
