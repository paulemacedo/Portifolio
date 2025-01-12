import { div } from 'framer-motion/client'
import React from 'react'
import{ FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
     <div className='space-y-4'>
        <h3 className='font-semibold text-gray-200 text-2xl'>Paule M</h3>
        
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
            <a href='#'><FaGithubSquare /></a>
            <a href='#'><FaLinkedin /></a>
        </div>

     </div>
    <p className='text-gray-400 max-w-[200px] md:max-w-none' 
    >© 2025 Paule Macedo. All rights reserved.</p>
    </div>
  )
}

export default footer