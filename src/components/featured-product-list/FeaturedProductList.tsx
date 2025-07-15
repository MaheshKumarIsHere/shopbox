import React from "react";
import ProductCard from "../product-card/ProductCard";

function FeaturedProductList() {
  return (
    <div className="my-14">
      <h1 className="text-3xl text-black/75 font-medium mb-3">
        Featured Products
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-x-4.5 gap-y-7">
        <ProductCard image="/rice.png" />
        <ProductCard image="/cucumber1.png" />
        <ProductCard image="/jeans.png" />
        <ProductCard image="/jaket.png" />
        <ProductCard image="/apple.png" />
        <ProductCard image="/shoes.png" />
        <ProductCard image="/coca-cola.png" />
        <ProductCard image="/Bangles.png" />
        <ProductCard image="/fash_wash.png" />
        <ProductCard image="/refined.png" />
      </div>
    </div>
  );
}

export default FeaturedProductList;
