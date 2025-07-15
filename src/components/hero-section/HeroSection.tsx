// import Image from "next/image";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Crousel from "../crousel/Crousel";

function HeroSection() {
  return (
    <div className="flex items-center gap-6">
      <div className="w-[230px] hidden lg:block min-w-[230px] h-[400px] bg-[#00D0FF] rounded-2xl">
        <ul className="px-2 py-3 text-white">
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            All
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Electronics
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Fruits & Vegetables
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Groceries
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Footware
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Fashion & Clothes
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Toys & Games
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Furniture & Woods
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Plastic Accessories
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Beauty & Cosmotics
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Household & Essentials
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Drinks & Beverage
          </li>
          <li className="py-1 hover:bg-[#56E0FF] cursor-pointer px-3 rounded-md text-sm">
            Others
          </li>
        </ul>
      </div>
      {/* <div className="bg-[#efefef] h-[400px] w-full rounded-2xl relative">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <Image src="/f_vegi.png" alt="img" width={500} height={280} />
        </div>
        <div className="absolute left-10 top-0 bottom-0 my-auto h-fit">
          <span className="text-xs px-2.5 py-1 bg-[#FFC250] rounded-full">
            Major discount is running hurry up!
          </span>
          <h1 className="text-5xl font-black mt-1 mb-3.5">Hello dear user</h1>
          <p className="text-black/50 max-w-[70%]">
            We know what you are doing. Perspi rit provident, ducimus numquam
            eaque necessitatibus ero?
          </p>
        </div>
        <div className="absolute left-0 right-0 mx-auto bottom-4 flex items-center justify-center gap-2">
          <div className="w-7 h-7 bg-[#00d0ff] rounded-full flex items-center justify-center cursor-pointer">
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
          <div className="w-7 h-7 bg-[#00d0ff] rounded-full flex items-center justify-center cursor-pointer">
            <FiChevronRight size={18} className="text-white" />
          </div>
        </div>
      </div> */}
      <Crousel />
    </div>
  );
}

export default HeroSection;
