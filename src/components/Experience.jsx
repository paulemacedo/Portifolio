import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('experience.experiences.0.company'),
      role: t('experience.experiences.0.role'),
      description: t('experience.experiences.0.description', { returnObjects: true }),
      duration: t('experience.experiences.0.duration'),
    }
  ];

  return (
    <div className='p-4 sm:p-8 max-w-full sm:max-w-[800px] mx-auto'>
      <h1 className='text-2xl sm:text-4xl text-gray-200 font-bold text-center mb-8 sm:mb-12' id='experience'>{t('experience.title')}</h1>
      <motion.div
        className='space-y-4 sm:space-y-8 flex flex-col items-center'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              className='border border-purple-600 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-purple-700/10 w-full'
            >
              <div className='justify-between flex items-center'>
                <h2 className='text-gray-100 text-xl sm:text-2xl font-semibold'>{experience.company}</h2>
                <p className='text-gray-300 text-sm sm:text-base'>{experience.duration}</p>
              </div>
              <h4 className='text-gray-200 mb-2 sm:mb-4 text-base md:text-lg'>{experience.role}</h4>
              {Array.isArray(experience.description) ? (
                <ul className='list-disc list-inside text-gray-300 text-base md:text-lg'>
                {experience.description.map((desc, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: desc }} className='mb-2'>

                  </li>
                ))}
              </ul>
              ) : (
                <p className='text-gray-300 text-base md:text-base'>{experience.description}</p>
              )}       
            </motion.div>
          </Reveal>
        ))}
      </motion.div>        
    </div>
  );
};

export default Experience;