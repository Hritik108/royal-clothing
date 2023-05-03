import { Outlet} from "react-router-dom";
import { Fragment, useContext } from "react";

// import "./navigation.styles.jsx";
import { NavigationContainer,LogContainer,NavLinks,NavLink } from "./navigation.styles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"; //importing logo as a component
// import { UserContext } from "../../components/contexts/user.context";
// import { CartContext } from "../../components/contexts/cart.context";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { useSelector,useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {

  // Fragment is used warp elements but it is not visible like div tag

  // const { currentUser } = useContext(UserContext);
  // const currentUser = useSelector((state)=> state.user.currentUser)
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser)


//  const {isCartOpen} = useContext(CartContext);

 const isCartOpen = useSelector(selectIsCartOpen);

  // const signOutHandler= async ()=>{
  //   const res =  await signOutUser();
  //   setCurrentUser(null);
  //    console.log(res);
  // }

  //     const {currentUser} = useContext(UserContext);
  // console.log(currentUser);

const signOutUser = () => dispatch(signOutStart());
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogContainer to="/">
          <CrwnLogo className="logo" />
        </LogContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
