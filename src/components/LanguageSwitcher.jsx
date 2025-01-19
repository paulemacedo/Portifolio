import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import usFlag from '../assets/flags/USA.svg';
import brFlag from '../assets/flags/BR.svg';
import deFlag from '../assets/flags/DE.svg';
import esFlag from '../assets/flags/ES.svg';

const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
    shortName: 'EN',
    flag: usFlag,
    alt: 'English'
  },
  {
    code: 'pt', 
    name: 'Portuguese',
    shortName: 'PT',
    flag: brFlag,
    alt: 'Português'
  },
  // {
  //   code: 'de',
  //   name: 'German',
  //   shortName: 'DE',
  //   flag: deFlag,
  //   alt: 'Deutsch'
  // },
  {
    code: 'es',
    name: 'Spanish',
    shortName: 'ES',
    flag: esFlag,
    alt: 'Español'
  }
];

const LanguageSwitcher = ({ className }) => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const currentLanguage = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0];

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.alt}
          className="w-5 h-5 object-cover rounded-sm"
        />
        {currentLanguage.shortName}
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-1 bg-gray-900 rounded-lg shadow-xl border-2 border-purple-700 transition-all duration-200 min-w-[170px]">
          {LANGUAGES.map((language, index) => (
            <div
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 ${
                index === 0 ? 'rounded-t-lg' : 'rounded-b-lg'
              }`}
            >
              <img src={language.flag} alt={language.alt} className="w-5 h-5 object-cover rounded-sm" />
              {language.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;