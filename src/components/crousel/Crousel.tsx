"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Crousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const handleSlideLeftClick = () => {
    console.log("working-left");
    setTranslateValue(slideIndex * 100);
    setSlideIndex((prev) => prev - 1);
    console.log(translateValue);
  };
  const handleSlideRightClick = () => {
    console.log("working-right");
    setSlideIndex((prev) => prev + 1);
  };
  console.log(slideIndex);
  return (
    // CONTAINRER
    <div className="h-[400px] bg-amber-200 relative">
      {/* SLIDER */}
      <div
        className={`w-w-full h-full flex items-center overflow-hidden translate-x-[${translateValue}]`}
      >
        {/* SLIDE */}
        <div className="min-w-full h-full ">
          <Image
            src="/coffee-seeds.jpg"
            alt="coffee img"
            width={600}
            height={200}
            className="w-full h-full rounded-2xl "
          />
        </div>
        {/* SLIDE */}
        <div className="min-w-full bg-green-500 h-full rounded-2xl">
          <Image
            src="/apple.png"
            alt="coffee img"
            width={600}
            height={200}
            className="w-full h-full rounded-2xl"
          />
        </div>
        {/* SLIDE */}
        <div className="min-w-full bg-green-500 h-full rounded-2xl">
          <Image
            src="/apple.png"
            alt="coffee img"
            width={600}
            height={200}
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="absolute left-0 right-0 mx-auto bottom-4 flex items-center justify-center gap-2">
        <div
          onClick={handleSlideLeftClick}
          className="w-7 h-7 bg-[#00d0ff] rounded-full flex items-center justify-center cursor-pointer"
        >
          <FiChevronLeft size={18} className="text-white" />
        </div>
        <div className="flex items-center justify-center px-3 py-2 gap-1.5 bg-[#85e9ff86] rounded-full">
          <div className="w-12 h-2.5 rounded-2xl bg-[#00d0ff]"></div>
          <div className="w-2.5 h-2.5 rounded-2xl bg-white"></div>
          <div className="w-2.5 h-2.5 rounded-2xl bg-white"></div>
          <div className="w-2.5 h-2.5 rounded-2xl bg-white"></div>
          <div className="w-2.5 h-2.5 rounded-2xl bg-white"></div>
          <div className="w-2.5 h-2.5 rounded-2xl bg-white"></div>
        </div>
        <div
          onClick={handleSlideRightClick}
          className="w-7 h-7 bg-[#00d0ff] rounded-full flex items-center justify-center cursor-pointer"
        >
          <FiChevronRight size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default Crousel;
