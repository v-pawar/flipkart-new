import React, { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    "/img/carousel1.jpg",
    "/img/carousel2.jpg",
    "/img/carousel3.jpg",
    "/img/carousel4.jpg",
    "/img/carousel5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (                          
    <div className="relative w-full  max-w-[70rem] mx-auto mt-4 rounded-md overflow-hidden">
      {/* Images */}
      <div className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-black" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}