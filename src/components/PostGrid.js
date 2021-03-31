import React from "react";
import { Col, Row } from "react-bootstrap";
import PostItem from "./PostItem";

const PostGrid = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={4}>
        <PostItem />
      </Col>
      <Col xs={12} sm={12} md={6} lg={4}>
        <PostItem />
      </Col>
      <Col xs={12} sm={12} md={6} lg={4}>
        <PostItem />
      </Col>
      <Col xs={12} sm={12} md={6} lg={4}>
        <PostItem />
      </Col>
      <Col xs={12} sm={12} md={6} lg={4}>
        <PostItem />
      </Col>
    </Row>
  );
};

export default PostGrid;
