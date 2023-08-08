'use client'
import React from 'react'
import { useRef } from 'react';

function Buttons(props) {
    function handleMousedown() {
        ref.current.style.transform = "scale(0.95)"
    }
    function handleMouseUp() {
        ref.current.style.transform = "scale(1)"
    }
    const ref = useRef()
  return (
      <button onClick={props.click} ref={ref} className='w-auto px-3 border-black border-2 font-semibold h-9 rounded-3xl hover:bg-black hover:text-white'onMouseDown={ handleMousedown} onMouseUp={handleMouseUp}>{ props.title}</button>
  )
}

export function Nav_Btn({props,  click,className}) {
    return (
        <button onClick={click} className={className} >{ props}</button>
    )

}
export default Buttons