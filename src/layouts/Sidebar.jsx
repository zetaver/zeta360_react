import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav id="sidebar">
        <div id="dismiss">
          <i className="fa fa-arrow-left"></i>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#why_choose_us">Why Choose Us</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
