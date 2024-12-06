import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import { useApiContext } from "../../context/ApiContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const { saveAuthData } = useApiContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError(null);

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await login({ email, password });

      if (response && response.data["token"] && response.data["role"]) {
        saveAuthData(response.data["token"], response.data["role"]);
        if (response.data["role"] === "admin") navigate("/admin");
        else if (response.data["role"] === "customer") navigate("/customer/dashboard");
        else if (response.data["role"] === "service_provider") navigate("/provider");
        else if (response.data["role"] === "supervisor") navigate("/supervisor");
        else navigate("/");
      } else {
        setError("Invalid login response. Please try again.");
      }
    } catch (err) {

      if (err.response && err.response.data) {
        setError(err.response.data.message || "Invalid email or password.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false); // Set loading to false after the request finishes
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Row className="w-100">
        <Col sm={12} md={6} lg={4} className="mx-auto">
          <div className="border p-4 rounded shadow-lg bg-white">
            <h2 className="text-center mb-4 text-primary">Login</h2>
            {error && <div className="text-danger mb-3">{error}</div>}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mb-3"
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mb-3"
                />
              </Form.Group>

              {/* Show a spinner if loading is true */}
              <Button
                variant="primary"
                type="submit"
                className="w-100 mb-3"
                disabled={loading}
              >
                {loading ? (
                  <Spinner
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Login"
                )}
              </Button>

              <div className="text-end mt-3">
                <a
                  href="#"
                  onClick={() => navigate("/forgot-password")}
                  className="text-decoration-none text-primary"
                >
                  Forgot Password?
                </a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
