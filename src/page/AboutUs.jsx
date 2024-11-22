import { useLocation } from "react-router-dom";
import enTranslation from '../locales/en/translation.json';
import arTranslation from '../locales/ar/translation.json';

export default function About() {
  const location = useLocation();
  const pathName = location.pathname;
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation; // Select the appropriate messages

  return (
    <div
      className={`min-h-screen py-10 ${
        currentLanguage === "ar" ? "rtl" : ""
      } `}
    >
        {/* <h1>{messages.about.title}</h1> */}
      <div className="container mx-auto px-10">
        <div className="text-4xl font-bold text-center bg-primary opacity-70 dark:text-white text-green-700 mb-10 w-full flex flex-row justify-center items-center">
          <div>
            <img
              src="/logo.png"
              alt="Shaza Alsham"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">
            {messages.about.sections.whoWeAre.title}
          </h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.whoWeAre.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">
            {messages.about.sections.vision.title}
          </h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.vision.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">
            {messages.about.sections.mission.title}
          </h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.mission.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">
            {messages.about.sections.values.title}
          </h2>
          <ul className="list-disc dark:text-white list-inside text-gray-700 leading-relaxed">
            {messages.about.sections.values.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">
            {messages.about.sections.history.title}
          </h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.history.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">
            {messages.about.sections.services.title}
          </h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.services.content}
          </p>
        </section>
      </div>
    </div>
  );
}
