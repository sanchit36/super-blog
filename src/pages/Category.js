import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Heading from "../components/Heading/Heading";
import Loader from "../components/Loader";
import PostGrid from "../components/PostGrid";
import BlogContext from "../context/blogs/BlogContext";
import CategoryContext from "../context/category/categoryContext";
import { firestore } from "../firebase/firebase.setup";

const Category = () => {
  const [loading, setLoading] = useState(false);
  const { categories } = useContext(CategoryContext);
  const { latestBlogs, setLatestBlogs } = useContext(BlogContext);
  const { categorySlug } = useParams();
  const cat = categories.find((cat) => cat.slug === categorySlug);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    if (cat)
      firestore
        .collection("blogs")
        .where("category", "==", cat.category)
        .get()
        .then((ref) => {
          if (mounted) {
            setLatestBlogs(
              ref.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            setLoading(false);
          }
        });

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [categorySlug]);

  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <Container className="my-4">
        <Heading heading={cat?.category} />
        <PostGrid blogs={latestBlogs} />
      </Container>
    </React.Fragment>
  );
};

export default Category;
