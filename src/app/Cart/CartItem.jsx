import React from 'react'
import Images from 'next/image'
import Increment from './Increment'


function CartItem(props) {
    const { prod_name, id, price, prod_image } = props.data   
    const img_style = {
        backgroundBlendMode: 'screen',
        objectFit: 'contain',
    }
  return (
      <>
           < div className="container  flex items-center space-y-2  bg-zinc-100 p-4 border-gray-300 border-2 w-[50%] space-x-4 rounded-lg shadow-2xl shadow-slate-500">
                <div className="img items-center ">
                    <Images
                        src={prod_image}
                        alt ='Images'
                        height={200}
                        loading='lazy'
                        style={img_style}
                    />
              </div>
              <div className="flex flex-col min-h-fit pb-24 space-y-2">
                    <span className='font-extrabold'>{prod_name}</span>
                  <span className='font-semibold'>{`Price: ${price} $`}</span>
                  <Increment id={ id} />
                  </div>
     
      </div>
     
    </>
  )
}

export default CartItem