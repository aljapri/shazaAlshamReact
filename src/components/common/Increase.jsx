import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; // Assuming you still use the same motion utility

// eslint-disable-next-line react/prop-types
const Increase = ({ index, Icon, target, title }) => {
  const [count, setCount] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isVisible && count < target) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Adjust the interval for smoother or faster counting
    }
    return () => clearInterval(timer);
  }, [isVisible, count]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="flex-col dark:text-white justify-start items-start inline-flex"
      key={index}
    >
      <Icon className="text-primary dark:text-white text-4xl mb-2" />
      <h3 className="text-gray-900 dark:text-white text-4xl font-bold font-manrope leading-normal">
        {count}+
      </h3>
      <h6 className="text-gray-500 dark:text-white text-base font-normal leading-relaxed">
        {title}
      </h6>
    </motion.div>
  );
};

export default Increase;
