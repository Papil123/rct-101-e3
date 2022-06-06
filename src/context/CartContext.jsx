import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cartItem ,setCartitem] = useState({
    count:0,
    status:false
  })
  let count = cartItem.count
  const addCart=()=>{
    let added = {count:count+1,
        status:true 
     }
    setCartitem(...cartItem,added)
  }
   
   const removeCart =()=>{
    let removed = {count:count-1,
      status:false
   }
     setCartitem(...cartItem,removed)
   }

  return <CartContext.Provider value={{cartItem,addCart,removeCart}} >{children}</CartContext.Provider>;
};
