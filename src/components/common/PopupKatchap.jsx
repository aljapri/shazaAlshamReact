"use client";

import { useState, useEffect } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenPopup", "true");
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-center"
      dir="rtl"
    >
      <div className="bg-red-700 rounded-lg shadow-lg p-6 relative w-96">
        <button
          onClick={closePopup}
          className="absolute top-2 left-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-lg font-bold mb-4 text-white ">شركه شذى الشام </h2>
        <p className=" text-white">
          شارك الآن في السحب الكبير لفرصة الفوز بجوائز رائعة مع شذى الشام
        </p>
        <div className=" flex flex-row justify-center items-center mt-10">
            <img className="rounded-full" src="https://shaza.alsham.gift.urfasoft.net/photos/ketchup.png" width={100} height={100} alt="katchap" />
        </div>
        <div className="w-full mt-10 flex flex-row items-center justify-center">
          <a
            href="https://shaza.alsham.gift.urfasoft.net/ketchup-gift"
            target="_blank"
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-200"
          >
            ادخل السحب الآن
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;