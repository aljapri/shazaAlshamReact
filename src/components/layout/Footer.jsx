import  { useState, useEffect } from "react";
import enTranslation from "../../locales/en/translation.json";
import arTranslation from "../../locales/ar/translation.json";
import SocilaMedia from "../common/SocilaMedia";
import Logo from "../common/Logo";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const pathLanguage = location.pathname.split("/")[1];
    setCurrentLanguage(pathLanguage === "ar" ? "ar" : "en");
  }, [location.pathname]);

  const messages = currentLanguage === "ar" ? arTranslation : enTranslation;
  const footerMessages = messages.footer;

  const handleLinkChange = (menuLink) => {
    navigate(`/${currentLanguage}/${menuLink}`);
  };

  return (
    <footer className="bg-zinc-50 dark:bg-dark dark:text-white text-center text-surface/75 lg:text-left mt-2">
      <div className="mx-6 py-10 text-center md:text-left" dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className=" flex flex-row justify-center items-center md:justify-normal md:items-baseline">
            <Logo />
            </div>
            <p className={`${currentLanguage === "ar" ? "text-right" : ""}`}>
              {footerMessages.companyDescription}
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {footerMessages.usefulLinks}
            </h6>
            <ul className={`${currentLanguage === "ar" ? "text-right" : ""} flex flex-col justify-center items-center sm:flex sm:flex-col sm:justify-normal sm:items-start`}>
              {messages.menus.map((menu) => (
                <li
                  key={menu.link}
                  onClick={() => handleLinkChange(menu.link)}
                  className="list-none cursor-pointer text-gray-900 dark:text-gray-200 hover:text-blue-600"
                >
                  {menu.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {footerMessages.contact}
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              {footerMessages.address}
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              {footerMessages.email}
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </span>
              {footerMessages.phone}
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0016.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25z" clipRule="evenodd"/>
</svg>

              </span>
              {footerMessages.fax}
            </p>
          </div>

          <div className="flex items-center flex-col">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {footerMessages.socialMedia}
            </h6>
            <SocilaMedia />
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center flex flex-row justify-center items-center dark:border-t-2">
        <span>© 2023 Copyright:</span>
        <p className="font-semibold">Shaza Alsham</p>
      </div>
    </footer>
  );
};

export default Footer;
