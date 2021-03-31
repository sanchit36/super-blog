import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostItem = ({ title, slug, content, img_url, published }) => {
  return (
    <Card className="text-center my-4">
      <Link to={`/${slug}`}>
        <Card.Img variant="top" src={img_url} />
      </Link>
      <Card.Body>
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>
          {content.length > 30 ? content.slice(0, 30) : content}
        </Card.Text>
        <Link to={`/${slug}`} className="btn btn-success text-white">
          Read More...
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostItem;
