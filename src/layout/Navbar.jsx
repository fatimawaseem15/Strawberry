import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({sidebar, setsidebar}) {
  return (
   <>
   <div className="container  text-white py-2 absolute top-0 left-0 w-full z-20">
    <div data-aos="fade-down" className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold uppercase'>Straw<span className='font-normal'>Berries</span></h1>
        <ul className='md:flex space-x-14 text-xl hidden'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Where to find</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div onClick={()=> setsidebar
        (!sidebar)
        }>
         <GiHamburgerMenu className='text-3xl cursor-pointer'/>
        </div>
    </div>
   </div>
   </>
  )
}
