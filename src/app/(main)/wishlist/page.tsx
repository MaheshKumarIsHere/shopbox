import React from "react";

function WishlistPage() {
  return (
    <div className="px-10 py-4">
      <h1 className="text-3xl font-black text-black/85">My Wishlist</h1>
      <p className="text-black/70">There are 4 products in this wishlist.</p>

      <div className="mt-8">
        <table className="w-full">
          <tr className="">
            <th className="p-2">Product</th>
            <th className="p-2">Ammount</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
            <th className="p-2">Remove</th>
          </tr>
          <tr>
            <td className="p-2">Alfreds Futterkiste</td>
            <td className="p-2">Maria Anders</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
          </tr>
          <tr>
            <td className="p-2">Alfreds Futterkiste</td>
            <td className="p-2">Maria Anders</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
          </tr>
          <tr>
            <td className="p-2">Alfreds Futterkiste</td>
            <td className="p-2">Maria Anders</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
          </tr>
          <tr>
            <td className="p-2">Alfreds Futterkiste</td>
            <td className="p-2">Maria Anders</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
          </tr>
          <tr>
            <td className="p-2">Alfreds Futterkiste</td>
            <td className="p-2">Maria Anders</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
          </tr>
          <tr>
            <td className="p-2">Alfreds Futterkiste</td>
            <td className="p-2">Maria Anders</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
            <td className="p-2">Germany</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default WishlistPage;
