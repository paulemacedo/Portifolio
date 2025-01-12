import React from 'react'
import Reveal from './Reveal'
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className='p-6 max-w-[1000px] mx-auto md:my-12' id='about'>
            <Reveal>
            <div className='grid md:grid-cols-2 place-items-center'>
                <div>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4x1 font-semibold mb-5'>
                            About <span>Me</span>
                        </h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                        Hi, I'm Paulo Macedo, a Computer Science student at CEFET-RJ, graduating in 2026. I'm passionate about cybersecurity, software development, and Linux systems.<br></br><br></br>

                        I have hands-on experience with immersive technologies, scripting for Linux environments, and developing secure, scalable solutions. My skill set includes Python, Rust, C++, JavaScript, and tools like Unity, Git, and VMware.<br></br><br></br>

                        Currently, I'm focused on advancing my knowledge in information security and building impactful projects.
                        </p>
                    </div>

                    <div className='flex mt-10 items-center gap-7'>
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                                <span>+</span>
                            </h3>
                            <p><span>Projects</span></p>
                        </div>
                        
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>1
                                <span>+</span>
                            </h3>
                            <p><span>years of experience</span></p>
                        </div>
                        
                        {/* <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>11
                                <span>+</span>
                            </h3>
                            <p><span>happy clients</span></p>
                        </div> */}
                    </div>
                </div>

                <form 
                    method="POST" 
                    action="https://formspree.io/f/mvoevyoz"
                    className='max-w-6xl p-5 md:p-12'
                    id='contact-form'
                    >
                    
                    <p  className='text-gray-100 font-bold text-xl mb-2'>
                    I'm open to new opportunities and collaborations, so feel free to reach out!  
                    </p>

                    <input 
                    type="hidden" 
                    name="_subject" 
                    value="Contact request from personal website" 
                    />

                    <input
                    type="text"
                    id='name'
                    placeholder='Your name ...'
                    name='name'
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pr-4'
                    required
                    />
                    
                    <input 
                    id='email'
                    type="email" 
                    name="email" 
                    placeholder="Your email ..." 
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pr-4'
                    required 
                    />

                    <textarea 
                    name="message" 
                    placeholder="Your Message ..."
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pr-4' 
                    required>
                    </textarea>

                    <button 
                        type="submit"
                        className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'
                    >
                        Send
                    </button>
                </form>        
            </div>
            </Reveal>
        </div>
    )
}

export default Contact