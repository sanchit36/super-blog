import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { firestore } from "../firebase/firebase.setup";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.collection("newsletter").add({
      email,
    });
    setEmail("");
  };

  return (
    <footer className="pt-5 pb-3 bg-dark text-light">
      <Container>
        <Row>
          <Col sm={12} md={6} className="text-center mb-3 mx-auto">
            <h4 className="mb-4">Subscribe to our Newsletter</h4>
            <Form
              onSubmit={handleSubmit}
              inline
              className="justify-content-center"
            >
              <Form.Label htmlFor="email" srOnly>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 mr-sm-2"
                id="email"
                placeholder="Email"
              />
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <a
            className="text-white"
            target="blank"
            href="https://www.instagram.com/bhadgalsanchit7/"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            className="text-white mx-4"
            target="blank"
            href="https://github.com/sanchit36"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            className="text-white"
            target="blank"
            href="https://www.linkedin.com/in/sanchit-bhadgal/"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </Row>
        <Row className="text-light justify-content-center">
          <p>By Sanchit Bhadgal</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
