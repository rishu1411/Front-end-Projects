import React from 'react'
import Link from 'next/link'
import { FaCartShopping, FaMagnifyingGlass } from 'react-icons/fa6';
import { Nav_Btn } from './Buttons'

{/* <div className="icons mr-7 flex justify-center items-center space-x-3 text-white  ">
<span>Shopping</span> */}



function Navbar(props) {
  
  return (
    <nav className=' bg-slate-800 flex justify-between'>
      <ul className='ml-6 space-x-3 flex items-center  h-14 text-white'>
        <li className='font-medium hover:text-sky-500 duration-500 cursor-pointer'><Link href='/'>{ props.title}</Link></li>
        <li className='font-medium hover:text-sky-500 duration-500 cursor-pointer'><Link href='/layout/settings'>{ props.nav_2}</Link></li>
        <li className='font-medium hover:text-sky-500 duration-500 cursor-pointer'><Link href='/layout/analytics'>{ props.nav_3}</Link></li>
       
        {/* <li className='font-medium hover:text-sky-500 duration-500 cursor-pointer'><a href="/">Home</a></li>
        <li className='font-medium hover:text-sky-500 duration-500 cursor-pointer'><a href="./layout/settings">Settings</a></li>
        <li className='font-medium hover:text-sky-500 duration-500 cursor-pointer'><a href="./layout/analytics">Analytics</a></li> */}
      </ul>

      <ul className='flex items-center justify-center mr-10 space-x-4 text-white'>
        <li className='cursor-pointer hover:text-sky-500 duration-500 font-semibold'><Link href='/layout/Shop'>Shopping </Link></li>
        <li><Link href='/Cart'><Nav_Btn  props={<FaCartShopping   className='cursor-pointer hover:text-sky-500 duration-500 text-[22px]'/>} ></Nav_Btn>  </Link></li>
      </ul>
  
  
    </nav>
  )
}

export default Navbar