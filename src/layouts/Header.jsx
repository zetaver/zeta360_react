import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/assets/images/zetaver.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    console.log("Logout button clicked"); 
    localStorage.removeItem("token"); 
    setIsLoggedIn(false); 
    navigate("/"); 
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="Zeta360 Logo" className="logo" />
          <h1 className="site-title">Zeta360</h1>
        </div>
        <nav className="navigation">
          <ul>
            {!isLoggedIn ? (
              <li>
                <a href="#home" className="nav-link mt-2">
                  Home
                </a>
              </li>
            ) : (
              <>
                <li>
                  <a href="#service-providers" className="nav-link mt-2">
                    Service Providers
                  </a>
                </li>
                <li>
                  <a href="#looking-for-service" className="nav-link mt-2">
                    Looking for Service
                  </a>
                </li>
              </>
            )}
            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login">
                    <Button variant="outline-primary" className="auth-button">
                      Login
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <Button variant="primary" className="auth-button">
                      Signup
                    </Button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile">
                    <Button variant="secondary" className="auth-button">
                      Profile
                    </Button>
                  </Link>
                </li>
                <li>
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="auth-button"
                  >
                    Logout
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
