// import  { useState } from "react";
import SocilaMedia from "../../common/SocilaMedia";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import enTranslation from '../../../locales/en/translation.json';
import arTranslation from '../../../locales/ar/translation.json';

import { Helmet } from "react-helmet";
import { useState } from "react";
import { useLocation } from "react-router-dom";

// Fade-in animation configuration
const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 1) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

const ContactUsComponents = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arTranslation : enTranslation; // Select appropriate messages
  const contactMessages = messages.contactUs;

  const [purchase, setPurchase] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    product: "",
    quantity: "",
    country: "",
    city: "",
    clientAddress: "",
    message: "",
  });

  const handlePurches = (value) => {
    setPurchase(value === "Purchase" || value === "شراء");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           to: formData.email,
//           subject: formData.subject,
//           text: formData.message,
//           html: `<p>Name: ${formData.name}</p>
//                  <p>Email: ${formData.email}</p>
//                  <p>Message: ${formData.message}</p>
//                  ${
//                    purchase
//                      ? `<p>Product: ${formData.product}</p>
//                         <p>Quantity: ${formData.quantity}</p>
//                         <p>Country: ${formData.country}</p>
//                         <p>City: ${formData.city}</p>
//                         <p>Address: ${formData.clientAddress}</p>`
//                      : ""
//                  }`,
//         }),
//       });

//       if (response.ok) {
//         alert("Email sent successfully");
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           product: "",
//           quantity: "",
//           country: "",
//           city: "",
//           clientAddress: "",
//           message: "",
//         });
//       } else {
//         const result = await response.json();
//         alert(`Failed to send email: ${result.error}`);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Error sending email");
//     }
//   };

  return (
    <motion.div
      className="py-12 flex flex-col md:px-28"
      variants={fadeIn("down", "tween", 0.2, 1)}
      id="contactUs"
    >
      <Helmet>
        <title>{contactMessages.title} | شذا الشام</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10 max-w-lg">
          <h1 className="text-4xl font-bold mb-3 text-gray-800 dark:text-white">
            {contactMessages.title}
          </h1>
          <p className="text-gray-600 dark:text-white">
            {contactMessages.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="bg-primary dark:bg-[#0D1B2A] text-white flex flex-col justify-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.title}
            </h5>
            <p className="mb-4">
              <FaPhoneAlt className="inline-block mr-3 ml-3" />
              {contactMessages.phone}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.emailLabel}
            </h5>
            <p className="mb-4">
              <FaEnvelope className="inline-block mr-3 ml-3" />
              {contactMessages.email}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.address}
            </h5>
            <p className="mb-4">
              <FaMapMarkerAlt className="inline-block mr-3 ml-3" />
              {contactMessages.address1}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.followUs}
            </h5>
            <div className="flex space-x-2 mt-2 ">
              <SocilaMedia />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p
              className="mb-4 text-gray-700 dark:text-white"
              dangerouslySetInnerHTML={{ __html: contactMessages.contactForm }}
            />
            <form >
            <div className="grid grid-cols-1 gap-4">
      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 dark:text-white">
          {contactMessages.name}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={contactMessages.name}
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 dark:text-white">
          {contactMessages.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={contactMessages.emailLabel}
        />
      </div>

      {/* Subject Field */}
      <div className="flex flex-col">
        <label htmlFor="subject" className="text-gray-700 dark:text-white">
          {contactMessages.subject}
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => {
            handleChange(e);
            handlePurches(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {pathName.split("/")[1] === "ar" ? (
            <option value="">اختر الموضوع</option>
          ) : (
            <option value="">Choose the subject</option>
          )}
          {contactMessages.subjects.map((sub, index) => (
            <option key={index} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional Fields for Purchase */}
      {purchase && (
        <>
          <div className="flex flex-col">
            <label htmlFor="product" className="text-gray-700 dark:text-white">
              {contactMessages.product}
            </label>
            <select
              id="product"
              value={formData.product}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {pathName.split("/")[1] === "ar" ? (
                <option value="">اختر المنتج</option>
              ) : (
                <option value="">Choose the product</option>
              )}
              {contactMessages.pruchaseProducts.map((sub, index) => (
                <option key={index} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity" className="text-gray-700 dark:text-white">
              {contactMessages.quantity}
            </label>
            <input
              type="number"
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* Country, City, and Address */}
          {/* Similar to above */}
        </>
      )}

      {/* Message Field */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-gray-700 dark:text-white">
          {contactMessages.message}
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={contactMessages.message}
          rows={8}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-primary dark:bg-[#0D1B2A] text-white py-3 px-5 rounded-md hover:bg-green-700"
      >
        {contactMessages.sendMessage}
      </button>
    </div>
              
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsComponents;
