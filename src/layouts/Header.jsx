import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../public/assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo and Title */}
        <div className="header-logo">
          <img src={logo} alt="Zeta360 Logo" className="logo" />
          <h1 className="site-title">Zeta360</h1>
          <p className="site-tagline">
            Your one-stop service platform connecting customers and service
            providers.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="navigation">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#roles">Roles</a>
            </li>
            <li>
              <Link to="#register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* Login and Signup Buttons */}
        <div className="auth-buttons">
          <Link to="/login">
            <Button variant="outline-primary" className="auth-button">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" className="auth-button">
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
