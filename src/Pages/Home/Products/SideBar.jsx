import React from "react";
import {
  PiGridFourFill,
  PiDeviceMobileCameraFill,
  PiHeadphonesFill,
  PiDressFill,
  PiBowlFoodFill,
  PiWatchFill,
} from "react-icons/pi";

const categories = [
  { icon: <PiGridFourFill />, name: "All Categories" },
  { icon: <PiDeviceMobileCameraFill />, name: "Electronic Devices" },
  { icon: <PiHeadphonesFill />, name: "Accessories" },
  { icon: <PiDressFill />, name: "Fashion & Clothing" },
  { icon: <PiBowlFoodFill />, name: "Groceries & Foods" },
  { icon: <PiWatchFill />, name: "Watches" },
];

const topBrands = ["Samsung", "Apple", "Sony", "Xiaomi", "Gucci", "Rolex"];
const ratings = ["5 Star", "4 Star & Above", "3 Star & Above"];
const offers = ["Flash Sale", "Free Delivery", "Buy 1 Get 1"];

const SideBar = ({ category, setCategory }) => {
  return (
    <div className="w-full md:w-[20%] border rounded-xl border-gray-200 shadow-md p-5 bg-white">

      <h1 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-900">
        Categories
      </h1>

      <div className="flex flex-col gap-2 mb-6">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(item.name)}
            className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer 
              transition-all duration-300
              ${
                category === item.name
                  ? "bg-green-100 text-green-700"
                  : "hover:bg-green-50 text-gray-800"
              }`}
          >
            <span className="text-xl text-green-600">{item.icon}</span>
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-3 border-b pb-2 text-gray-900">
        Top Brands
      </h2>
      <div className="flex flex-col gap-2 mb-6">
        {topBrands.map((brand, index) => (
          <p key={index} className="text-gray-700 text-sm hover:text-green-600 cursor-pointer">
            • {brand}
          </p>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-3 border-b pb-2 text-gray-900">
        Ratings
      </h2>
      <div className="flex flex-col gap-2 mb-6">
        {ratings.map((rate, index) => (
          <p key={index} className="text-gray-700 text-sm hover:text-green-600 cursor-pointer">
            ⭐ {rate}
          </p>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-3 border-b pb-2 text-gray-900">
        Offers
      </h2>
      <div className="flex flex-col gap-2 mb-6">
        {offers.map((offer, index) => (
          <p key={index} className="text-gray-700 text-sm hover:text-green-600 cursor-pointer">
            🔥 {offer}
          </p>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-3 border-b pb-2 text-gray-900">
        Support
      </h2>
      <div className="text-gray-700 text-sm leading-6">
        <p className="hover:text-green-600 cursor-pointer">📞 Contact Us</p>
        <p className="hover:text-green-600 cursor-pointer">❓ FAQs</p>
        <p className="hover:text-green-600 cursor-pointer">⚙️ Settings</p>
      </div>
    </div>
  );
};

export default SideBar;
