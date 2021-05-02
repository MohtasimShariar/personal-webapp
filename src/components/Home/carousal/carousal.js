import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../../assets/img/carousal/slide1.webp";
import Slide2 from "../../../assets/img/carousal/slide2.webp";
import Slide3 from "../../../assets/img/carousal/slide3.webp";
import "./carousal.css";

const Carousal = () => {
  return (
    <div id="home" className="container mt-5">
        <h1> Project Show </h1>
        <hr />
        <br/>

      <Carousel controls={false} indicators interval={2500} pause={false}>
        
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
};

export default Carousal;
