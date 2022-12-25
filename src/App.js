import { Routes, Route} from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";



const Shop = () => {
  return <h1>This is a shop</h1>;
};

const App = () => {
  return (
    // <div className="categories-container">
    //   {categories.map((category) => (
    //    <CategoryItem key={category.id} category={category}/>
    //   ))}
    // </div>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
