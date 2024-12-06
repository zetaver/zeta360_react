import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can add the logic to submit the form here, like using an API
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full center">
            <h2 className="heading_main orange_heading">Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="full">
            <div className="contact_form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="full">
            <div className="contact_info">
              <h4>Address:</h4>
              <p>1234 Street, City, Country</p>
              <h4>Phone:</h4>
              <p>987-654-3210</p>
              <h4>Email:</h4>
              <p>demo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
