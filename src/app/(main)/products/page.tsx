import ProductCard from "@/components/product-card/ProductCard";
import React from "react";
import { FiChevronRight, FiStar } from "react-icons/fi";

function ProductsPage() {
  return (
    <div className="flex gap-8 mx-10 mt-4">
      <div className="min-w-[240px] bg-[#00D0FF] rounded-lg px-4 py-3 h-fit">
        <h3 className="text-white">Categoies</h3>
        <ul className="mt-2">
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>All</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Electronics</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Fruits & Vegetables</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Footware</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Fashion & Clothes</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Household & Essentials</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Soft Drinks & Beverage</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Plastic Accessories</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Beauty & Cosmatics</span> <FiChevronRight size={16} />
          </li>
          <li className="text-sm py-1 text-white flex items-center justify-between">
            <span>Others</span> <FiChevronRight size={16} />
          </li>
        </ul>

        <div>
          <h3>Price</h3>
          <div>
            <div>price bar</div>
            <div>prices</div>
            <div>price selector</div>
          </div>
        </div>

        <div className="text-white mt-8">
          <h3 className="mb-2">Ratings</h3>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="rating5star" />
            <div className="flex items-center gap-1.5">
              <label
                htmlFor="rating5star"
                className="flex items-center gap-0.5"
              >
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
              </label>
              <span className="text-xs">(5 star)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input type="checkbox" name="rating5star" />
            <div className="flex items-center gap-1.5">
              <label
                htmlFor="rating5star"
                className="flex items-center gap-0.5"
              >
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} />
              </label>
              <span className="text-xs">(5 star)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input type="checkbox" name="rating5star" />
            <div className="flex items-center gap-1.5">
              <label
                htmlFor="rating5star"
                className="flex items-center gap-0.5"
              >
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} />
                <FiStar size={16} />
              </label>
              <span className="text-xs">(5 star)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input type="checkbox" name="rating5star" />
            <div className="flex items-center gap-1.5">
              <label
                htmlFor="rating5star"
                className="flex items-center gap-0.5"
              >
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} />
                <FiStar size={16} />
                <FiStar size={16} />
              </label>
              <span className="text-xs">(5 star)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input type="checkbox" name="rating5star" />
            <div className="flex items-center gap-1.5">
              <label
                htmlFor="rating5star"
                className="flex items-center gap-0.5"
              >
                <FiStar size={16} className="fill-yellow-500 text-yellow-500" />
                <FiStar size={16} />
                <FiStar size={16} />
                <FiStar size={16} />
                <FiStar size={16} />
              </label>
              <span className="text-xs">(1 star)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center justify-between pb-4">
          <p>24 product found</p>
          <div className="flex items-center gap-4">
            <select name="" id="">
              <option value="">Option A</option>
              <option value="">Option A</option>
              <option value="">Option A</option>
              <option value="">Option A</option>
              <option value="">Option A</option>
            </select>
            <select name="" id="">
              <option value="">Option A</option>
              <option value="">Option A</option>
              <option value="">Option A</option>
              <option value="">Option A</option>
              <option value="">Option A</option>
              <option value="">Option A</option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-y-8 justify-between">
          <ProductCard image="/apple.png" />
          <ProductCard image="/Bangles.png" />
          <ProductCard image="/coca-cola.png" />
          <ProductCard image="/cucumber1.png" />
          <ProductCard image="/electronis.png" />
          <ProductCard image="/fash_wash.png" />
          <ProductCard image="/jaket.png" />
          <ProductCard image="/jeans.png" />
          <ProductCard image="/refined.png" />
          <ProductCard image="/rice.png" />
          <ProductCard image="/shoes.png" />
          <ProductCard image="/cucumber1.png" />
          <ProductCard image="/apple.png" />
          <ProductCard image="/Bangles.png" />
          <ProductCard image="/coca-cola.png" />
          <ProductCard image="/cucumber1.png" />
          <ProductCard image="/electronis.png" />
          <ProductCard image="/fash_wash.png" />
          <ProductCard image="/jaket.png" />
          <ProductCard image="/jeans.png" />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
