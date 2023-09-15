import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <>
      <Carousel variant="dark">
      <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1694509970066_revisedbarbiedesktop.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1694686510636_wcmastercarddesktop.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        
      </Carousel>
      
    </>
  );
}

export default Slider;
