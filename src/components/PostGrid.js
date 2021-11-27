import React from "react";
import { Col, Row } from "react-bootstrap";
import PostItem from "./PostItem";

const PostGrid = ({ blogs }) => {
  return (
    <Row>
      {blogs.length === 0 && (
        <Col>
          <h4>Sorry, no blogs in this category</h4>
        </Col>
      )}
      {blogs.map((blog) => (
        <Col key={blog.id} xs={12} sm={12} md={6} lg={4}>
          <PostItem {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default PostGrid;
