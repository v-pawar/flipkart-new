import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Carousel8() {
  const cards = [
    { src: "/img/Carousel20.jpg", name: "Casual Shirts", offer: "Best Picks" },
    { src: "/img/Carousel21.jpg", name: "Wrist Watches", offer: "Min. 90% Off" },
    { src: "/img/Carousel22.jpg", name: "Kids' Apparel Combos", offer: "Min. 50% Off" },
    { src: "/img/Carousel23.jpg", name: "Laptop Bags", offer: "Min. 70% Off" },
  ];

  return (
    <div className="bg-white mt-4 max-w-[70rem] mx-auto p-4 relative">
      {/* Heading Row */}
      <div className="flex items-center justify-between px-2 pt-2">
        <h2 className="text-2xl font-semibold">Fashion's Top Deals</h2>
        {/* Right Arrow Button */}
        <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">
          <FaChevronRight />
        </button>
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center border rounded-md shadow-sm hover:shadow-md transition p-4"
          >
            <img
              src={c.src}
              alt={c.name + " " + (idx + 1)}
              className="w-[192px] h-[192px] object-cover"
            />
            <div className="mt-3 text-base font-medium">{c.name}</div>
            <div className="text-green-600 font-semibold text-sm">{c.offer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}