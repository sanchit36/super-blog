import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Heading from "../components/Heading/Heading";
import firebase, { firestore, storage } from "../firebase/firebase.setup";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState("Upload");

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
          published: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTitle("");
        setSlug("");
        setContent("");
      }
    );
  };

  return (
    <Container className="mt-3">
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
        <Form.Group>
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
