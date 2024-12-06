import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Spinner, Card, Col, Row } from "react-bootstrap";
import { getProfile, updateProfile } from "../../services/api";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { setKey, setDefaults } from "react-geocode";
import "react-phone-number-input/style.css";
import { useDropzone } from "react-dropzone";
import Header from "../../layouts/Header";

// Set default settings for geocoding
setDefaults({
  key: "AIzaSyANknUQVh3DDInGVZxKpCF413Itn74fyK0",
  language: "en",
  region: "es",
});

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    location: "",
    address: "",
    phone: "",
    country: "",
    city: "",
    image: "",
  });

  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryOptions = response.data.map((country) => ({
          label: country.name.common,
          value: country.cca2,
        }));
        setCountries(countryOptions);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await getProfile();
        const user = response.data.user;
        setProfile({
          name: user.name || "",
          email: user.email || "",
          location: user.location || "",
          address: user.address || "",
          phone: user.phone || "",
          country: user.country || "Not provided",
          city: user.city || "Not provided",
          image: user.image || "",
        });
        setUpdatedProfile({ ...user });

        if (!user.location || !user.phone || !user.city || !user.country) {
          setShowModal(true);
        }
      } catch (error) {
        setError("Error fetching profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (selectedOption) => {
    setUpdatedProfile((prev) => ({ ...prev, country: selectedOption.value }));
  };

  const handlePhoneChange = (value) => {
    setUpdatedProfile((prev) => ({ ...prev, phone: value }));
  };

  const handleProfileSubmit = async () => {
    setLoading(true);
    try {
      const response = await updateProfile(updatedProfile);
      setProfile(response.data);
      setShowModal(false);
    } catch (error) {
      setError("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAddressFromCoords = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyANknUQVh3DDInGVZxKpCF413Itn74fyK0`
      );
      if (response.data.results.length > 0) {
        const address = response.data.results[0].formatted_address;
        const components = response.data.results[0].address_components;

        let city = "";
        let country = "";

        components.forEach((component) => {
          if (component.types.includes("locality")) {
            city = component.long_name;
          }
          if (component.types.includes("country")) {
            country = component.long_name;
          }
        });

        setUpdatedProfile((prev) => ({
          ...prev,
          location: JSON.stringify({ latitude, longitude }),
          address: address,
          city: city || "Not provided",
          country: country || "Not provided",
        }));
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleImageChange = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFile(URL.createObjectURL(file));
      setUpdatedProfile((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleImageChange,
    accept: "image/*",
  });

  return (
    <div>
      <Header/>
      <h1 className="text-center mb-4">Profile</h1>
      {error && <div className="text-danger text-center">{error}</div>}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Card className="shadow-lg rounded-3 w-100">
          <Card.Body>
            <Row>
              <Col md={4} className="text-center">
                <div
                  {...getRootProps()}
                  className="upload-area border rounded-circle p-3 mb-3"
                  style={{ cursor: "pointer" }}
                >
                  <input {...getInputProps()} />
                  {file ? (
                    <img
                      src={file}
                      alt="Profile"
                      className="rounded-circle"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <p>Click to upload profile image</p>
                  )}
                </div>
              </Col>
              <Col md={8}>
                <p>
                  <strong>Name:</strong> {profile["name"]}
                </p>
                <p>
                  <strong>Email:</strong> {profile["email"]}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {profile["address"] || "Not provided"}
                </p>
                <p>
                  <strong>Phone:</strong> {profile["phone"] || "Not provided"}
                </p>
                <p>
                  <strong>Country:</strong>{" "}
                  {profile["country"] || "Not provided"}
                </p>
                <p>
                  <strong>City:</strong> {profile["city"] || "Not provided"}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={updatedProfile["name"]}
                onChange={handleProfileChange}
                className="form-control-lg w-100"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={updatedProfile["email"]}
                onChange={handleProfileChange}
                className="form-control-lg w-100"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <PhoneInput
                international
                defaultCountry="US"
                value={updatedProfile["phone"]}
                onChange={handlePhoneChange}
                className="form-control-lg w-100"
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={updatedProfile["address"]}
                onChange={handleProfileChange}
                className="form-control-lg w-100"
                placeholder="Enter your address"
              />
            </Form.Group>
            <Button
              onClick={() =>
                navigator.geolocation.getCurrentPosition((position) => {
                  const { latitude, longitude } = position.coords;
                  fetchAddressFromCoords(latitude, longitude);
                })
              }
              variant="outline-primary"
              className="mt-2 w-100"
            >
              Use My Location
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProfileSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
