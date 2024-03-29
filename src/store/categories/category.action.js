import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { categoriesReducer } from "./category.reducer";
// export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArray)

export const  fetchCategoriesStart = () =>
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const  fetchCategoriesSuccess = (categoriesArray) =>
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);

export const  fetchCategoriesFailed = (error) =>
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);

//below is thunk
// export const fetchCategoriesAsync = () => async (dispatch) =>{
//     dispatch(fetchCategoriesStart());

//     try{
//         const categoriesArray = await getCategoriesAndDocuments('categories')
//         dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error){
//         dispatch(fetchCategoriesFailed(error));
//     }

// }