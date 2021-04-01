import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "../context/user/UserContext";
import { auth, signInWithGoogle } from "../firebase/firebase.setup";

const NavbarComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <Navbar className="shadow" bg="light" expand="lg">
      <Container>
        <LinkContainer exact to="/">
          <Navbar.Brand>Super Blog</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            {user?.uid === "bTZxBs7QqreufIgD9MIxhkITiit1" ? (
              <>
                <LinkContainer exact to="/add-category">
                  <Nav.Link>Add Category</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/add-blog">
                  <Nav.Link>Add Blog</Nav.Link>
                </LinkContainer>
              </>
            ) : null}

            {user ? (
              <Nav.Link onClick={() => auth.signOut()}>Logout</Nav.Link>
            ) : (
              <Nav.Link onClick={signInWithGoogle}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
