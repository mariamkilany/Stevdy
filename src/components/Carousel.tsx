import React, { useState } from "react";

interface CarouselProps {
  elements: JSX.Element[];
}

export const Carousel: React.FC<CarouselProps> = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div
          className="flex justify-center gap-4 items-end transition-transform p-5 duration-300"
          style={{
            width: `${elements.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / elements.length)
            }%)`,
          }}
        >
          {elements.map((element, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
              style={{ width: `${100 / elements.length}%` }}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full flex justify-center mt-4">
        {elements.map((_, index) => (
          <button
            key={index}
            className={`mx-2 w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
              index === currentIndex ? "bg-gridiantColor2" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
