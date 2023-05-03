import { Routes,Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';
import { useEffect } from "react";
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
  
  // const categoriesMap = useSelector((state) => s)
  const dispatch = useDispatch();
  useEffect(()=>{
    // const getCategoriesMap = async () =>{
    //   const categoriesArray = await getCategoriesAndDocuments('categories');
    //   console.log(categoriesArray);
      // setCategories(categoriesArray);
      // dispatch(setCategories(categoriesArray))
      dispatch(fetchCategoriesStart())  //fetchCategoriesStart is dispatch because saga is listening to it
    // }
  
    // getCategoriesMap();
  },[])
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
