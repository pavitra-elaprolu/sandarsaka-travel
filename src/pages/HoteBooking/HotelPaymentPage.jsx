import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";  // Import SweetAlert2


const HotelPaymentPage = () => {
  const location = useLocation();
  const navigate= useNavigate();
  const { hotel } = location.state || {}; // Get the hotel data from location state

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const handlePayment = (event) => {
    event.preventDefault();

    // Mock payment process
    Swal.fire({
      title: 'Payment Successful!',
      text: `Payment successful for ${hotel.name}. Cardholder: ${cardDetails.cardHolderName}. Amount: ${hotel.price} INR`,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
        navigate("/")
    });
  };

  const handleChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  if (!hotel) {
    return <h2>No hotel selected.</h2>;
  }

  return (
    <Container className="payment-container mt-5">
      <Card className="payment-card p-4 shadow-sm">
        <h2 className="text-center mb-4">Payment Information</h2>
        <p className="text-center mb-4">
          You are booking hotel <strong>{hotel.name}</strong> in{" "}
          <strong>{hotel.location}</strong> for{" "}
          <strong>{hotel.price} INR</strong> per night.
        </p>

        <Form onSubmit={handlePayment}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  placeholder="Enter your card number"
                  value={cardDetails.cardNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formExpiryDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={cardDetails.expiryDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formCvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  name="cvv"
                  placeholder="Enter CVV"
                  value={cardDetails.cvv}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formCardHolderName">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control
                  type="text"
                  name="cardHolderName"
                  placeholder="Enter the name on your card"
                  value={cardDetails.cardHolderName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="success" type="submit" className="w-100">
            Make Payment
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default HotelPaymentPage;
