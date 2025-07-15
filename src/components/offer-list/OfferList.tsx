import OfferCard from "../offer-card/OfferCard";

const offerListItems = [
  {
    id: 1,
    title: "Groceries",
    discountText: "15% flat discount",
    link: "/",
    image: "/grocery.png",
  },
  {
    id: 2,
    title: "Fruits & Vegetables",
    discountText: "15% flat discount",
    link: "/",
    image: "/fruit_vegi.png",
  },
  {
    id: 3,
    title: "Fashion & Clothes",
    discountText: "15% flat discount",
    link: "/",
    image: "/jeans.png",
  },
  {
    id: 4,
    title: "Electronics",
    discountText: "15% flat discount",
    link: "/",
    image: "/electronis.png",
  },
];

function OfferList() {
  return (
    <div className="flex items-center gap-4 my-8 flex-wrap">
      {offerListItems.map((item) => (
        <OfferCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default OfferList;
