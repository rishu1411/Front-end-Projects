'use client'
import {useContext} from 'react'
import { ShopContext } from '@/app/Context/ShopState'
import Buttons from '@/Components/Buttons'

function AddToCart(props) {
    const { addToCart, cartItem } = useContext(ShopContext)
    const cartItemAmount = cartItem[props.id]
    // console.log(Object.keys(cartItem))
    return (
        <>
          
            <Buttons title={`Add to Cart ${cartItemAmount > 0 ? cartItemAmount: ""}`} click={()=>addToCart(props.id)} />
           
            </>
  )
}

export default AddToCart