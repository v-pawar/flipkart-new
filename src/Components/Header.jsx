import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { FaStore, FaGift, FaHeadset, FaBullhorn } from "react-icons/fa";

export default function Header() {
  return (
    <footer className="bg-black text-white mt-6">
      {/* ====== Upper Footer Section ====== */}
      <div className="py-10 px-6">
        <div className="max-w-[80rem] mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-3">ABOUT</h3>
            <ul className="space-y-2">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Flipkart Stories</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h3 className="font-semibold mb-3">GROUP COMPANIES</h3>
            <ul className="space-y-2">
              <li><a href="#">Myntra</a></li>
              <li><a href="#">Cleartrip</a></li>
              <li><a href="#">Shopsy</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-3">HELP</h3>
            <ul className="space-y-2">
              <li><a href="#">Payments</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>


        </div>

        {/* Address Section */}
        <div className="max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-xs text-gray-300">

          {/* Consumer Policy */}
          <div>
            <h3 className="font-semibold mb-3">CONSUMER POLICY</h3>
            <ul className="space-y-2">
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Grievance Redressal</a></li>
              <li><a href="#">EPR Compliance</a></li>
            </ul>
          </div>


          {/* mail us */}

          <div>
            <h4 className="font-semibold mb-2">Mail Us:</h4>
            <p>
              Flipkart Internet Private Limited, <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
              Outer Ring Road, Devarabeesanahalli Village, <br />
              Bengaluru, 560103, Karnataka, India
            </p>
            <div className="mt-4">
              <h1>social:</h1>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#"><FaFacebookF size={20} /></a>
              <a href="#"><FaXTwitter size={20} /></a>
              <a href="#"><FaYoutube size={20} /></a>
              <a href="#"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Registered Office Address */}

          <div>
            <h4 className="font-semibold mb-2">Registered Office Address:</h4>
            <p>
              Flipkart Internet Private Limited, <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
              Outer Ring Road, Devarabeesanahalli Village, <br />
              Bengaluru, 560103, Karnataka, India <br />
              CIN : U51109KA2012PTC066107 <br />
              Telephone: <a href="tel:04445614700" className="text-blue-400">044-45614700</a> /{" "}
              <a href="tel:04467415800" className="text-blue-400">044-67415800</a>
            </p>
          </div>
        </div>
      </div>

      {/* ====== Bottom Footer Section ====== */}
      <div className="border-t border-gray-700 py-4 px-6">
        <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">

          {/* Left Side Links */}
          <div className="flex flex-wrap gap-6 ">
            <a href="#" className="flex items-center gap-2  text-white-400"><FaStore /> Become a Seller</a>
            <a href="#" className="flex items-center gap-2  text-white-400"><FaBullhorn /> Advertise</a>
            <a href="#" className="flex items-center gap-2  text-white-400"><FaGift /> Gift Cards</a>
            <a href="#" className="flex items-center gap-2  text-white-400"><FaHeadset /> Help Center</a>
          </div>

          {/* Middle Text */}
          <div className="text-gray-400">
            © 2007-2025 Flipkart.com
          </div>

          {/* Right Side Payment Options */}

          {/* Column 3: Payment Logos */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <img src="img/footer2.svg" alt="Visa" className="h-7  p-1 rounded" />


          </div>
        </div>
      </div>
    </footer>
  );
}

