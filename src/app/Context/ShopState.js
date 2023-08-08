'use client'

import React, { useState,createContext, useContext } from "react";
import { PRODUCT } from "../data";
 

export const ShopContext = createContext()


let cart = {}
const getDefaultCart = () => {
    for (let i = 1; i < PRODUCT.length+1; i++){
        cart[i] =0
    }
    return cart
}



export const ShopContextProvider = (props) => {
    
    const [cartItem, setCartItem] = useState(getDefaultCart())
    const user = useContext(ShopContext)
    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    // const updateSetItem = (itemID,newAmount) => {
    //     setCartItem((prev)=>({...prev,[itemID]:newAmount}))
    // }

    const getItemAmt = () => {
        let totalAmt = 0
        for (const items in cartItem) {
     
            if (cartItem[items] > 0) {
                let itemInfo = PRODUCT.find((prod) =>  prod.id == items )
                console.log('Maurya', itemInfo)
               totalAmt += itemInfo.price * cartItem[items]
            }
        }
       
        return totalAmt

    }
getItemAmt()

    const contextValue = {cartItem,addToCart,removeFromCart,getItemAmt}
    // console.log('Shop state',cartItem)
   
    return <ShopContext.Provider value={contextValue}>{ props.children }</ShopContext.Provider>
}


