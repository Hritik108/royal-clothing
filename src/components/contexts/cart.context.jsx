import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems,productToAdd) => {
//find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id );
//if found increase Quanitiy
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
        ? {...cartItem,quantity:cartItem.quantity+1}
        :cartItem
        )
    }

    // return newarray with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd,quantity:1}]

}

const removeCartItem = (cartItems,cartItemToRemove) =>{

    //find if caritem is present in cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id) 


    //check if cartitem quantity is one and if one remove it
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id)
    }

    //return back cartitems with matching cartitem with reduced
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem,quantity:cartItem.quantity-1}
        :cartItem
        )

}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: ()=>{},
    cartCount:0,
    deleteItemFromCart:()=>{},
    cartTotal:0
})

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);
    useEffect(() =>{
        const newCartCount = cartItems.reduce((total,cartItem) => total+cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])

    useEffect(() =>{
        const newCartTotal = cartItems.reduce((total,cartItem) => total+cartItem.quantity*cartItem.price,0)
        setCartTotal(newCartTotal)
    },[cartItems])
    
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemFromCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }

    const deleteItemFromCart = (deleteCartItem) =>{
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== deleteCartItem.id))
    }

    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,deleteItemFromCart,cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}