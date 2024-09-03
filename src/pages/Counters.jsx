import React from 'react';
import AnimatedNumbers from "react-animated-numbers";

const Counters = () => {
  return (
    <div className=' text-white'>
    <div className='flex justify-center items-center bg-black py-20'>
      <div className='bg-stroke-1'></div>
      <div className='w-2/3 flex justify-between items center text-center'>
        <div className='text-center'>
            <p className='text-2xl py-2 flex items-center justify-center text-center'>
                <span>
                <AnimatedNumbers
                    includeComma
                    // className={styles.container}
                    transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                    })}
                    animateToNumber={400}
                />
                </span>+
            </p>
            <p>Projects Completed</p>
        </div>

        <div className='h-20 border-l-2 border-gray-500'></div>

        <div>
            <p className='text-2xl py-2 flex items-center justify-center text-center'>
                <span>
                <AnimatedNumbers
                    includeComma
                    // className={styles.container}
                    transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                    })}
                    animateToNumber={15}
                />
                </span>+
            </p>
            <p>Successful Years</p>
        </div>

        <div className='h-20 border-l-2 border-gray-500'></div>

        <div>
            <p className='text-2xl py-2 flex items-center justify-center text-center'>
                <span>
                <AnimatedNumbers
                    includeComma
                    // className={styles.container}
                    transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                    })}
                    animateToNumber={98}
                />
                </span>%
            </p>
            <p>Client Retention</p>
        </div>

        <div className='h-20 border-l-2 border-gray-500'></div>

        <div>
            <p className='text-2xl py-2 flex items-center justify-center text-center'>
                <span>
                <AnimatedNumbers
                    includeComma
                    // className={styles.container}
                    transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                    })}
                    animateToNumber={30}
                />
                </span>+
            </p>
            <p>Countries</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Counters
