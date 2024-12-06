import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Resetting password for:", email);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100">
        <Col sm={12} md={8} lg={6} className="mx-auto">
          <div className="border p-4 rounded shadow-lg bg-white">
            <h2 className="text-center mb-4 text-primary">Forgot Password</h2>
            <Form onSubmit={handleReset}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-radius-10"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-3 py-2 rounded-pill"
              >
                Reset Password
              </Button>
            </Form>

            <div className="d-flex justify-content-center mt-3">
              <span>
                Remembered your password?{" "}
                <Link to="/login" className="text-primary fw-bold">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordPage;
