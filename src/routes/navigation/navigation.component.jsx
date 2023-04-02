import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

// import "./navigation.styles.jsx";
import { NavigationContainer,LogContainer,NavLinks,NavLink } from "./navigation.styles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"; //importing logo as a component
import { UserContext } from "../../components/contexts/user.context";
import { CartContext } from "../../components/contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  // Fragment is used warp elements but it is not visible like div tag

  const { currentUser } = useContext(UserContext);
 const {isCartOpen} = useContext(CartContext);

  // const signOutHandler= async ()=>{
  //   const res =  await signOutUser();
  //   setCurrentUser(null);
  //    console.log(res);
  // }

  //     const {currentUser} = useContext(UserContext);
  // console.log(currentUser);
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
