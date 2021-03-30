import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container
      fluid
      className="text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "70vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://assets.website-files.com/60138cf950606122a5a97003/60138cf95060615487a97068_jimmy-dean-_GoBSreu1a4-unsplash-min.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <h5 className="text-success">Category</h5>
      <h1>Title of the Post</h1>
      <div className="row mb-3">
        <p className="mr-5">
          by <span className="text-success font-weight-bold">Author</span>
        </p>
        <p>Jan 23, 2021</p>
      </div>
      <div className="btn btn-success btn-lg">Read More ...</div>
    </Container>
  );
};

export default Header;
