import React from "react";

const CategoryLabel = ({ icon, category }) => {
  return (
    <h5 className="mr-5">
      <i className={`text-success mr-3 ${icon}`} />
      {category}
    </h5>
  );
};

export default CategoryLabel;
