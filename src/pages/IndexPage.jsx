import React from "react";
import Slider from "react-slick"; // Import Slider component
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AboutUs from "../components/AboutUs";
import image1 from "../../public/assets/images/ser.jpg";

// Slick settings for the image slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const IndexPage = () => {
  return (
    <div>
      <Header />

      {/* Hero Section with Image Slider */}
      <section className="hero">
        <div className="slider-container">
          <Slider {...sliderSettings}>
            <div className="slide">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZXN8ZW58MHx8MHx8fDA%3D"
                alt="Slide 1"
              />
            </div>
            <div className="slide">
              <img
                src="https://plus.unsplash.com/premium_photo-1673208585690-fe33159386bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D"
                alt="Slide 2"
              />
            </div>
            <div className="slide">
              <img
                src=""
                alt="Slide 3"

              />
            </div>
          </Slider>
        </div>
        <div className="hero-content">
          <h2>Find Services or Become a Service Provider!</h2>
          <p>
            Zeta360 connects customers with skilled service providers for all
            your needs.
          </p>
          <a href="#register" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      <AboutUs />

      {/* Roles Section */}
      <section id="roles" className="roles">
        <div className="container">
          <h2>Our Roles</h2>
          <div className="role">
            <h3>Customer</h3>
            <p>
              As a customer, you can register, browse services, and hire
              providers for various tasks. Get started by creating an account
              and exploring the services offered by skilled providers.
            </p>
          </div>
          <div className="role">
            <h3>Service Provider</h3>
            <p>
              Service providers can register to offer their expertise in various
              fields. Whether you're a plumber, tutor, or web developer, you can
              showcase your services and start getting hired.
            </p>
          </div>
          <div className="role">
            <h3>Admin</h3>
            <p>
              As an admin, you will manage the platform, oversee services,
              monitor user activity, and ensure smooth operation of the
              platform. Admins have full control of the system.
            </p>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="register">
        <div className="container">
          <h2>Register Today</h2>
          <p>
            Get started with Zeta360 today as a customer or service provider.
          </p>
          <div className="buttons">
            <a href="/register-customer" className="cta-button">
              Register as Customer
            </a>
            <a href="/register-provider" className="cta-button">
              Register as Service Provider
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndexPage;
