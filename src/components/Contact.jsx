import React from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className='p-6 max-w-[1000px] mx-auto md:my-12' id='about'>
            <Reveal>
                <div className='grid md:grid-cols-2 place-items-center'>
                    <div>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4x1 font-semibold mb-5'>
                                {t('contact.title')}
                            </h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto' dangerouslySetInnerHTML={{ __html: t('contact.description') }}>
                            </p>
                        </div>

                        <div className='flex mt-10 items-center gap-7'>
                            <div className='bg-gray-800/40 p-5 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                                    <span>+</span>
                                </h3>
                                <p><span>{t('contact.projects')}</span></p>
                            </div>
                            
                            <div className='bg-gray-800/40 p-5 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>1
                                    <span>+</span>
                                </h3>
                                <p><span>{t('contact.years_of_experience')}</span></p>
                            </div>
                        </div>
                    </div>

                    <form 
                        method="POST" 
                        action="https://formspree.io/f/mvoevyoz"
                        className='max-w-6xl p-5 md:p-12'
                        id='contact-form'
                    >
                        <p className='text-gray-100 font-bold text-xl mb-2'>
                            {t('contact.contact_message')}
                        </p>

                        <input 
                            type="hidden" 
                            name="_subject" 
                            value="Contact request from personal website" 
                        />

                        <input
                            type="text"
                            id='name'
                            placeholder={t('contact.name_placeholder')}
                            name='name'
                            className='mb-2 w-full rounded-md border border-purple-600 py-2 pr-4'
                            required
                        />
                        
                        <input 
                            id='email'
                            type="email" 
                            name="email" 
                            placeholder={t('contact.email_placeholder')} 
                            className='mb-2 w-full rounded-md border border-purple-600 py-2 pr-4'
                            required 
                        />

                        <textarea 
                            name="message" 
                            placeholder={t('contact.message_placeholder')}
                            className='mb-2 w-full rounded-md border border-purple-600 py-2 pr-4' 
                            required>
                        </textarea>

                        <button 
                            type="submit"
                            className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'
                        >
                            {t('contact.send_button')}
                        </button>
                    </form>        
                </div>
            </Reveal>
        </div>
    );
};

export default Contact;