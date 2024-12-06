import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../public/assets/images/slider_1.png";
import slider2 from "../../public/assets/images/slider_2.png";

const HomeSection = () => {
  return (
    <section id="home" className="top_section">
      <div className="row">
        <div className="col-lg-5">
          <div className="slider_cont_section">
            <h4>Welcome</h4>
            <h3>AVALON</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="button_section">
              <a href="#">Book Now</a>
              <a href="about.html">About Us</a>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <Carousel>
            <Carousel.Item>
              <img src={slider1} alt="Slider 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slider2} alt="Slider 2" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
