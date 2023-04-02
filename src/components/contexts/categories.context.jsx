import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { createContext } from "react";
// import PRODUCTS from '../../shop-data.json';
// import SHOP_DATA from "../../shop-data";
// import { addColletcionAndDocuments } from "../../utils/firebase/firebase.util";
import {getCategoriesAndDocuments} from  "../../utils/firebase/firebase.util";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  // const [products,setProducts] = useState(PRODUCTS);
  const [categoriesMap, setcategoriesMap] = useState({});
//   useEffect(() => {
//     addColletcionAndDocuments("categories", SHOP_DATA); only one time use for uploading data in firebase
//   }, []);

useEffect(()=>{
  const getCategoriesMap = async () =>{
    const categoryMap = await getCategoriesAndDocuments();
    console.log(categoryMap);
    setcategoriesMap(categoryMap);
  }

  getCategoriesMap();
},[])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
