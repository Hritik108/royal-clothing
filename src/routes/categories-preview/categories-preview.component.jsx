
import { Fragment, useContext } from "react";
// import { ProductsContext } from "../../components/contexts/products.context";
// import { CategoriesContext } from "../../components/contexts/categories.context";
// import ProductsCard from "../../components/products-card/products-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import './shop.styles.scss'
import { selectCategoriesMap,selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  // const {categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <Fragment>
      
      { isLoading ? (<Spinner/>):(
      Object.keys(categoriesMap).map((title)=>{
      //   <Fragment key={title}>
      //     <h2>{title}</h2>
      //   <div className="products-container">
      //   {categoriesMap[title].map((product) => (
      //     <ProductsCard key={product.id} product={product} />
      //   ))}
      // </div>
      // </Fragment>
      
       const products = categoriesMap[title];
       return(<CategoryPreview key={title} title={title} products={products}/>)
      
    }
      ))
    }
   
   </Fragment>
  );
};

export default CategoriesPreview;
