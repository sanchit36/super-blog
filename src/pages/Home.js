import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Heading from "../components/Heading/Heading";
import Loader from "../components/Loader";
import PostGrid from "../components/PostGrid";
import BlogContext from "../context/blogs/BlogContext";
import { firestore } from "../firebase/firebase.setup";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { latestBlogs, setLatestBlogs } = useContext(BlogContext);

  useEffect(() => {
    setLoading(true);
    let mounted = true;

    firestore
      .collection("blogs")
      .where("featured", "==", "Yes")
      .orderBy("published", "desc")
      .limit(6)
      .get()
      .then((ref) => {
        if (mounted) {
          setLatestBlogs(
            ref.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };

    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />;

  return (
    <Fragment>
      <Header
        width="100vw"
        height="70vh"
        backgroundImage={`url(${latestBlogs?.[0]?.img_url})`}
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
        <Link to={`/blog/${latestBlogs?.[0]?.slug}`}>
          <button className="btn btn-success btn-lg">Read More</button>
        </Link>
      </Header>

      <Container className="my-5">
        <Heading heading="Featured Posts" />
        <PostGrid blogs={latestBlogs} />
      </Container>
    </Fragment>
  );
};

export default Home;
