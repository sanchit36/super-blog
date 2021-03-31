import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 bg-dark text-light">
      <Container>
        <Row>
          <Col sm={12} md={6} className="text-md-left text-sm-center mb-sm-5">
            <h4 className="mb-4">Subscribe to our Newsletter</h4>
            <Form
              inline
              className="justify-content-md-start justify-content-sm-center"
            >
              <Form.Label htmlFor="email" srOnly>
                Email
              </Form.Label>
              <Form.Control
                className="mb-2 mr-sm-2"
                id="email"
                placeholder="Email"
              />
              <Button type="submit" variant="success" className="mb-2">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={12} md={3}>
            <ul className="list-unstyled text-md-right text-sm-center">
              <li className="mb-3">
                <Link className="text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link className="text-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="text-md-right text-sm-center">
            <p>My Company Name</p>
            <p>San Francisco, California</p>
            <p>Tel: (987) 654-3211</p>
            <p>info@superblog.com</p>
          </Col>
        </Row>
        <Row className="text-light justify-content-center">
          By Sanchit Bhadgal
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
