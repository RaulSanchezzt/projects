import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCarousel;
