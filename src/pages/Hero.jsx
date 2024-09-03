import React, { useState } from 'react';
import { background, downArrow } from '../assets';
import Header from '../components/Header';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <div>
      <div style={{backgroundImage: `url(${background})`}} className='bg-cover h-screen w-full relative z-10'>
        <div>
            <Header />
        </div>
        <div className='absolute z-20 left-1/2 -translate-x-1/2 top-0 py-6'>
            <div className='text-6xl leading-tight text-center uppercase pt-[6.5rem] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-800'>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                500,
                "Elevate Your Vision, Ignite Today’s Innovation.",
                1000,
                "Elevate Your Vision, Ignite Tomorrow’s Innovation.",
                500,
                ]}
                speed={50}
                // style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
 
            </div>
            <div className='text-3xl text-center text-gray-300 py-4 '>
                <p className='py-1'>Crafting Digital Excellence for a Future</p>
                <p className='py-1'>Beyond Imagination.</p>
            </div>
        </div>
        <div className='absolute z-20 left-1/2 -translate-x-1/2 bottom-16 py-6'>
            <div className='text-white text-2xl font-semibold flex flex-col justify-center items-center'>
                <p>Scroll</p>
                <div><img src={downArrow} alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
