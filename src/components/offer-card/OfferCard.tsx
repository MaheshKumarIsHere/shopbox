import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  title: string;
  discountText: string;
  link: string;
  image: string;
};

function OfferCard({ item }: { item: Props }) {
  return (
    <div className="flex items-center justify-between w-full md:w-[40%] lg:w-1/4 gap-2 p-4 rounded-2xl bg-[#F3FDFF] border border-sky-100 cursor-pointer hover:border-sky-300">
      <div className="">
        <div className="flex flex-col mb-3">
          <p className="font-semibold text-nowrap">{item.title}</p>
          <p className="text-xs">{item.discountText}</p>
        </div>
        <Link
          href={item.link}
          className="mt-4 px-4 py-2 bg-[#00D0FF] text-xs text-white rounded-full"
        >
          Shop now
        </Link>
      </div>
      <div className="w-1/2 h-[110px]">
        <Image
          src={item.image}
          alt="img"
          className="w-full h-full object-cover"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}

export default OfferCard;
