import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

function DailyBestDealCard({ image }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border-[1px] border-black/20">
      <div className="w-full h-full">
        <Image
          alt="img"
          src={image}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-full">
        <div>
          <p className="text-xs text-[#00d0ff]">Groceries</p>
          <h3>Godwari rice</h3>
        </div>
        <div className="text-sm flex items-center gap-1 mt-2">
          <span className="text-black/80 font-semibold">$21.5</span>
          <span className="text-black/40 font-semibold line-through">$15</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="text-xs rounded-full px-3 py-1.5 text-black/75 bg-[#efefef]">
            02:18:12
          </button>
          <button className="text-xs rounded-full px-3 py-1.5 text-white bg-[#00d0ff]">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default DailyBestDealCard;
