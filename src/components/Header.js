import React from "react";
import { Container } from "react-bootstrap";

const Header = ({ width, height, backgroundImage, children }) => {
  return (
    <Container
      fluid
      className="text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        width: width,
        height: height,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), ${backgroundImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {children}
    </Container>
  );
};

export default Header;
