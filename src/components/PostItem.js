import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const PostItem = ({ title, slug, content, img_url, published }) => {
  return (
    <Card className="mb-4" style={{ height: "100%" }}>
      <Link to={`/blog/${slug}`}>
        <Card.Img variant="top" src={img_url} height="220" />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text style={{ flex: 1, margin: 0 }}>
          {content.length > 90 ? `${content.slice(0, 90)}...` : content}
        </Card.Text>
        <Link to={`/blog/${slug}`} className="btn btn-success text-white">
          Read More
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
