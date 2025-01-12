import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const education = [
    {
        institution: 'CEFET/RJ',
        degree: 'Bachelor of Science in Computer Science',
        graduationDate: 'August 2026',
    }
]

const Education = () => {
  return (
    <div className='p-8 max-w-[800px] mx-auto' >
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12' id='education'>Education</h1>
        <motion.div
        className='space-y-8 flex flex-col items-center'
        initial="hidden"
        animate="visible"
        >
            {education.map((edu, index) => (
                <Reveal>
                <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                className='border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{edu.institution}</h2>
                    <h4 className='text-gray-200'>{edu.degree}</h4>
                    <p className='text-gray-300'>{edu.graduationDate}</p>
                </motion.div>
                </Reveal>
            ))}
        </motion.div>        
    </div>
  )
}

export default Education