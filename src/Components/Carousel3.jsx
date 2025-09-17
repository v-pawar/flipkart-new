import React, { useState } from "react";

const Carousel3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    { title: "Fans & Geysers", price: "From ₹999", category: "Home Essenti...", image: "/img/fans-geysers.jpg" },
    { title: "Projector", price: "From ₹6990", category: "Electronics", image: "/img/projector.jpg" },
    { title: "Best Selling M...", price: "From ₹499*", category: "Best Sellers", image: "/img/best-selling.jpg" },
    { title: "Monitors", price: "From ₹6599", category: "Computers", image: "/img/monitors.jpg" },
    { title: "Fastrack Smar.", price: "From ₹1,399", category: "Wearables", image: "/img/fastrack.jpg" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-[70rem] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Deals</h2>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <img src={item.image} alt={item.title} className="h-48 w-full object-contain" />

                  {/* Content */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.price}</p>
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            ◀
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            ▶
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel3;
