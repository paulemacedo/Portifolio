import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'RNP',
        role: 'Undergraduate Researcher',
        description: 'Developed applications for Immersive TV and Virtual Reality in the TV 3.0 project with a focus on technological innovation.',
        duration: 'June 2023 - September 2024',
    }
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[800px] mx-auto' >
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12' id='experience'>Experience</h1>
        <motion.div
        className='space-y-8 flex flex-col items-center'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                className='border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <h4 className='text-gray-200'>{experience.role}</h4>
                    <p className='text-gray-300'>{experience.duration}</p>
                    <p className='text-gray-300'>{experience.description}</p>
                </motion.div>
                </Reveal>
            ))}
        </motion.div>        
    </div>
  )
}

export default Experience