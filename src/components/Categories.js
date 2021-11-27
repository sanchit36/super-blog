import CategoryLabel from "./CategoryLabel";

const Categories = ({ categories }) => {
  return (
    <div className="d-flex categories-container">
      {categories?.map(({ id, icon, slug, category }) => (
        <CategoryLabel key={id} icon={icon} slug={slug} category={category} />
      ))}
      <hr />
    </div>
  );
};

export default Categories;
