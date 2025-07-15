import FeaturedProductList from "@/components/featured-product-list/FeaturedProductList";
import Image from "next/image";
import React from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

function SingleProductPage() {
  return (
    <div className="my-4 mx-10 ">
      <div className="flex gap-3">
        <div className="relative w-full">
          <Image
            src="/coffee-seeds.jpg"
            width={500}
            height={500}
            className="w-full h-[500px] rounded-2xl"
            alt="photo"
          />

          <div className="bg-[#00d0ff] flex items-center cursor-pointer absolute top-0 bottom-0 left-10 my-auto justify-center text-white w-10 h-10 rounded-full">
            <FiChevronLeft size={24} />
          </div>

          <div className="bg-[#00d0ff] flex items-center absolute cursor-pointer top-0 bottom-0 right-10 my-auto justify-center text-white w-10 h-10 rounded-full">
            <FiChevronRight size={24} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/coffee-seeds.jpg"
            className="rounded-2xl"
            width={200}
            height={100}
            alt="photo"
          />
          <Image
            src="/coffee-seeds.jpg"
            className="rounded-2xl"
            width={200}
            height={100}
            alt="photo"
          />
          <Image
            src="/coffee-seeds.jpg"
            className="rounded-2xl"
            width={200}
            height={100}
            alt="photo"
          />
          <Image
            src="/coffee-seeds.jpg"
            className="rounded-2xl"
            width={200}
            height={100}
            alt="photo"
          />
        </div>
      </div>
      <div className="my-8">
        <p className="text-lg text-[#00d0ff] font-medium">
          Fruits & Vegetables
        </p>
        <h1 className="text-4xl font-black text-black/85">
          Super sweet and soft kasmiri apple
        </h1>
        <div className="flex items-center gap-1.5 my-4">
          <div className="flex items-center gap-0.5">
            <FiStar size={22} className="fill-yellow-500 text-yellow-500" />
            <FiStar size={22} className="fill-yellow-500 text-yellow-500" />
            <FiStar size={22} className="fill-yellow-500 text-yellow-500" />
            <FiStar size={22} className="fill-yellow-500 text-yellow-500" />
            <FiStar size={22} />
          </div>
          <span className="text-lg">(5 star)</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-black/80">$35.7</span>
            <span className="line-through text-2xl font-semibold text-black/50">
              $15.5
            </span>
          </div>
          <span className="text-red-500 text-xl">20% off</span>
        </div>
        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center gap-1">
            <button className="px-4 py-1 rounded-2xl cursor-pointer text-lg bg-[#00d0ff] text-white">
              -
            </button>
            <button className="px-10 py-1 rounded-2xl text-lg bg-[#efefef] text-black/85">
              1
            </button>
            <button className="px-4 py-1 rounded-2xl cursor-pointer text-lg bg-[#00d0ff] text-white">
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-10 h-10 rounded-full cursor-pointer bg-[#00d0ff] text-white">
            Add to cart
          </button>
          <button className="px-10 h-10 rounded-full cursor-pointer bg-[#00d0ff] text-white">
            Add to wishlist
          </button>
        </div>
        <div className="my-10">
          <div className="flex items-center gap-4">
            <button className="border-b-2 pb-2">Product Details</button>
            <button className="pb-2">Product Details</button>
            <button className="pb-2">Product Details</button>
            <button className="pb-2">Product Details</button>
          </div>
        </div>
        <div>
          <FeaturedProductList />
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
