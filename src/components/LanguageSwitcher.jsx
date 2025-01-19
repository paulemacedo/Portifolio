import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import usFlag from '../assets/flags/USA.svg';
import brFlag from '../assets/flags/BR.svg';

const LanguageSwitcher = ({ className }) => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={i18n.language === 'en' ? usFlag : brFlag}
          alt={i18n.language === 'en' ? 'EN' : 'PT-BR'}
          className="w-5 h-5 object-cover rounded-sm"
        />
        {i18n.language === 'en' ? 'EN' : 'PT'}
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-1 bg-gray-900 rounded-lg shadow-xl border border-purple-700 transition-all duration-200 min-w-[170px]">
          <div
            onClick={() => handleLanguageChange('en')}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 rounded-t-lg"
          >
            <img src={usFlag} alt="English" className="w-5 h-5 object-cover rounded-sm" />
            English
          </div>
          <div
            onClick={() => handleLanguageChange('pt')}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 rounded-b-lg"
          >
            <img src={brFlag} alt="Português" className="w-5 h-5 object-cover rounded-sm" />
            Portuguese
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
