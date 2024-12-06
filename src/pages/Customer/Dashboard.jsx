import React, { useState } from "react";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Dropdown } from "react-bootstrap"; // Import Dropdown from react-bootstrap

function Dashboard() {
  const [form, setForm] = useState({ title: "", description: "", image: null });
  const [serviceRequestSubmitted, setServiceRequestSubmitted] = useState(false);

  const services = [
    {
      id: 1,
      name: "Home Cleaning",
      status: "scheduled",
      date: "2024-03-15",
      time: "14:00",
      provider: "Clean Pro Services",
    },
    {
      id: 2,
      name: "Plumbing Repair",
      status: "completed",
      date: "2024-03-10",
      time: "10:30",
      provider: "Quick Fix Plumbing",
    },
    {
      id: 3,
      name: "Electrical Work",
      status: "pending",
      date: "2024-03-20",
      time: "09:00",
      provider: "PowerTech Solutions",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "scheduled":
        return <Clock className="h-5 w-5 text-primary" />;
      case "completed":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "pending":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate service request submission
    setServiceRequestSubmitted(true);
    setTimeout(() => setServiceRequestSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Customer Dashboard</h1>

      {/* Navbar with Service Providers */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#">
          Customer Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {services.map((service) => (
              <li className="nav-item" key={service.id}>
                <a className="nav-link" href="#">
                  {service.provider}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Service Request Form */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-light">
          <h2 className="h5 mb-0">Post Service Request</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Service Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="3"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Service Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                onChange={handleImageChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {serviceRequestSubmitted ? "Request Submitted" : "Submit Request"}
            </button>
          </form>
        </div>
      </div>

      {/* Recent Services Section */}
      <div className="card shadow-sm">
        <div className="card-header bg-light">
          <h2 className="h5 mb-0">Recent Services</h2>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {services.map((service) => (
              <li
                key={service.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  {getStatusIcon(service.status)}
                  <div className="ms-3">
                    <h5 className="mb-1">{service.name}</h5>
                    <p className="mb-0 text-muted">
                      {service.provider} • {service.date} at {service.time}
                    </p>
                  </div>
                </div>
                <span
                  className={`badge rounded-pill ${
                    {
                      scheduled: "bg-primary text-white",
                      completed: "bg-success text-white",
                      pending: "bg-warning text-dark",
                    }[service.status]
                  }`}
                >
                  {service.status.charAt(0).toUpperCase() +
                    service.status.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
