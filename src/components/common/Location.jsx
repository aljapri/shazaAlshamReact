import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import StarWrapper from "../../hoc/SectionWrapper";

function Location() {
  return (
    <motion.div
      variants={fadeIn("down", "tween", 0.2, 1)}
      className="pb-20"
    >
      <div
        className="container-xxl md:px-28"
        data-wow-delay="0.1s"
        style={{ marginBottom: "-6px" }}
      >
        <iframe
          className="w-full"
          style={{ height: "450px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6497253902216!2d36.296726423525705!3d33.5104892733657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e732c708ea75%3A0x6869a63ff97a96!2z2KfZhNit2YTYqNmI2YbZitiMINiv2YXYtNmC2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2sfr!4v1725995139831!5m2!1sar!2sfr"
          aria-hidden="false"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default StarWrapper(Location, "location");
