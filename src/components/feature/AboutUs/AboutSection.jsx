import { FaBuilding, FaProjectDiagram, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { SectionWrapper } from "../../../hoc";
import enTranslation from '../../../locales/en/translation.json';
import arTranslation from '../../../locales/ar/translation.json';
import { useLocation } from "react-router-dom";
import Increase from "../../common/Increase";

const AboutSection = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation; // Select the appropriate messages
  const aboutSectionInfo = messages.aboutSection.info;

  return (
    <section className="sm:py-40 relative" id="aboutUs">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto ">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1)}
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
            >
              <img
                className="rounded-xl"
                src="/about.jpg"
                alt="About Us image"
                width={500}
                height={500}
              />
            </motion.div>
            <motion.div variants={fadeIn("down", "tween", 0.6, 1)}>
              <img
                className="sm:ml-0 ml-auto rounded-xl hidden sm:block"
                src="/about-1.jpg"
                alt="About Us image"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center dark:text-white">
                  {messages.aboutSection.heading}
                </h2>
                <p className="dark:text-white">
                  {messages.aboutSection.paragraph}
                </p>
              </div>

              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex space-x-5 dark:text-white">
                {aboutSectionInfo.map(({ number, title }, index) => (
                  <Increase
                    key={index}
                    index={index}
                    title={title}
                    target={number}
                    Icon={aboutUsInformation[index].Icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(AboutSection, "aboutSection");

const aboutUsInformation = [
  {
    number: "10+",
    title: "Years of Experience",
    Icon: FaBuilding,
  },
  {
    number: "20+",
    title: "Products",
    Icon: FaProjectDiagram,
  },
  {
    number: "52+",
    title: "Clients",
    Icon: FaSmile,
  },
];
