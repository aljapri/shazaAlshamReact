import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import OurProducts from "./page/OurProducts";
import PrivacyAndQuality from "./page/PrivacyAndQuality";
import Careers from "./page/JobApportunities.jsx";
import './i18n.js'; // Your i18next configuration
import { I18nextProvider } from "react-i18next";
import i18n from './i18n'; // Import i18n instance
import { useEffect } from "react";
import NotFound from "./page/NotFound.jsx";
import SendToHome from "./page/SendToHome.jsx";
import Brochure from "./page/Brochure.jsx";
import Ketchup from "./page/Ketchup.jsx";

const App = () => {
  // A hook to synchronize language with the route and set direction
  const SyncLanguageWithRoute = () => {
    const location = useLocation();

    useEffect(() => {
      const pathLanguage = location.pathname.split("/")[1];
      const supportedLanguages = ["en", "ar"]; // Define supported languages
      const isRTL = pathLanguage === "ar";

      if (supportedLanguages.includes(pathLanguage)) {
        i18n.changeLanguage(pathLanguage); // Change language in i18n
        document.documentElement.lang = pathLanguage; // Set lang attribute
        document.documentElement.dir = isRTL ? "rtl" : "ltr"; // Set dir attribute
      } else {
        i18n.changeLanguage("en"); // Default to English if not specified
        document.documentElement.lang = "en"; // Default lang attribute
        document.documentElement.dir = "ltr"; // Default dir attribute
      }
    }, [location]);

    return null;
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <SyncLanguageWithRoute />
        <Routes>
          {/* Root path for Home page */}
          <Route path="/" element={<Layout />}>
            <Route index element={<SendToHome />} />
          </Route>

          {/* Language-specific routes (e.g., /en, /ar) */}
          <Route path="/:lang/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="products" element={<OurProducts />} /> 
            <Route path="privacy&quality" element={<PrivacyAndQuality />} /> 
            <Route path="works" element={<Careers />} />
            <Route path="brochure" element={<Brochure />} />
            <Route path="ketchup" element={<Ketchup />} />
          </Route>

          {/* Fallback for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
