"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FiBarChart,
  FiBell,
  FiBookmark,
  FiLogOut,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiSearch,
  FiShoppingBag,
  FiSun,
  FiUser,
} from "react-icons/fi";

import Logo from "../Logo";
import LeftSideSheet from "../LeftSideSheet";

const searchData = [
  {
    id: 1,
    title: "Mobile Phone",
  },
  {
    id: 2,
    title: "Cookies",
  },
  {
    id: 3,
    title: "Men Shirt Slim",
  },
];

function Topbar() {
  const [openSearchOptions, setOpenSearchOptions] = useState(false);
  const [openLocationOptions, setOpenLocationOptions] = useState(false);
  const [openThemeOptions, setOpenThemeOptions] = useState(false);
  const [openNotificationOptions, setOpenNotificationOptions] = useState(false);
  const [openBookmarkOptions, setOpenBookmarkOptions] = useState(false);
  const [openShopingCartOptions, setOpenShopingCartOptions] = useState(false);
  const [openUserOptions, setOpenUserOptions] = useState(false);

  return (
    <div>
      <div className="h-[70px] px-10 bg-[#00D0FF] flex items-center justify-between sticky top-0 z-50">
        <div className="flex-1/2 flex items-center gap-2">
          <LeftSideSheet />
          <Logo />
        </div>
        <div className="w-full hidden items-center gap-2 lg:flex">
          <div
            onClick={() => setOpenSearchOptions((prev) => !prev)}
            className="border relative px-3 gap-1.5 bg-white border-white w-full h-9 flex items-center rounded-full"
          >
            <FiSearch size={16} color="#ADADAD" />
            <input
              placeholder="Search product here..."
              type="text"
              className="placeholder:text-[#ADADAD] placeholder:text-sm text-sm outline-none bg-white text-black w-full h-full rounded-full"
            />
            {openSearchOptions && (
              <div className="absolute top-0 mt-10 left-0 right-0 mx-auto bg-white px-4 py-3 rounded-2xl">
                <ul>
                  {searchData.map((data) => (
                    <li
                      key={data.id}
                      className="py-2 text-black/85 rounded-xl hover:bg-black/10 hover:text-black px-2 cursor-pointer"
                    >
                      {data.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setOpenLocationOptions(true)}
            onMouseLeave={() => setOpenLocationOptions(false)}
            className="border cursor-pointer relative bg-white text-[#ADADAD] border-white h-9 flex items-center gap-1 px-3 rounded-full"
          >
            <FiMapPin size={16} />
            <span className="text-sm">Location</span>
            {openLocationOptions && (
              <div className="absolute top-8 left-0 right-0 mx-auto bg-transparent rounded-xl min-w-[200px] py-2">
                <div className="bg-white rounded-xl min-w-[200px] px-4 py-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Search location"
                      className="w-full h-8 border rounded-lg px-2 text-sm outline-none text-black/75"
                    />
                  </div>
                  <ul className="flex flex-col gap-0.5 py-2">
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Gurgaon
                    </li>
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Badshahpur
                    </li>
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Sohna
                    </li>
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Palwal
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1/2 flex items-center justify-end gap-5 text-white">
          <div
            onClick={() => setOpenThemeOptions((prev) => !prev)}
            className="relative"
          >
            <FiMoon size={24} className="cursor-pointer" />
            {openThemeOptions && (
              <div className="absolute top-8 -left-15 right-0 mx-auto w-fit h-fit rounded-xl py-2 bg-transparent">
                <div className="bg-white rounded-xl min-w-[150px] px-2">
                  <ul className="flex flex-col gap-0.5 py-2">
                    <li className="flex w-full text-nowrap items-center gap-1.5 text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <FiBarChart size={18} />
                      System Default
                    </li>
                    <li className="flex w-full text-nowrap items-center gap-1.5 text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <FiMoon size={18} />
                      Dark Theme
                    </li>
                    <li className="flex w-full text-nowrap items-center gap-1.5 text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <FiSun size={18} />
                      Light Theme
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => setOpenNotificationOptions((prev) => !prev)}
          >
            <FiBell size={24} />
            <div className="w-5 h-4 rounded-full absolute -top-1.5 -right-1.5 bg-white text-black flex items-center justify-center">
              <span className="text-xs">6</span>
            </div>
            {openNotificationOptions && (
              <div className="absolute top-8 shadow-2xl right-0 mx-auto bg-transparent rounded-xl min-w-[200px] py-2">
                <div className="bg-white rounded-xl min-w-[200px] px-4 py-3">
                  <ul className="flex flex-col gap-0.5 py-2">
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <h3 className="text-lg text-[#00d0ff] text-nowrap">
                        Mobile sale comming soon
                      </h3>
                      <p className="text-xs text-black/40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. sum ullam culpa ut modi.
                      </p>
                    </li>
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <h3 className="text-lg text-[#00d0ff] text-nowrap">
                        Shoes new arrival
                      </h3>
                      <p className="text-xs text-black/40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. sum ullam culpa ut modi.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenBookmarkOptions((prev) => !prev)}
          >
            <FiBookmark size={24} />
            <div className="w-5 h-4 rounded-full absolute -top-1.5 -right-1.5 bg-white text-black flex items-center justify-center">
              <span className="text-xs">9</span>
            </div>
            {openBookmarkOptions && (
              <div className="absolute top-8 right-0 mx-auto bg-transparent rounded-xl min-w-[200px] py-2">
                <div className="bg-white rounded-xl min-w-[200px] px-4 py-3">
                  <ul className="flex flex-col gap-0.5 py-2">
                    <li className="text-sm flex items-center gap-2 px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <Image
                        src="/f_vegi.png"
                        width={50}
                        height={50}
                        className="rounded-full border-black object-cover"
                        alt="user photo"
                      />
                      <span className="text-nowrap">Casual shoes</span>
                    </li>
                    <li className="text-sm flex items-center gap-2 px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <Image
                        src="/f_vegi.png"
                        width={50}
                        height={50}
                        className="rounded-full border-black object-cover"
                        alt="user photo"
                      />
                      <span className="text-nowrap">Jacket</span>
                    </li>
                    <li className="text-sm flex items-center gap-2 px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <Image
                        src="/f_vegi.png"
                        width={50}
                        height={50}
                        className="rounded-full border-black object-cover"
                        alt="user photo"
                      />
                      <span className="text-nowrap">Kasmiri Apples</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenShopingCartOptions((prev) => !prev)}
          >
            <FiShoppingBag size={24} />
            <div className="w-5 h-4 rounded-full absolute -top-1.5 -right-1.5 bg-white text-black flex items-center justify-center">
              <span className="text-xs">3</span>
            </div>
            {openShopingCartOptions && (
              <div className="absolute top-8 shadow-2xl right-0 mx-auto bg-transparent rounded-xl min-w-[200px] py-2">
                <div className="bg-white rounded-xl min-w-[200px] px-4 py-3">
                  <ul className="flex flex-col gap-0.5 py-2">
                    <li className="text-sm flex items-center gap-2 px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <Image
                        src="/f_vegi.png"
                        width={50}
                        height={50}
                        className="rounded-full border-black object-cover"
                        alt="user photo"
                      />
                      <span className="text-nowrap">Casual shoes</span>
                    </li>
                    <li className="text-sm flex items-center gap-2 px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <Image
                        src="/f_vegi.png"
                        width={50}
                        height={50}
                        className="rounded-full border-black object-cover"
                        alt="user photo"
                      />
                      <span className="text-nowrap">Jacket</span>
                    </li>
                    <li className="text-sm flex items-center gap-2 px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      <Image
                        src="/f_vegi.png"
                        width={50}
                        height={50}
                        className="rounded-full border-black object-cover"
                        alt="user photo"
                      />
                      <span className="text-nowrap">Kasmiri Apples</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onClick={() => setOpenUserOptions((prev) => !prev)}
          >
            <FiUser size={24} className="cursor-pointer" />
            {openUserOptions && (
              <div className="absolute top-8 shadow-2xl right-0 bg-transparent rounded-xl min-w-[200px] py-2">
                <div className="bg-white rounded-xl min-w-[200px] px-4 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/user_profile.jfif"
                      width={45}
                      height={45}
                      className="rounded-full border-black object-cover"
                      alt="user photo"
                    />
                    <p className="text-black/75 text-sm">Mahesh Saini</p>
                  </div>
                  <hr className="border-t-0 border-b-[1px] text-black/20 mt-2 mb-1" />
                  <ul className="flex flex-col gap-0.5 pb-2">
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Settings
                    </li>
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Orders
                    </li>
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Wishlist
                    </li>
                    <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                      Notifications
                    </li>
                    <hr className="border-t-0 border-b-[1px] text-black/20 mt-2 mb-1" />
                    <li className="text-sm flex items-center gap-2 px-2 py-1.5 hover:bg-[#efefef] text-red-500 cursor-pointer rounded-lg">
                      <FiLogOut size={18} /> Logout
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[80%] flex items-center gap-2 lg:hidden py-4 mx-10 me-10">
        <div
          onClick={() => setOpenSearchOptions((prev) => !prev)}
          className="border  relative px-3 gap-1.5 bg-white border-cyan-400 w-full h-9 flex items-center rounded-full"
        >
          <FiSearch size={16} color="#ADADAD" />
          <input
            placeholder="Search product here..."
            type="text"
            className="placeholder:text-[#ADADAD] placeholder:text-sm text-sm outline-none bg-white text-black w-full h-full rounded-full"
          />
          {openSearchOptions && (
            <div className="absolute z-10 top-0 mt-10 left-0 right-0 mx-auto bg-white px-4 py-3 rounded-2xl">
              <ul>
                {searchData.map((data) => (
                  <li
                    key={data.id}
                    className="py-2 text-black/85 rounded-xl hover:bg-black/10 hover:text-black px-2 cursor-pointer"
                  >
                    {data.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          onMouseEnter={() => setOpenLocationOptions(true)}
          onMouseLeave={() => setOpenLocationOptions(false)}
          className="border cursor-pointer relative bg-white text-[#ADADAD] border-cyan-400 h-9 flex items-center gap-1 px-3 rounded-full"
        >
          <FiMapPin size={16} />
          <span className="text-sm">Location</span>
          {openLocationOptions && (
            <div className="absolute z-10 top-8 left-0 right-0 mx-auto bg-transparent rounded-xl min-w-[200px] py-2">
              <div className="bg-white rounded-xl min-w-[200px] px-4 py-3">
                <div>
                  <input
                    type="text"
                    placeholder="Search location"
                    className="w-full h-8 border rounded-lg px-2 text-sm outline-none text-black/75"
                  />
                </div>
                <ul className="flex flex-col gap-0.5 py-2">
                  <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                    Gurgaon
                  </li>
                  <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                    Badshahpur
                  </li>
                  <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                    Sohna
                  </li>
                  <li className="text-sm px-2 py-1.5 hover:bg-[#efefef] text-black/75 cursor-pointer rounded-lg">
                    Palwal
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
