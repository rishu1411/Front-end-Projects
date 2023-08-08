'use client'
import { ShopContext } from '@/app/Context/ShopState'
import { PRODUCT } from '@/app/data'
import { useContext } from 'react'
import CartItem from '@/app/Cart/CartItem'
import { Nav_Btn } from '@/Components/Buttons'
import Link from 'next/link'


function Items() {
  const { cartItem, getItemAmt } = useContext(ShopContext)

  const totalamt = getItemAmt()


  
  
  return (
    <>
      {totalamt > 0 && <h1 className='text-3xl font-semibold'>Your Cart</h1>}
     {
       PRODUCT.map((item) => {
            if (cartItem[item.id] !== 0) {
                  return <CartItem data={item} key={item.id} />
                }
          })}

      {totalamt > 0 ?  <div className="CHeckout flex flex-col justify-end absolute right-0 p-9 mr-3 gap-3 border-2 border-zinc-200 rounded-md shadow-lg shadow-slate-400 bg-zinc-100" >
    
        <span className='font-semibold'>Sub Total: {totalamt}$ </span>
        <Link href='/'><Nav_Btn props={'Continue Shopping'} className={'bg-black text-white w-auto px-2 h-9 rounded-md hover:bg-[#2a2a2a]'} /></Link>
        
        <Nav_Btn props={'Check Out'} className={'bg-black text-white w-auto px-2 h-9 rounded-md hover:bg-[#2a2a2a]'}/>
      </div> : <h1 className='text-3xl font-semibold'>Your Cart Is Empty</h1>}
          
    
    </>
  )
}



export default Items
