import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import UserContext from "../context/user/UserContext";
import firebase, { firestore } from "../firebase/firebase.setup";

const CommentForm = ({ blogId }) => {
  const { user } = useContext(UserContext);
  const [content, setContent] = useState("");

  const submitFrom = (e) => {
    e.preventDefault();
    if (blogId) {
      firestore.collection("blogs").doc(blogId).collection("comments").add({
        author: user.displayName,
        img_url: user.photoURL,
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setContent("");
    }
  };

  return (
    <Form onSubmit={submitFrom} className="my-3">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add comment</Form.Label>
        <Form.Control
          value={content}
          onChange={(e) => setContent(e.target.value)}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Comment
      </Button>
    </Form>
  );
};

export default CommentForm;
