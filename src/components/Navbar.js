import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
            <LinkContainer exact to="/posts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>

            {user ? (
              <NavDropdown
                title={user?.displayName}
                id="navbarScrollingDropdown"
              >
                {user.isAdmin && (
                  <>
                    <LinkContainer exact to="/add-blog">
                      <NavDropdown.Item>Add Blog</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer exact to="/add-category">
                      <NavDropdown.Item>Add Category</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                  </>
                )}
                <NavDropdown.Item onClick={() => auth.signOut()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
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
