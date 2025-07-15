import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  image: string;
};

function ProductCard({ image }: Props) {
  return (
    <div className="flex flex-col border rounded-2xl border-gray-200 w-fit p-4 gap-5 hover:bg-[#f8fdff] hover:border-[#00D0FF]">
      <div className="flex items-center gap-1">
        <span className="py-0.5 px-2 rounded-full text-[11px] bg-green-200 text-black/95">
          Buy 1 Get 1 Free
        </span>
        <span className="py-0.5 px-2 text-[11px] rounded-full bg-red-200 text-black/95">
          Out of Stock
        </span>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image src={image} width={200} height={200} alt="product image" />
      </div>
      <div>
        <p className="text-xs text-[#00D0FF]">Fruits & Vegetables</p>
        <h2 className="text-lg font-medium">Kasmiri Apple</h2>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 ">
            <p className="text-lg font-medium">$21.5</p>
            <p className="text-lg text-black/50 font-medium line-through">
              $15
            </p>
          </div>
          <Button size="sm" className="rounded-full">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
