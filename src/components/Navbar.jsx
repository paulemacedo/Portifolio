import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Logo from '../assets/logo.svg';
import usFlag from '../assets/flags/USA.svg';
import brFlag from '../assets/flags/BR.svg';

const Navbar = () => {
 const [nav, setNav] = useState(false);
 const [langDropdown, setLangDropdown] = useState(false);
 const { t, i18n } = useTranslation();

 const toggleNav = () => {
   setNav(!nav);
 };

 const closeNav = () => {
   setNav(false);
 };

 const toggleLangDropdown = () => {
   setLangDropdown(!langDropdown);
 };

 const handleLanguageChange = (lng) => {
   i18n.changeLanguage(lng);
   setLangDropdown(false);
 };

 const menuVariants = {
   Open: {
     x: 0,
     transition: {
       stiffness: 20,
       damping: 15,
     },
   },
   Closed: {
     x: '-100%',
     transition: {
       stiffness: 20,
       damping: 15,
     },
   },
 };

 return (
   <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
     <div className='max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20'>
       <a href='#'>
         <img src={Logo} alt="logo" className='w-10 h-10' />
       </a>
       <ul className='hidden md:flex gap-12 z-10 cursor-pointer items-center'>
         <li><Link to='education' smooth={true} offset={-80} duration={500}>{t('navbar.education')}</Link></li>
         <li><Link to='skills' smooth={true} offset={-50} duration={500}>{t('navbar.skills')}</Link></li>
         <li><Link to='portfolio' smooth={true} offset={-50} duration={500}>{t('navbar.portfolio')}</Link></li>
         <li><Link to='experience' smooth={true} offset={-80} duration={500}>{t('navbar.experience')}</Link></li>
         <li><Link to='about' smooth={true} offset={-50} duration={500}>{t('navbar.contact')}</Link></li>
         <li className='relative group'>
           <div className='flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer'>
             <img 
               src={i18n.language === 'en' ? usFlag : brFlag} 
               alt={i18n.language === 'en' ? 'EN' : 'PT-BR'} 
               className='w-5 h-5 object-cover rounded-sm' 
             />
             {i18n.language === 'en' ? 'EN' : 'PT'}
           </div>

           <div className='invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 top-full mt-1 rounded-lg shadow-xl border border-purple-700 transition-all duration-200 min-w-[170px]'>
             <div 
               onClick={() => handleLanguageChange('en')} 
               className='flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 rounded-t-lg'
             >
               <img src={usFlag} alt="English" className='w-5 h-5 object-cover rounded-sm' /> 
               English
             </div>
             <div 
               onClick={() => handleLanguageChange('pt')} 
               className='flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 rounded-b-lg'
             >
               <img src={brFlag} alt="Português" className='w-5 h-5 object-cover rounded-sm' /> 
               Portuguese
             </div>
           </div>
         </li>
       </ul>

       <div className='md:hidden flex items-center'>
         <div className='mr-4 relative'>
           <div 
             className='flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer'
             onClick={toggleLangDropdown}
           >
             <img 
               src={i18n.language === 'en' ? usFlag : brFlag} 
               alt={i18n.language === 'en' ? 'EN' : 'PT-BR'} 
               className='w-5 h-5 object-cover rounded-sm' 
             />
             {i18n.language === 'en' ? 'EN' : 'PT'}
           </div>

           {langDropdown && (
             <div className='absolute right-0 top-full mt-1 bg-gray-900 rounded-lg shadow-xl border border-purple-700 transition-all duration-200 min-w-[170px]'>
               <div 
                 onClick={() => handleLanguageChange('en')} 
                 className='flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 rounded-t-lg'
               >
                 <img src={usFlag} alt="English" className='w-5 h-5 object-cover rounded-sm' /> 
                 English
               </div>
               <div 
                 onClick={() => handleLanguageChange('pt')} 
                 className='flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 rounded-b-lg'
               >
                 <img src={brFlag} alt="Português" className='w-5 h-5 object-cover rounded-sm' /> 
                 Portuguese
               </div>
             </div>
           )}
         </div>
         <div onClick={toggleNav} className='z-50 text-gray-200'>
           {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
         </div>
       </div>

       <motion.div
         initial={false}
         animate={nav ? 'Open' : 'Closed'}
         variants={menuVariants}
         className='fixed top-0 left-0 w-full min-h-screen bg-gray-900 z-40'
       >
         <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
           <li><Link to="education" onClick={closeNav} smooth={true} offset={-80} duration={500}>{t('navbar.education')}</Link></li>
           <li><Link to="skills" onClick={closeNav} smooth={true} offset={-80} duration={500}>{t('navbar.skills')}</Link></li>
           <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={-80} duration={500}>{t('navbar.portfolio')}</Link></li>
           <li><Link to="experience" onClick={closeNav} smooth={true} offset={-80} duration={500}>{t('navbar.experience')}</Link></li>
           <li><Link to="about" onClick={closeNav} smooth={true} offset={-50} duration={500}>{t('navbar.contact')}</Link></li>
         </ul>
       </motion.div>
     </div>
   </div>
 );
};

export default Navbar;