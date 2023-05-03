import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    //if found increase Quanitiy
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    // return newarray with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, cartItemToRemove) => {
    //find if caritem is present in cart
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    //check if cartitem quantity is one and if one remove it
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
    }
  
    //return back cartitems with matching cartitem with reduced
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

  export const addItemToCart = (cartItems,productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
};
export const removeItemFromCart = (cartItems,cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
};

export const clearItemFromCart = (cartItems,deleteCartItem) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== deleteCartItem.id
  );
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
};
