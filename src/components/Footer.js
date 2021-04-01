import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 bg-dark text-light">
      <Container>
        <Row>
          <Col sm={12} md={6} className="text-center mb-3 mx-auto">
            <h4 className="mb-4">Subscribe to our Newsletter</h4>
            <Form inline className="justify-content-center">
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
        </Row>
        <Row>
          <Col
            sm={12}
            md={3}
            className="mb-3 d-flex justify-content-between mx-auto"
          >
            <a
              className="text-white"
              target="blank"
              href="https://www.instagram.com/bhadgalsanchit7/"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
            <a
              className="text-white"
              target="blank"
              href="https://github.com/sanchit36"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a
              className="text-white"
              target="blank"
              href="https://www.linkedin.com/in/sanchit-bhadgal/"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
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
