import React from "react";
import {MdSearch,MdShoppingCart,MdStore,MdMoreVert, MdAccountCircle,} from "react-icons/md";
import {FaChevronDown,FaUser,FaBoxOpen,FaHeart, FaSignOutAlt,FaBell,FaHeadset,FaBullhorn,FaMobileAlt,} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-4 shadow sticky top-0 z-50">

      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          width="160"
          height="40"
          title="Flipkart"
        />
      </div>


      {/* Center: Search Box */}
      <div className="flex flex-1 max-w-xl mx-6">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 flex-1 bg-gray-200">
          <MdSearch className="text-gray-500 text-2xl mr-2" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="flex-1 text-xl focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Right: Menu */}
      <div className="flex items-center gap-6 text-sm font-medium mr-4">
        {/* Account Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600">
            <MdAccountCircle className="text-3xl" />
            Account
            <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
          </button>

          {/* Dropdown Menu */}
          <div className="absolute top-10 left-0 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <ul className="py-2">
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <FaUser /> My Profile
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <FaBoxOpen /> Orders
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <FaHeart /> Wishlist
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer text-red-500">
                <FaSignOutAlt /> Logout
              </li>
            </ul>
          </div>
        </div>

        {/* Cart with badge */}
        <div className="relative">
          <MdShoppingCart className="text-2xl hover:text-blue-600" />
          <span className="absolute -top-2 -right-2  text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            
          </span>
        </div>

        {/* Store */}
        <button className="flex items-center gap-1 hover:text-blue-600">
          <MdStore className="text-2xl" />
        </button>

        {/* More Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600">
            <MdMoreVert className="text-2xl" />
          </button>

          {/* Dropdown Menu */}
          <div className="absolute top-10 right-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <ul className="py-2">
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <FaBell /> Notifications
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <FaHeadset /> 24x7 Support
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <FaBullhorn /> Advertise
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <FaMobileAlt /> Download App
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
