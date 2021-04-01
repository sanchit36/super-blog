import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import { useParams } from "react-router";
import Header from "../components/Header";
import Heading from "../components/Heading/Heading";
import Loader from "../components/Loader";
import BlogContext from "../context/blogs/BlogContext";
import { firestore } from "../firebase/firebase.setup";

const BlogDetail = () => {
  const [loading, setLoading] = useState(false);
  const {
    blogDetails: { title, img_url, content, author, published },
    setBlogDetails,
  } = useContext(BlogContext);

  const { blogSlug } = useParams();

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    firestore
      .collection("blogs")
      .get()
      .then((ref) => {
        if (mounted) {
          setBlogDetails(
            ref.docs.filter((doc) => doc.data().slug === blogSlug)[0].data()
          );
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [blogSlug]);

  if (loading) return <Loader />;

  return (
    <Fragment>
      <Header width="100vw" height="50vh" backgroundImage={`url(${img_url})`} />
      <Container className="mb-5">
        <Heading heading={title} />
        <p>Author: {author}</p>
        <p>
          Published: <Moment format="DD/MM/YYYY">{published?.toDate()}</Moment>
        </p>
        <hr />
        <p>{content}</p>
      </Container>
    </Fragment>
  );
};

export default BlogDetail;
