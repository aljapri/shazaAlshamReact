import React from "react";
import SliderCard from "./SliderCard";

function Slides({ data, handleCardClick }) {
  return (
    <div className="flex w-full gap-6">
      {data.map((item) => (
        <SliderCard
          key={item.img}
          data={item}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default Slides;
