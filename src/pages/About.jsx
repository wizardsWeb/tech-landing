import React from 'react'
import { buttonArrow, image1 } from '../assets'
import { motion } from "framer-motion";

const About = () => {

  const imageVariants = {
    offscreen: {
      y: 100, // Start slightly below
      opacity: 0, // Start transparent
    },
    onscreen: {
      y: 0, // Move to its original position
      opacity: 1, // Fade in
      transition: {
        type: "spring", // Smooth spring animation
        bounce: 0.3,
        duration: 1.2,
      },
    },
  };

  // Variants for the text
  const textVariants = {
    offscreen: {
      y: 100, // Start slightly below
      opacity: 0, // Start transparent
    },
    onscreen: {
      y: 0, // Move to its original position
      opacity: 1, // Fade in
      transition: {
        type: "spring", // Smooth spring animation
        bounce: 0.4,
        duration: 0.8,
        delay: 0.3, // Delay for the text to animate after the image
      },
    },
  };

  return (
    <div className='h-screen pt-[6.5rem]'>
      <div className='flex items-center justify-center font-semibold text-gray-400 text-md'>
        <p>Who We Are</p>
      </div>
      <div className='uppercase text-center text-gray-300 text-3xl py-3 tracking-wider pb-12'>
        <p className='py-1'>Epic Beginnings: Unveiling Our Essence, </p>
        <p className='py-1'>Crafting Futures with Excellence.</p>
      </div>
      <motion.div className='flex justify-center items-center' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
        <motion.div className='w-1/2 flex justify-center gap-24' variants={imageVariants}>
            <img src={image1} />
        </motion.div>
        <motion.div className='w-1/2 text-start' variants={textVariants}>
          <div className='w-2/3 flex flex-col justify-between gap-8 text-gray-300'>
            <p className='text-2xl py-4'>Empowering Progress: Our Story, Your Journey, Shared Excellence.</p>
            <p className='text-lg '>Embark on a journey through our narrative, where innovation meets purpose.</p>
            <p className='text-lg pb-4'>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p>
            <button className='flex p-4 px-6 w-2/5 border border-gray-300 text-center'>
                <span>Who We Are</span>
                <img src={buttonArrow} alt="" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
