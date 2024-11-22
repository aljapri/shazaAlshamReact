import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import enTranslation from '../locales/en/translation.json';
import arTranslation from '../locales/ar/translation.json';

export default function Careers() {
  const location = useLocation();
  const pathName = location.pathname;
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation; // Select the appropriate messages

  const jobs = messages.careers.jobs;

  return (
    <div className="min-h-screen  py-10 dark:bg-darkBackground dark:text-white">
      <Helmet>
        <title>{messages.careers.title}</title>
      </Helmet>
      <div className="container mx-auto px-4 dark:text-white">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10 dark:text-white">
          {messages.careers.header}
        </h1>
        <p className="text-center text-gray-600 mb-12 dark:text-white">
          {messages.careers.intro}
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 dark:bg-darkBlue">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">
                {job.title}
              </h2>
              {/* <p className="text-green-600 mb-2 dark:text-white">{job.location}</p> */}
              <p className="text-gray-700 mb-4 dark:text-white">{job.description}</p>
              <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">
                {currentLanguage === "ar" ? "المتطلبات:" : "Requirements:"}
              </h3>
              <ul className="list-disc list-inside dark:text-white text-gray-700 mb-4">
                {job.requirements.map((requirement, reqIndex) => (
                  <li key={reqIndex}>{requirement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
