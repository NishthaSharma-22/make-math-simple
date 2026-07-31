import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IoPersonCircleOutline } from 'react-icons/io5'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4'>
        {/* SEARCH BAR */}
        <div className='hidden md:flex gap-2 border border-dashed p-1'>
            <BiSearchAlt size={25}></BiSearchAlt>
            <input type="text" placeholder='Search' className='border-transparent focus:outline-none bg-transparent'/>
        </div>
    {/* USER PROFILE */}
    <div className='flex items-center gap-2 justify-end w-full'>
        <IoPersonCircleOutline size={30} className='cursor-pointer'></IoPersonCircleOutline>
        <span>Nishtha Sharma</span>
    </div>
    </div>
  )
}

export default Navbar