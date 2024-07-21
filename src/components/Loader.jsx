import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Loader = () => {
    const [loaderIs, setLoaderIs] = useState(true)
    const [animateState, setAnimateState] = useState('intial')
const title = ['H','A','N', 'G','M', 'A','N']

const motionContainer = {
    hidden: {opacity: 0, scale: 0},
    
    intial: {
        opacity: 1, scale: 1,
        transition: {
            delayChildren:0.5,
            staggerChildren:0.4
        },
    },
    next: {
        y: '-200px', opacity: 0,scale: 1, 
        transition: {
            duration: 1,
            onComplete: () => setLoaderIs(false)
        }
    }
}

const items= {
    hidden: { y: 20, opacity: 0 },
    intial: {
      y: 0,
      opacity: 1
    },
    next: {
        opacity: 1
    }
  
}

    const handleAnimateComplete = () => {
       if(animateState === 'intial'){
        setAnimateState('next')
       }
    }
    return (
        <motion.div initial='hidden'  animate={animateState} variants={motionContainer} onAnimationComplete={handleAnimateComplete} className={`loader fixed top-0 z-10   flex  items-center justify-center bg-red w-full h-full  gap-1 ${loaderIs ? '' : 'hidden'}`}>
            {
                title.map((item, index) => {
                    return(
                        <motion.span  variants={items} className='h-10 w-10  flex items-center justify-center text-slate-100' key={index}>{item}</motion.span>
                    )
                })
            }
    </motion.div>
    )
}
export default Loader;