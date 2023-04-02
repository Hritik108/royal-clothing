import { Fragment, useContext, useEffect, useState } from "react";
import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../components/contexts/categories.context";
import ProductsCard from "../../components/products-card/products-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
    <h2 className="category-title">{category.toUpperCase()}</h2>
    <div className="category-container">
     
      {
        products &&
          products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          )) //&& conditon applied in order make sure products is not empty and doesn't shoes error
             //since CategoriesContext fetches data Asynchronously 
      }
    </div>
    </Fragment>
  );
};

export default Category;
