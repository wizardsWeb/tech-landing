import React from 'react';
import aboutData from '../constants/index';
import { motion } from "framer-motion";
import { left, right } from '../assets';

const Solution = () => {

    const containerVariants = {
        offscreen: {},
        onscreen: {
            transition: {
                staggerChildren: 0.3, // Delay between each child animation
            },
        },
    };

    const cardVariants = {
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

    return (
        <div className='pt-[6.5rem] h-screen'>
            <div className='flex items-center justify-center font-semibold text-gray-400 text-md'>
                <p>Who We Are</p>
            </div>
            <div className='uppercase text-center text-gray-300 text-3xl py-3 tracking-wider pb-12'>
                <p className='py-1'>Epic Beginnings: Unveiling Our Essence, </p>
                <p className='py-1'>Crafting Futures with Excellence.</p>
            </div>
            <div className=''>
                <motion.div 
                    className='flex justify-center h-40 mx-32 rounded-xl' 
                    initial="offscreen" 
                    whileInView="onscreen" 
                    viewport={{ once: true, amount: 0.8 }}
                    variants={containerVariants}
                >
                    {aboutData.map((item) => (
                        <motion.div 
                            key={item.id} 
                            className='border border-gray-300 h-96 mx-6 rounded-xl' 
                            variants={cardVariants}
                        >
                            <div className='text-white h-96 flex flex-col mx-4 p-4'>
                                <div className='py-8'>
                                    <img src={item.iconUrl} alt={item.title} />
                                </div>
                                <div>
                                    {item.title}
                                </div>
                                <div className='h-12 border-b-2 w-1/2 pt-6 border-gray-500'></div>
                                <div className='py-8'>{item.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
        </div>
    );
}

export default Solution;
