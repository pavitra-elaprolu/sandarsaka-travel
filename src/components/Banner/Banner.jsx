import React from 'react'
import { Carousel } from 'react-bootstrap';
import sliderImage1 from "../../assests/images/slides/3.jpg"
import sliderImage2 from "../../assests/images/slides/4.jpg"
import "./Banner.css";

const Banner=()=>{
    return(
        <>
        <section className="slider">
        <Carousel variant="dark" className="carousel">
      <Carousel.Item>
        <img src={sliderImage1} className="slider-image d-block w-100" alt="First slide"/>
        <Carousel.Caption>
        <div className="slider-text">
            <h2 className="heading">Find yourself in places your high school geography teacher never mentioned</h2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sliderImage2} className="d-block w-100" alt="First slide"/>
        <Carousel.Caption>
          <div className="slider-text">
            <h2 className="heading">Visit places that make your friends ask, 'Is that even real?</h2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>  
        </section>
        </>
    )
}
export default Banner;
