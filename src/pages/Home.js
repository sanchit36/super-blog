import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import CategoryLabel from "../components/CategoryLabel";
import Header from "../components/Header";
import Heading from "../components/Heading/Heading";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <div className="d-flex my-5">
          <CategoryLabel icon="fas fa-user" category="Life Style" />
          <CategoryLabel icon="fas fa-book" category="Guide" />
          <CategoryLabel icon="fas fa-dollar-sign" category="Business" />
        </div>
        <hr />
        <Heading heading="Recent Posts" />

        {/* Post Grid */}

        {/* Footer */}
      </Container>
    </Fragment>
  );
};

export default Home;
