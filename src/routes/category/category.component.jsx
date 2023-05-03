import { Fragment, useContext, useEffect, useState } from "react";
// import "./category.styles.jsx";
import { useParams } from "react-router-dom";
// import { CategoriesContext } from "../../components/contexts/categories.context";
import ProductsCard from "../../components/products-card/products-card.component";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";
import { CategoryContainer,Title } from "./category.styles";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
    <Title>{category.toUpperCase()}</Title>
    { isLoading?(<Spinner/>): (<CategoryContainer>
     
      {
        products &&
          products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          )) //&& conditon applied in order make sure products is not empty and doesn't shoes error
             //since CategoriesContext fetches data Asynchronously 
      }
    </CategoryContainer>
      )
    }

    </Fragment>
  );
};

export default Category;
