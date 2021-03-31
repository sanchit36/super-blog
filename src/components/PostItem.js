import React from "react";
import { Card, Button } from "react-bootstrap";

const PostItem = () => {
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/collection/190727/800x450"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PostItem;
