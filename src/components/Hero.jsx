import React from "react";
{/* TODO: Mudar foto */}
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion"; 
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
    return (
        <div className='mt-24 max-w-[1250px] mx-auto relative'>
            <div className='grid md:grid-cols-2 place-items-center gap-8 p-12'>
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                >   
                    <TypeAnimation
                        sequence={[
                            "Fullstack Dev",
                            1000,
                            "Cybersecurity",
                            1000
                        ]}
                        repeat={Infinity}
                        speed={50}
                        className="font-bold text-xl md:text-5xl text-gray-400 italic- mb-4"

                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-gray-200 md:text-5xl tracking-tight mb-4'
                    >
                        HEY, I'M <br /> 
                        <span className='text-purple-500'>PAULE MACEDO</span>

                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-gray-300 max-w-[300px] md:text-2xl text-lg mb-6 md:max-w-[500px]'
                    >
                        I'm a full stack developer based in Brazil. I have a passion for creating and developing web applications. I'm also a cybersecurity enthusiast.                        

                    </motion.p>
                    

                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >   
                        <motion.button whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }} 
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                         border-purple-400 rounded-xl"  
                        >
                        Download CV
                        </motion.button>

                        <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
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
                className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'
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