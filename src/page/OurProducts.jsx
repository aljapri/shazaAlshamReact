import { useLocation } from "react-router-dom";
import enTranslation from "../locales/en/translation.json";
import arTranslation from "../locales/ar/translation.json";
import Ketchup from "./Ketchup";

export default function Home() {
  const location = useLocation();
  const pathName = location.pathname;
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation; // Select the appropriate messages

  const renderSection = (title, products, id) => (
    <div className="mb-40 gap-10 mt-10 " id={id}>
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-start">
        {title}
      </h2>
      <div className="flex flex-row flex-wrap gap-6 justify-center xl:justify-normal">
        {products.map((product) => (
          <div key={product.id} className="group relative w-[250px]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-[250px] transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            {/* <p className="text-center mt-2">{product.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto  ">
      <div className="px-10">
        <Ketchup />
      </div>
      {renderSection(
        messages.products.jams,
        messages.productCategories.jams,
        "jams"
      )}
      {renderSection(
        messages.products.olive,
        messages.productCategories.olive,
        "olives"
      )}
      {renderSection(
        messages.products.peanuts,
        messages.productCategories.peanuts,
        "peans"
      )}
      {renderSection(
        messages.products.pinks,
        messages.productCategories.pinks,
        "pinks"
      )}
    </div>
  );
}
