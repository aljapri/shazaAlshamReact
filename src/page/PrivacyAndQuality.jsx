import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import enTranslation from '../locales/en/translation.json';
import arTranslation from '../locales/ar/translation.json';

export default function QualityPolicy() {
  // Determine the current language from the URL path
  const location = useLocation();
  const pathName = location.pathname;
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en";
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation;

  return (
    <div className="min-h-screen  flex items-center justify-center dark:bg-darkBackground dark:text-white">
      <Helmet>
        <title>{messages.qualityPolicy.title}</title>
      </Helmet>
      <div
        className={`bg-white shadow-lg rounded-lg p-8 max-w-3xl dark:bg-darkBlue ${
          currentLanguage === "ar" ? "text-right" : "text-left"
        } dark:text-white`}
      >
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6 dark:text-white">
          {messages.qualityPolicy.header}
        </h1>
        <p className="text-gray-700 mb-4 text-2xl leading-relaxed dark:text-white">
          {messages.qualityPolicy.commitmentsTitle}
        </p>
        <ul className="list-none list-inside mb-4 text-gray-700 dark:text-white">
          {messages.qualityPolicy.commitments.map((commitment, index) => (
            <li key={index} className="text-xl">
              {commitment}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl mt-20 font-semibold text-green-600 dark:text-white mb-4">
          {messages.qualityPolicy.foodSafetyTitle}
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-xl dark:text-white">
          {messages.qualityPolicy.foodSafetyContent}
        </p>
        <p className="text-gray-700 leading-relaxed dark:text-white text-xl">
          {messages.qualityPolicy.foodSafetyContentAdditional}
        </p>
      </div>
    </div>
  );
}
