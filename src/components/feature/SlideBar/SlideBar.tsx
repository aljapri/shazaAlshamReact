import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";
import Slides from "./Slides";
import SlideInfo from "./SlideInfo";
import Controls from "./Controls";
import enTranslation from "../../../locales/en/translation.json";
import arTranslation from "../../../locales/ar/translation.json";
import { useLocation } from "react-router-dom";

function SlideBar() {
  const location = useLocation();
  const pathName = location.pathname;

  // Derive the current language from the URL path
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en";

  // State to store the translated messages
  const [messages, setMessages] = useState<any>(
    currentLanguage === "ar" ? arTranslation : enTranslation
  );

  // State to manage the slider data
  const [sliderData, setSliderData] = useState<any>(messages.slides);
  const [data, setData] = useState<any>(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState<any>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState<any>({
    data: sliderData[0],
    index: 0,
  });

  // Update messages and slider data when language changes
  useEffect(() => {
    const updatedMessages = currentLanguage === "ar" ? arTranslation : enTranslation;
    const updatedSliderData = updatedMessages.slides;

    setMessages(updatedMessages);
    setSliderData(updatedSliderData);
    setData(updatedSliderData.slice(1));
    setTransitionData(updatedSliderData[0]);
    setCurrentSlideData({
      data: updatedSliderData[0],
      index: 0,
    });
  }, [currentLanguage]);

  const handleCardClick = (cardData: any) => {
    setCurrentSlideData({
      data: cardData,
      index: sliderData.findIndex((ele: any) => ele.img === cardData.img),
    });
    setTransitionData(cardData);

    const newArr = sliderData.filter((ele: any) => ele.img !== cardData.img);
    setData(newArr);
  };

  return (
    <main
      className={`
        relative min-h-screen select-none overflow-hidden text-white antialiased bg-slate-950
      `}
      id="home"
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} handleCardClick={handleCardClick} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={sliderData[0]}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

export default SlideBar;
