
import React from "react";
import Navbar from "@/Components/Navbar";
import { PRODUCT } from './data'
import Product from "@/Components/Product";

import { ShopContextProvider } from "./Context/ShopState";
import Buttons from "@/Components/Buttons";

function page() {
  return (

     
      <div className="products  grid lg:grid-cols-3 gap-2 sm:grid-cols-2 mx-4 my-5 w-auto ">
      
        {
          PRODUCT.map((item) => {
            console.log(item);
            return <Product data={item} key={item.id} />
          })}
          
      </div>
  
  )
}

export default page