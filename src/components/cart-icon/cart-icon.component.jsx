import {useSelector } from "react-redux";
import { selectCartCount,selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import { CartContext } from "../contexts/cart.context";
import { useDispatch } from "react-redux";
// import "./cart-icon.styles.scss";
 import { ShoppingIcon,CartIconContainer,ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  // const { isCartOpen,setIsCartOpen,cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  // const toggleIsCartOpen = () =>(setIsCartOpen(!isCartOpen));
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
