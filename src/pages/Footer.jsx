import React from 'react'

const Footer = () => {
  return (
    <div className='text-white flex justify-between items-center px-20 py-20 bg-black'>
      <div className='flex flex-col gap-4 '>
        <p className='text-xl font-bold'>About Us</p>
        <ul className='flex flex-col gap-4 text-gray-500'>
            <li className='hover:text-gray-300 transition-colors duration-300'>About WebTech</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Our Team</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Mission & Values</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Careers</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Blogs</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 '>
        <p className='text-xl font-bold'>Services</p>
        <ul className='flex flex-col gap-4 text-gray-500 '>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Software Development</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>IT Consulting</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Web Design</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Digital Transformation</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Project Management</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 '>
        <p className='text-xl font-bold'>Solutions</p>
        <ul className='flex flex-col gap-4 text-gray-500 '>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Industry Solutions</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Custom Solutions</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Case Studies</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Client Success</li>
            <li>Testimonals</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 '>
        <p className='text-xl font-bold'>Resource</p>
        <ul className='flex flex-col gap-4 text-gray-500 '>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Blog</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>White Papers</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Webinars</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>FAQ's</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Knowledge Base</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 '>
        <p className='text-xl font-bold'>Contact Us</p>
        <ul className='flex flex-col gap-4 text-gray-500 '>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Get In Touch</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Support</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Sales</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Locations</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Contact Form</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 '>
        <p className='text-xl font-bold'>Connect</p>
        <ul className='flex flex-col gap-4 text-gray-500 '>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Newsletter</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Social Media</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Media</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>PartnerShip</li>
            <li className='hover:text-gray-300 transition-colors duration-300 cursor-pointer'>Community Involment</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
