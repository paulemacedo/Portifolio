import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        Open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        Closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }
        
    return (
        <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
            <div className='max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20'>
                <a href='#'>
                    <img src={Logo} alt="logo" className='w-10 h-10' />
                </a>
                <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                    <li><Link to='education' smooth={true} offset={-80} duration={500}>Education</Link></li>
                    <li><Link to='skills' smooth={true} offset={-50} duration={500}>Skills</Link></li>
                    <li><Link to='portfolio' smooth={true} offset={-50} duration={500}>Projects</Link></li>
                    <li><Link to='experience' smooth={true} offset={-80} duration={500}>Experience</Link></li>
                    <li><Link to='about' smooth={true} offset={-50} duration={500}>Contact</Link></li>      
                </ul>

                <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div
                initial={false}
                animate={nav ? 'Open' : 'Closed'}
                variants={menuVariants}
                className='fixed top-0 left-0 w-full min-h-screen bg-gray-900 z-40'
                >
                    <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                        <li><Link to="education" onClick={closeNav} smooth={true} offset={-80} duration={500}>Education</Link></li>
                        <li><Link to="skills" onClick={closeNav} smooth={true} offset={-80} duration={500}>Skills</Link></li>
                        <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={-80} duration={500}>Projects</Link></li>
                        <li><Link to="experience" onClick={closeNav} smooth={true} offset={-80} duration={500}>Experience</Link></li>
                        <li><Link to="about" onClick={closeNav} smooth={true} offset={-50} duration={500}>About me</Link></li>
                        <li><Link to="contact-form" onClick={closeNav} smooth={true} offset={-50} duration={500}>Contact</Link></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar
