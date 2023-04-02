
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.components';
const Home = () => {


  return (
    // <div className="categories-container">
    //   {categories.map((category) => (
    //    <CategoryItem key={category.id} category={category}/>
    //   ))}
    // </div>
    <div>
    <Outlet/>
    <Directory />
    </div>
  );
};

export default Home;
