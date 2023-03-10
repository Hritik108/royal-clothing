import { Outlet,Link } from "react-router-dom";
import { Fragment,useContext } from "react";

import './navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'; //importing logo as a component
import { UserContext } from "../../components/contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.util";

const Navigation = () => {
    // Fragment is used warp elements but it is not visible like div tag

    const {currentUser,setCurrentUser}=useContext(UserContext)

    // const signOutHandler= async ()=>{
    //   const res =  await signOutUser();
    //   setCurrentUser(null);
    //    console.log(res);
    // }
    
//     const {currentUser} = useContext(UserContext);
// console.log(currentUser);
    return (
      <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>{

              currentUser?(<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>):(
            <Link className="nav-link" to='/auth'>
                SIGN IN
            </Link>)
}

        </div>
        
      </div>
      <Outlet />
      </Fragment>
    );
  };

  export default Navigation;