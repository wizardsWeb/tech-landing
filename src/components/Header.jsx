import React from 'react';
import { logo } from '../assets';

const Header = () => {
  return (
    <div className='bg-black/85 backdrop-blur-lg sticky top-0 z-50'>
        <div className='flex justify-between items-center py-4 gap-6 px-12'>
        <div>
            <img src={logo} alt="" height={100} width={100} />
        </div>
        <div className='text-gray-500 flex flex-row gap-12 font-semibold uppercase text-md'>
            <a href="" className='hover:text-white transition-colors duration-400'>Company</a>
            <a href="" className='hover:text-white transition-colors duration-400'>Services</a>
            <a href="" className='hover:text-white transition-colors duration-400'>Portfolio</a>
            <a href="" className='hover:text-white transition-colors duration-400'>Contact Us</a>
        </div>
        <div className='text-white flex flex-row items-center gap-6 font-semibold text-sm'>
            <button className='border border-gray-500 p-4 px-6 text-gray-500 hover:text-white transition-colors duration-300'>Get a Free Quote</button>
            <button className='border border-gray-500 p-4 px-6 text-gray-500 hover:text-white transition-colors duration-300'>Account</button>
        </div>
        </div>
    </div>
  )
}

export default Header
