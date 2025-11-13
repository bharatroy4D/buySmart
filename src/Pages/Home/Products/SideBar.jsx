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

const SideBar = () => {
  return (
    <div className="w-full md:w-[25%] border rounded border-green-500 shadow-md p-4">
      {/* Header */}
      <h1 className="flex items-center gap-2 font-semibold text-lg text-green-700 border-b pb-2 mb-3">
        <PiGridFourFill className="text-green-600 text-xl" />
        Categories
      </h1>

      {/* Category List */}
      <div className="flex flex-col gap-2 mb-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-green-50 hover:text-green-700 transition-all duration-300 group"
          >
            <span className="text-xl text-green-600 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <p className="text-sm font-medium group-hover:text-green-700">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="border-t border-green-200 pt-3">
        <h2 className="font-semibold text-green-700 mb-2 text-base">Filters</h2>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-1">Price Range</h3>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-green-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-green-500"
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-1">Brand</h3>
          <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-green-500">
            <option>All</option>
            <option>Samsung</option>
            <option>Apple</option>
            <option>Xiomi</option>
            <option>Oppo</option>
            <option>Realme</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1">Rating</h3>
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> 5 Stars
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> 4 Stars & Up
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> 3 Stars & Up
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
