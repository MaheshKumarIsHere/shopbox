"use client";
import DailyBestDealList from "@/components/daily-best-deal-list/DailyBestDealList";
import FeaturedProductList from "@/components/featured-product-list/FeaturedProductList";
import HeroSection from "@/components/hero-section/HeroSection";
import OfferList from "@/components/offer-list/OfferList";
import { redirect } from "next/navigation";

export default function Home() {
  // const token = localStorage.getItem("token");
  // if (!token) {
  //   redirect("/sign-in");
  // }
  return (
    <div className="mt-4 mx-10">
      <HeroSection />
      <OfferList />
      <FeaturedProductList />
      <DailyBestDealList />
    </div>
  );
}
