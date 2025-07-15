import React from "react";
import BestDealCard from "../daily-best-deal-card/DailyBestDealCard";
import Image from "next/image";

function DailyBestDealList() {
  return (
    <div className="my-14">
      <h1 className="text-3xl text-black/75 font-medium mb-3">
        Featured Products
      </h1>
      <div className="w-full relative h-[200px] overflow-hidden bg-amber-600 rounded-tl-lg rounded-tr-4xl rounded-bl-4xl rounded-br-lg">
        <Image
          className="w-full h-full object-cover"
          src="/coffee-seeds.jpg"
          width={800}
          height={300}
          alt="imge details"
        />
        <div className="absolute text-center flex items-center justify-center flex-col text-white top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit">
          <h2 className="text-2xl font-semibold">100% Organic Coffee Beans.</h2>
          <p className="text-center text-sm font-normal w-[75%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptas qui placeat nostrum? Pariatur, quam.
          </p>
          <button className="flex items-center text-sm mt-3 px-4 py-2 bg-[#00d0ff] rounded-full text-white">
            Shop now
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4.5 gap-y-7 my-8">
        <BestDealCard image="/cucumber1.png" />
        <BestDealCard image="/rice.png" />
        <BestDealCard image="/jaket.png" />
        <BestDealCard image="/Bangles.png" />
        <BestDealCard image="/coca-cola.png" />
        <BestDealCard image="/shoes.png" />
        <BestDealCard image="/jeans.png" />
        <BestDealCard image="/apple.png" />
      </div>
    </div>
  );
}

export default DailyBestDealList;
