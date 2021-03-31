import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CategoryLabel from "../components/CategoryLabel";
import Header from "../components/Header";
import Heading from "../components/Heading/Heading";
import PostGrid from "../components/PostGrid";
import { firestore } from "../firebase/firebase.setup";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const ref = await firestore.collection("categories").get();
      setCategories(
        ref.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    };
    fetchCategories();
  }, []);

  return (
    <Fragment>
      <Header
        width="100vw"
        height="70vh"
        backgroundImage="url('https://assets.website-files.com/60138cf950606122a5a97003/60138cf95060615487a97068_jimmy-dean-_GoBSreu1a4-unsplash-min.jpg')"
      >
        <h5 className="text-success">Category</h5>
        <h1>Title of the Post</h1>
        <div className="row mb-3">
          <p className="mr-5">
            by <span className="text-success font-weight-bold">Author</span>
          </p>
          <p>Jan 23, 2021</p>
        </div>
        <button className="btn btn-success btn-lg">Read More ...</button>
      </Header>
      <Container className="my-5">
        <div className="d-flex">
          {categories?.map(({ id, icon, category }) => (
            <CategoryLabel key={id} icon={icon} category={category} />
          ))}
        </div>
        <hr />
        <Heading heading="Recent Posts" />
        <PostGrid />
      </Container>
    </Fragment>
  );
};

export default Home;
