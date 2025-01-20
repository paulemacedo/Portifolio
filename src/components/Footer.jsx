import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='max-w-[1300px] mx-auto flex justify-between gap-8 p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='font-semibold text-gray-200 text-2xl'>{t('footer.name')}</h3>
        
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href='https://github.com/paulemacedo' target='_blank' rel='noopener noreferrer'><FaGithubSquare /></a>
          <a href='https://linkedin.com/in/paulemacedo' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
        </div>
      </div>
      <p className='text-gray-400'>
        {t('footer.rights')}
      </p>
    </div>
  );
};

export default Footer;