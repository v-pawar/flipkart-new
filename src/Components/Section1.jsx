import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Section1() {
  const categories = [
    { name: "Minutes", img: "/img/minutes.png", dropdown: false },
    { name: "Mobiles & Tablets", img: "/img/mobiles.png", dropdown: false },

    {
      name: "Fashion",
      img: "/img/fashion.png",
      dropdown: true,
      submenu: [
        "Men's Clothing",
        "Women's Clothing",
        "Kids Wear",
        "Footwear",
        "Accessories",
        "Watches",
      ],
    },

    {
      name: "Electronics",
      img: "/img/electronics.png",
      dropdown: true,
      submenu: [
        "Laptops",
        "Mobiles",
        "Tablets",
        "Headphones",
        "Cameras",
        "Smartwatches",
      ],
    },

    {
      name: "Home & Furniture",
      img: "/img/home.png",
      dropdown: true,
      submenu: [
        "Sofas",
        "Beds",
        "Chairs",
        "Tables",
        "Wardrobes",
        "Kitchen Essentials",
        "Lighting",
      ],
    },

    { name: "TVs & Appliances", img: "/img/tv.png", dropdown: false },

    { name: "Flight Bookings", img: "/img/flight.png", dropdown: false },

    {
      name: "Beauty, Food, Toys",
      img: "/img/beauty.png",
      dropdown: true,
      submenu: [
        "Makeup",
        "Skincare",
        "Personal Care",
        "Snacks & Beverages",
        "Baby Care",
        "Toys & Games",
        "Sports & Fitness",
      ],
    },
  ];

  return (
    <div className="bg-white shadow-sm mt-4 px-16 py-6 rounded-md border border-gray-200 mx-12">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center cursor-pointer hover:text-blue-600 transition"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-16 h-16 object-contain mb-1"
            />
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-800">
                {cat.name}
              </span>
              {cat.dropdown && (
                <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
              )}
            </div>

            {/* Dropdown Menu */}
            {cat.dropdown && cat.submenu && cat.submenu.length > 0 && (
              <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
                <ul className="flex flex-col py-2">
                  {cat.submenu.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
