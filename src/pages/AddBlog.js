import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Heading from "../components/Heading/Heading";
import CategoryContext from "../context/category/categoryContext";
import firebase, { firestore, storage } from "../firebase/firebase.setup";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState("Upload");

  const { categories } = useContext(CategoryContext);

  const fileSelectedHandler = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const fileUploadHandler = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    setUploading("Uploading...");
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      async () => {
        const url = await storage
          .ref("images")
          .child(file.name)
          .getDownloadURL();
        setUploading("Uploaded");
        firestore.collection("blogs").add({
          title,
          slug,
          content,
          img_url: url,
          author,
          category,
          published: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTitle("");
        setSlug("");
        setContent("");
        setAuthor("");
        setCategory("");
      }
    );
  };

  return (
    <Container className="mt-3 mb-5">
      <Heading heading="Create Blog" />
      <Form onSubmit={fileUploadHandler}>
        <Form.Group controlId="Form.title">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Blog Title"
            required
          />
        </Form.Group>
        <Form.Group controlId="Form.author">
          <Form.Label>Blog Author</Form.Label>
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Blog Author"
            required
          />
        </Form.Group>
        <Form.Group controlId="Form.slug">
          <Form.Label>Blog Slug</Form.Label>
          <Form.Control
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            type="text"
            placeholder="Blog Slug"
            required
          />
        </Form.Group>
        <Form.Group controlId="Form.category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            as="select"
            className="my-1 mr-sm-2"
            custom
          >
            {categories.map((cat) => (
              <option key={cat.category} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Form.image">
          <Form.File
            id="Form.image"
            label="Featured Image"
            onChange={fileSelectedHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="Form.content">
          <Form.Label>Blog Content</Form.Label>
          <Form.Control
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog Content"
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>
        <Button type="submit" variant="dark">
          {uploading}
        </Button>
      </Form>
    </Container>
  );
};

export default AddBlog;
