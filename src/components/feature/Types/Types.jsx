import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import StarWrapper from "../../../hoc/SectionWrapper";
import { Link, useLocation } from "react-router-dom";
import enTranslation from '../../../locales/en/translation.json';
import arTranslation from '../../../locales/ar/translation.json';

function Types() {
  const location = useLocation();
  const pathName = location.pathname;
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation; // Select the appropriate messages
  const products = messages.types.items;


  return (
    <div className="container mx-auto py-20" id="products">
      <div className="w-full">
        <div className="flex flex-wrap gap-5 items-end">
          <div className="w-full">
            <div
              className="w-full mb-10 mr-4 ml-4"
              data-wow-delay="0.1s"
              dir={pathName.split("/")[1] === "ar" ? "rtl" : "ltr"}
            >
              <h1 className="text-4xl font-bold mb-4 dark:text-white">{messages.types.header}</h1>
              <p className="text-gray-600 dark:text-white text-xl text-wrap ml-4">
                {messages.types.description}
              </p>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div id="tab-1" className="tab-pane active">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-3">
              {products.map((el, index) => {
                return (
                  <motion.div
                    key={el.id}
                    className="wow fadeInUp cursor-pointer"
                    data-wow-delay="0.3s"
                    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  >
                    <Link to={`/${pathName.split("/")[1]}/products/#${el.link}`}>
                      <div className="product-item">
                        <div className="relative bg-gray-100 overflow-hidden hover:rotate-3 transition-rotate whenHover transition-transform">
                          <img
                            className="w-full h-[450px] object-cover"
                            src={el.image}
                            alt={el.label}

                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 text-4xl flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                            {el.label}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarWrapper(Types, "types");
