import React from "react";

const Carousel5 = () => {
    const carouselItems = [
         { title: "puma adida...", price: "From ₹999", category: " ", image: "/img/carousel6.jpg" },
        { title: "remote contr...", price: "From ₹6990", category: "", image: "/img/carousel7.jpg" },
        { title: "top selling st...", price: "From ₹499*", category: "", image: "/img/carousel8.jpg" },
        { title: "Best Selling M...", price: "From ₹499*", category: "", image: "/img/carousel9.jpg" },
        { title: "toys and gam...", price: "From ₹6599", category: "", image: "/img/carousel10.jpg" },
        { title: "Geared cycle...", price: "From ₹1,399", category: "", image: "/img/carousel11.jpg" },
        { title: "dry fruit...", price: "From ₹10,499", category: "", image: "/img/carousel12.jpg" },
        { title: "soft toye...", price: "From ₹8,999", category: "", image: "/img/carousel13.jpg" },
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

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Carousel5;