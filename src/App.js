import { Routes, Route} from "react-router-dom";

import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.util";
import { createAction } from "./utils/firebase/reducer/reducer.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

// import { getCurrentUser } from "./utils/firebase/firebase.util";
import { checkUserSession } from "./store/user/user.action";


// const Shop = () => {
//   return <h1>This is a shop</h1>;
// };

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   // console.log(user);
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });

    // // console.log(unsubscribe);
    // return unsubscribe; //cleanup code
// getCurrentUser().then((user) => console.log(user));
dispatch(checkUserSession())
  }, []);
  
  return (
    // <div className="categories-container">
    //   {categories.map((category) => (
    //    <CategoryItem key={category.id} category={category}/>
    //   ))}
    // </div>
   <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} path="" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
    </>
  );
  
};

export default App;
