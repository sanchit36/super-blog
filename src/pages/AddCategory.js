import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Heading from "../components/Heading/Heading";
import { firestore } from "../firebase/firebase.setup";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && icon) {
      firestore.collection("categories").add({
        category,
        icon,
      });
      setCategory("");
      setIcon("");
    }
  };

  return (
    <React.Fragment>
      <Container className="my-5">
        <Heading heading="Add Category for Blog" />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Enter Category"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Icon</Form.Label>
            <Form.Control
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              type="text"
              placeholder="Enter Icon"
              required
            />
            <Form.Text className="text-muted">
              Enter a font awesome icon
            </Form.Text>
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default AddCategory;
