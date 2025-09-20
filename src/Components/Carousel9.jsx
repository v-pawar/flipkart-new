import React from "react";

const Carousel9 = () => {
    const carouselItems = [
         { title: "stylish pick!", price: "From ₹249", category: " ", image: "/img/girl1.jpg" },
        { title: "echo wear!", price: "From ₹ 399", category: "", image: "/img/girl2.jpg" },
        { title: "Trendy Jewell... ", price: "From ₹149", category: "", image: "/img/girl3.jpg" },
        { title: "celestial vibes", price: "under ₹399", category: "", image: "/img/girl4.jpg" },
        { title: "ins.carltone", price: "min 60 % off", category: "", image: "/img/girl5.jpg" },
        { title: "Cool lewks", price: "under ₹399", category: "", image: "/img/girl6.jpg" },
        { title: "step in Style", price: "From ₹399", category: "", image: "/img/girl7.jpg" },
        { title: "Kurta Sets", price: "min 75% off", category: "", image: "/img/girl8.jpg" },

     ];

    return (
        <div className="bg-white py-8 px-4 mt-4 max-w-[70rem] mx-auto h-[347px]">
            <div className="max-w-[75rem] mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Deals</h2>

                {/* Scrollable Carousel */}
                <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth">
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[170px] bg-white rounded-lg overflow-hidden"
                            style={{ height: "250px" }}
                        >
                            {/* Image Container - Fixed height with centered content */}
                            <div className="h-[150px] flex items-center justify-center p-2 bg-white -50 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 text-center">
                                {/* Title */}
                                <h3 className="font-semibold text-base line-clamp-2 mb-1">
                                    {item.title}
                                </h3>

                                {/* Price */}
                                <p className=" text-gray-800 font-bold text-sm mb-1">
                                    {item.price}
                                </p>

                                {/* Category */}
                                <span className="text-xs text-gray-500">
                                    {item.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

           
        </div>
    );
};

export default Carousel9;