// import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
// import { CartContext } from '../contexts/cart.context';
// import './cart-dropdown.styles.scss';
import {useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {

  // const {cartItems} = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goTOCheckoutHandler = () =>{
    navigate('./checkout')
  }

  return(
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))
        ):(<EmptyMessage>Your cart is empty</EmptyMessage>)}
    </CartItems>
    <Button onClick={goTOCheckoutHandler} >GO TO CHECKOUT</Button>
  </CartDropdownContainer>)
};

export default CartDropdown;