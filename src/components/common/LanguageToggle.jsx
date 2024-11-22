import  { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Handle language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setCurrentLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    // Update the HTML `lang` and `dir` attributes
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Language options
  const messages = {
    languages: {
      ar: 'العربية',
      en: 'English',
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="relative flex flex-row justify-center items-center gap-x-2 sm:text-xl text-sm">
        <MdOutlineLanguage size={25} className="dark:text-white text-dark" />
        <select
          title="language"
          onChange={handleLanguageChange}
          value={currentLanguage} // Bind to the current language
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1"
        >
          <option value="ar">{messages.languages.ar}</option>
          <option value="en">{messages.languages.en}</option>
        </select>
      </div>
      <h1 className="text-2xl mt-6">{t('welcome')}</h1>
    </div>
  );
};

export default LanguageToggle;
