import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { register, fetchRoles } from "../../services/api";

const SignupPage = () => {
  const [roles, setRoles] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getRoles = async () => {
      try {
        const response = await fetchRoles();
        setRoles(response.data);
      } catch (err) {
        setError("Failed to load roles. Please try again.");
      }
    };
    getRoles();
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!selectedRole) {
      setError("Please select a role.");
      return;
    }

    try {
      const response = await register({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
        role: selectedRole,
      });

      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during signup."
      );
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100">
        <Col sm={12} md={8} lg={6} className="mx-auto">
          <div className="border p-4 rounded shadow-lg bg-white">
            <h2 className="text-center mb-4 text-primary">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">Signup successful! Redirecting...</Alert>
            )}
            <Form onSubmit={handleSignup}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-radius-10"
                />
              </Form.Group>

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

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-radius-10"
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="border-radius-10"
                />
              </Form.Group>

              <Form.Group controlId="formRole" className="mb-3">
                <Form.Label>Select Role</Form.Label>
                <Form.Select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                  className="border-radius-10"
                >
                  <option value="">Choose a role...</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-3 py-2 rounded-pill"
              >
                Sign Up
              </Button>
            </Form>

            <div className="d-flex justify-content-center mt-3">
              <span>
                Already have an account?{" "}
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

export default SignupPage;
