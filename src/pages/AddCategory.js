import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Heading from "../components/Heading/Heading";
import CategoryContext from "../context/category/categoryContext";
import { firestore } from "../firebase/firebase.setup";

const AddCategory = () => {
  const { addCategory } = useContext(CategoryContext);
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && icon && slug) {
      const doc = await firestore.collection("categories").add({
        category,
        icon,
        slug,
      });

      addCategory({ id: doc.id, slug, category, icon });
      setCategory("");
      setSlug("");
      setIcon("");
    }
  };

  return (
    <React.Fragment>
      <Container className="my-5">
        <Heading heading="Add Category for Blog" />
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Enter Category"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Slug</Form.Label>
            <Form.Control
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              type="text"
              placeholder="Enter slug"
              required
            />
          </Form.Group>
          <Form.Group>
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
