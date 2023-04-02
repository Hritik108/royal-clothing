import { Routes, Route} from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";



// const Shop = () => {
//   return <h1>This is a shop</h1>;
// };

const App = () => {
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
