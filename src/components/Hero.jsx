import React, { useState } from 'react';
import Modal from 'react-modal';
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion"; 
import { useTranslation } from 'react-i18next';
import { 
    AiOutlineGithub,
    AiOutlineLinkedin,
} from "react-icons/ai";
import { 
    DiCss3,
    DiHtml5,
    DiJavascript,
    DiReact,
    DiPython,
    DiRust,
    DiLinux,

} from "react-icons/di";

import { 
    SiTryhackme,
    SiHackthebox,
    SiGnubash,
} from "react-icons/si";

const Hero = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };


    const animationTexts = [
        t('hero.software_engineer'),
        1000,
        t('hero.cybersecurity'),
        1000,
    ];
    
    return (
        <div className='mt-24 max-w-[1000px] mx-auto relative'>
            <div className='grid md:grid-cols-2 place-items-center gap-8 p-12'>
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                >   
                <TypeAnimation
                    sequence={animationTexts} 
                    repeat={Infinity}
                    speed={50}
                    className="font-bold text-xl md:text-3xl xl:text-4xl text-gray-400 italic mb-4"
                    key={i18n.language}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='text-gray-200 md:text-5xl tracking-tight mb-4'
                >
                    {t('hero.greeting')} <br /> 
                    <span className='text-purple-500'>PAULE MACEDO</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='text-gray-300 max-w-[300px] md:text-2xl text-lg mb-6 md:max-w-[500px]'
                >
                    {t('hero.description')}                        
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex items-center flex-col md:flex-row gap-6 my-4 md:mb-0"
                >   
                    <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }} 
                    className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-3 border border-purple-400 rounded-xl"  
                    onClick={openModal}
                    >
                    Download CV
                    </motion.a>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Select CV"
                    className="bg-purple-900 border border-opacity-50 border-purple-400 p-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] z-50 backdrop-blur-md bg-opacity-20"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40 "
                    >
                    <h2 className='text-purple-700 pb-4 text-4xl'>
                        {t('hero.select_cv_language')}
                    </h2>
                    <div className='flex flex-col gap-4 items-start text-xl text-white'>
                        <button 
                        onClick={() => window.location.href = '/Paulo Macedo - CV - PT-BR.pdf'}
                        >    
                        {t('hero.brazilian_portuguese')}
                        </button>
                        <button onClick={() => window.location.href = '#'}>
                        {t('hero.english')}
                        </button>
                    </div>
                    </Modal>

                    <div className='flex gap-6 flex-row text-4xl xl:text-6xl md:text-5xl text-purple-400 z-20'>
                    <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/paulemacedo">
                        <AiOutlineGithub />
                    </motion.a>

                    <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/Paulemacedo/">
                        <AiOutlineLinkedin />
                    </motion.a>

                    <motion.a whileHover={{ scale: 1.2 }} href="https://tryhackme.com/r/p/paulemacedo">
                        <SiTryhackme />
                    </motion.a>
                    </div>
                </motion.div>
                </motion.div>

                <motion.img
                src={profilepic}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1}}
                className="w-[300px] md:w-[450px]"
                />
            </div>

            <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24 gap-2 md:gap-7'
            >
                {/* <p className=" text-gray-200 mr-6">My Tech Stack</p> */}
                <DiLinux className="text-purple-400" />
                <SiGnubash className="text-purple-400" />
                <DiPython className="text-purple-400" />
                <DiRust className="text-purple-400" />
                <DiHtml5 className="text-purple-400" />
                <DiCss3 className="text-purple-400" />
                <DiJavascript className="text-purple-400" />


                
            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    )
}

export default Hero;