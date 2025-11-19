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

const SideBar = ({ category, setCategory }) => {
  return (
    <div className="w-full md:w-[20%] border rounded-xl border-gray-200 shadow-md p-5 bg-white">

      <h1 className="text-xl font-semibold mb-4 border-b pb-2">
        Categories
      </h1>

      <div className="flex flex-col gap-2">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(item.name)}
            className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer 
              transition-all duration-300
              ${category === item.name ? "bg-green-100 text-green-700" : "hover:bg-green-50"}
            `}
          >
            <span className="text-xl text-green-600">{item.icon}</span>
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SideBar;
