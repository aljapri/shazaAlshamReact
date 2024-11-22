import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // React Router hooks
import Logo from "../common/Logo";
import { TfiAlignJustify } from "react-icons/tfi";
import { MdOutlineLanguage } from "react-icons/md";
import enTranslation from "../../locales/en/translation.json";
import arTranslation from "../../locales/ar/translation.json";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation; // Select appropriate messages
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

  // Handle language change
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    const path = pathName.slice(4); // Get the rest of the path excluding the language
    const newPath = `/${newLanguage}/${path}`; // Construct the new path with the selected language
    navigate(newPath);
  };

  const handleLinkChange = (menuLink) => {
    const newLink = `/${currentLanguage}/${menuLink}`;
    navigate(newLink);
  };

  return (
    <header className="bg-white dark:bg-darkBackground shadow-xl z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Logo />
        
        {/* Menu */}
        <nav dir={currentLanguage === "ar" ? "ltr" : "rtl"}>
          <ul className="hidden xl:flex gap-x-5">
            {messages.menus.map((menu) => (
              <li
                key={menu.link}
                className="list-none cursor-pointer relative text-gray-900 dark:text-gray-200 hover:text-blue-600"
                onClick={() =>
                  menu.link != "products" && handleLinkChange(menu.link)
                }
                onMouseEnter={() =>
                  menu.link === "products" && setIsDropdownOpen(true)
                }
                onMouseLeave={() =>
                  menu.link === "products" && setIsDropdownOpen(false)
                }
              >
                {menu.name}
                {menu.link === "products" && isDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white dark:bg-darkBackground shadow-lg p-2 z-50">
                    <li
                      onClick={() => handleLinkChange("ketchup")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {currentLanguage === "ar" ? "الكتشب" : "ketchup"}
                    </li>
                    <li
                      onClick={() => handleLinkChange("products")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {currentLanguage === "ar" ? "المنتجات" : "products"}
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Selector */}
        <div className="relative flex flex-row justify-center items-center gap-x-2 sm:text-xl text-sm">
          <MdOutlineLanguage size={25} className="dark:text-white text-dark" />
          <select
            title="language"
            onChange={handleLanguageChange}
            value={currentLanguage} // Bind to current language
            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1"
          >
            <option value="ar">{messages.languages.ar}</option>
            <option value="en">{messages.languages.en}</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden ml-4 text-gray-900 dark:text-white"
          title={messages.phone}
        >
          <TfiAlignJustify
            size={20}
            cursor="pointer"
            className="dark:text-white"
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
          <ul className="xl:hidden bg-white px-5 dark:bg-darkBackground shadow-md flex flex-col-reverse">
            {messages.menus.map((menu) => (

              <li
                key={menu.link}
                className="list-none mb-5 cursor-pointer text-gray-900 dark:text-gray-200 hover:text-blue-600"
                onClick={() =>
                  menu.link != "products" && handleLinkChange(menu.link)
                }
              >
                {menu.name}
                {menu.link === "products" && (
                  <ul className="bg-white dark:bg-darkBackground shadow-lg mt-2">
                    <li
                      onClick={() => handleLinkChange("ketchup")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {currentLanguage === "ar" ? "الكتشب" : "ketchup"}
                    </li>
                    <li
                      onClick={() => handleLinkChange("products")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {currentLanguage === "ar" ? "المنتجات" : "products"}
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
