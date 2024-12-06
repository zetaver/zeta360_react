import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../public/assets/images/slider_1.png";
import slider2 from "../../public/assets/images/slider_2.png";

const HomeSection = () => {
  return (
    <section id="home" className="top_section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Text and Buttons */}
          <div className="col-lg-6">
            <div className="slider_cont_section">
              <h4>Welcome</h4>
              <h3>AVALON</h3>
              <p>
                It is a long-established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="button_section">
                <a href="#" className="btn btn-primary">
                  Book Now
                </a>
                <a href="about.html" className="btn btn-outline-primary">
                  About Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Carousel */}
          <div className="col-lg-6">
            <Carousel>
              <Carousel.Item>
                <img src={slider1} alt="Slider 1" className="d-block w-100" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={slider1} alt="Slider 2" className="d-block w-100" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
