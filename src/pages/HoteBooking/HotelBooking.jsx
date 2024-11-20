import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Carousel } from 'react-responsive-carousel';
import hotelData from "./HotelData.json";
import "./HotelBooking.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const HotelBookingPage = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setHotels(hotelData);
  }, []);

  const handleImageClick = (hotel) => {
    setSelectedHotel(hotel);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHotel(null);
  };

  
  const handleBookNow = (hotel) => {
    navigate("/hotel-booking-form", { state: { hotel } });
  };

  return (
    <Container className="hotel-booking-container mt-5">
      <h2 className="mb-4 fs-1">Book your favourite hotel now</h2>
      <div className="hotel-cards-container">
        <Row className="flex-nowrap">
          {hotels.map((hotel) => (
            <Col xs={12} sm={6} md={4} key={hotel.id} className="mb-4">
              <Card className="hotel-card">
                <Card.Img
                  className="hotel-image"
                  variant="top"
                  src={hotel.image}
                  alt={hotel.name}
                  onClick={() => handleImageClick(hotel)}
                />
                <Card.Body>
                  <Card.Title>{hotel.name}</Card.Title>
                  <Card.Text>
                    Location: {hotel.location}
                    <br />
                    Price per night: ${hotel.price}
                  </Card.Text>
                  <Button
                    className="primaryBtn"
                    onClick={() => handleBookNow(hotel)} // Handle Book Now click
                  >
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {selectedHotel && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedHotel.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              {selectedHotel.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default HotelBookingPage;
