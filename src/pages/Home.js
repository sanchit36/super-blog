import React, { Fragment, useContext } from "react";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import CategoryLabel from "../components/CategoryLabel";
import Header from "../components/Header";
import Heading from "../components/Heading/Heading";
import PostGrid from "../components/PostGrid";
import BlogContext from "../context/blogs/BlogContext";
import CategoryContext from "../context/category/categoryContext";

const Home = () => {
  const { categories } = useContext(CategoryContext);
  const { latestBlogs } = useContext(BlogContext);

  return (
    <Fragment>
      <Header
        width="100vw"
        height="70vh"
        backgroundImage="url('https://assets.website-files.com/60138cf950606122a5a97003/60138cf95060615487a97068_jimmy-dean-_GoBSreu1a4-unsplash-min.jpg')"
      >
        <h5 className="text-success">{latestBlogs?.[0]?.category}</h5>
        <h1>{latestBlogs?.[0]?.title}</h1>
        <div className="row mb-3">
          <p className="mr-5">
            by{" "}
            <span className="text-success font-weight-bold">
              {latestBlogs?.[0]?.author}
            </span>
          </p>
          <Moment format="DD/MM/YYYY">
            {latestBlogs?.[0]?.published.toDate()}
          </Moment>
        </div>
        <button className="btn btn-success btn-lg">Read More ...</button>
      </Header>
      <Container className="my-5">
        <div className="d-flex">
          {categories?.map(({ id, icon, slug, category }) => (
            <Link key={id} to={`/category/${slug}`}>
              <CategoryLabel icon={icon} category={category} />
            </Link>
          ))}
        </div>
        <hr />
        <Heading heading="Recent Posts" />
        <PostGrid blogs={latestBlogs} />
      </Container>
    </Fragment>
  );
};

export default Home;
