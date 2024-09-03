import React from 'react'
import { buttonArrow, css, html, image2, left, python, python1, right, word } from '../assets'
import { motion } from "framer-motion";

const Portfolio = () => {

  const containerVariants = {
    offscreen: {},
    onscreen: {
        transition: {
            staggerChildren: 0.3, // Delay between each child animation
            delayChildren: 0.3,  // Initial delay before the first child appears
        },
    },
};

const imageVariants = {
    offscreen: {
        y: 50, // Start slightly below
        opacity: 0, // Start transparent
    },
    onscreen: {
        y: 0, // Move to its original position
        opacity: 1, // Fade in
        transition: {
            type: "spring", // Smooth spring animation
            bounce: 0.3,
            duration: 0.6,
        },
    },
};

  return (
    <div className='h-screen pt-[6.5rem]'>
      <div className='flex items-center justify-center font-semibold text-gray-400 text-md'>
        <p>Portfolio</p>
      </div>
      <div className='uppercase text-center text-gray-300 text-3xl py-3 tracking-wider pb-12'>
        <p className='py-1'>From Challenge to Victory: Exploring Case</p>
        <p className='py-1'>Studies of Innovation and Excellence</p>
      </div>
      <div className='flex justify-center items-center' >
        <div className='w-1/2 flex justify-center gap-24'>
            <img src={image2} />
        </div>
        <motion.div className='w-1/2 text-start' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={containerVariants}>
          <div className='w-2/3 flex flex-col justify-between gap-8 text-gray-300'>
            <p>Category</p>
            <p className='text-2xl py-4'>Empowering Progress: Our Story, Your Journey, Shared Excellence.</p>
            <p className='text-lg '>Embark on a journey through our narrative, where innovation meets purpose.</p>
            <p className='text-lg pb-2'>Technologies</p>
            <motion.div className='flex justify-between w-1/2 items-center' variants={containerVariants}>
                <motion.img src={html} alt="HTML" variants={imageVariants} />
                <motion.img src={css} alt="CSS" variants={imageVariants} />
                <motion.img src={python} alt="Python" variants={imageVariants} />
                <motion.img src={word} alt="Word" variants={imageVariants} />
                <motion.img src={python1} alt="Python1" variants={imageVariants} />
            </motion.div>
            <button className='flex p-4 px-6 w-2/5 border border-gray-300 text-center'>
                <span>Who We Are</span>
                <img src={buttonArrow} alt="Arrow" />
            </button>
          </div>
        </motion.div>
      </div>
      <div className='flex justify-center items-center text-white py-12 gap-12'>
                <img src={left} alt="" height={50} width={50} />
                <img src={right} alt="" />
            </div>
    </div>
  )
}

export default Portfolio;
