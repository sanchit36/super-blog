import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const PostItem = ({ title, slug, content, img_url, published }) => {
  return (
    <Card className="my-4">
      <Link to={`/blog/${slug}`}>
        <Card.Img variant="top" src={img_url} />
      </Link>
      <Card.Body className="text-center">
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>
          {content.length > 30 ? content.slice(0, 30) : content}
        </Card.Text>
        <Link to={`/blog/${slug}`} className="btn btn-success text-white">
          Read More...
        </Link>
      </Card.Body>
      <Card.Footer>
        <Moment fromNow ago>
          {published.toDate()}
        </Moment>{" "}
        ago
      </Card.Footer>
    </Card>
  );
};

export default PostItem;
