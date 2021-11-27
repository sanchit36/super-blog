import React from "react";
import { Link } from "react-router-dom";

const CategoryLabel = ({ icon, category, slug }) => {
  return (
    <Link className="cl" to={`/posts/${slug}`}>
      <h5 className="mr-4">
        <i className={`text-success ${icon}`} /> {category}
      </h5>
    </Link>
  );
};

export default CategoryLabel;
