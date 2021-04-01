import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Media } from "react-bootstrap";
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
    blogDetails: { title, img_url, content, author, published, comments },
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
          const blog = ref.docs.filter(
            (doc) => doc.data().slug === blogSlug
          )[0];
          firestore
            .collection("blogs")
            .doc(blog.id)
            .collection("comments")
            .get()
            .then((ref) => {
              setBlogDetails({
                id: blog.id,
                ...blog.data(),
                comments: ref.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                })),
              });
              setLoading(false);
            });
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
        <br />
        <p>{content}</p>
        <br />
        <hr />
        <h3>Comments</h3>

        <br />

        {comments?.length ? (
          comments.map((comment) => (
            <Media key={comment.id}>
              <img
                width={64}
                height={64}
                className="rounded-circle mr-3"
                src={comment.img_url}
                alt="profile pic"
              />
              <Media.Body>
                <h5>{comment.author}</h5>
                <p>{comment.content}</p>
              </Media.Body>
            </Media>
          ))
        ) : (
          <p>No Comments</p>
        )}
      </Container>
    </Fragment>
  );
};

export default BlogDetail;
