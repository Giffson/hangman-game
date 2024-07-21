import React, { useEffect, useState } from 'react'
import {HiOutlinePlay} from 'react-icons/hi2'
import Loader from './Loader'
import { Link, useNavigate } from 'react-router-dom'
const MainMenu = () => {

   
    const [afterloader, setAfterLoader] = useState(false)

    useEffect(()=> {
        setTimeout(()=> setAfterLoader(true),5000)
    },[])



  return (
    <>
     <Loader  />
    {afterloader &&  <div className='MainMenu w-full h-full '>
         
         <div className="container mx-auto h-full">
             <div className="main-menu-container px-4 xl:px-6 flex flex-col items-center justify-center h-full">
                     <h1 className='text-3xl mb-4 tracking-widest text-white'>HANGMAN</h1>
                         <p className='text-white text-center mb-8'>this game of puzzle quiz, you have to find the missing words</p>
                     <Link className='px-4 py-2 transition-all duration-200 border-white/35 border-2  lg:hover:bg-blue-800 text-white rounded-3xl w-[100px] text-center ' to={'/mainscreen'}>Play</Link>
             </div>
         </div>
     </div>}
  </>
  )
}

export default MainMenu