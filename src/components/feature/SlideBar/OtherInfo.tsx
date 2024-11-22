import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }) {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-col">
      <AnimatedText
        className="my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px] pl-6 pr-6"
        data={data?.title}
      />
      <AnimatedText
        className="text-[#D5D5D6] text-2xl pl-6 pr-6"
        data={data?.description}
      />
    </motion.div>
  );
}

export default OtherInfo;

function AnimatedText({ data, className }) {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={className} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
}
