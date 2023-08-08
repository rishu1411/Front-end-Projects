'use client'
import { Nav_Btn } from '@/Components/Buttons'
import React, { useContext} from 'react'
import { ShopContext } from '../Context/ShopState'
import CartItem from './CartItem'



function Increment({ id }) {

    const { cartItem, addToCart, removeFromCart } = useContext(ShopContext)
    // console.log("How are you",cartItems[props.id])
    
  return (
    
      <div className="Counter">
          <Nav_Btn props={'+'} className={'h-8 w-auto border-2 border-slate-900 px-3 rounded-l-md'} click={() => addToCart(id)} />

          <input type="text" value={cartItem[id]} className='h-8 px-5 py-3 border-y-2 w-[20%] border-slate-900 outline-none ' onChange={(e)=>updateSetItem(id,Number(e.target.value))}/>
          
          <Nav_Btn props={'-'} className={'h-8 w-auto border-2 border-slate-900 px-3 rounded-r-md'} click={()=> removeFromCart(id)}/>
      </div>
  )
}

export default Increment