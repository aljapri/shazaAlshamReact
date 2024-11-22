import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion"; // Ensure this is correctly imported

// Higher-Order Component (HOC) to wrap a component with animation and section
const StarWrapper = (Component) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // Animation variants
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id="star-section">
          &nbsp;
        </span>

        {/* Render the wrapped component */}
        <Component />
      </motion.section>
    );
  };
};

export default StarWrapper;
