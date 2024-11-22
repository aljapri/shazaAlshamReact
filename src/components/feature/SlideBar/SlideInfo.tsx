import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";

function SlideInfo({ transitionData, currentSlideData }) {
  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
    </>
  );
}

export default SlideInfo;
